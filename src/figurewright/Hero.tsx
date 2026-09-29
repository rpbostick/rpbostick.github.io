import { useCallback, useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent, type MouseEvent as ReactMouseEvent } from 'react'
import Waves from '../reactbits/Waves/Waves.tsx'
import { useAnimations } from '../shared/motion.ts'
import { useTheme } from '../shared/theme.ts'
import { useMediaQuery } from '../shared/useMediaQuery.ts'
import { usePageVisible } from '../shared/usePageVisible.ts'
import { ColorDrive, wheelTicks } from './colorDrive.ts'
import { activeAfterPress, clickActivates, isDrag, MIDDLE_BUTTON, startsDrag } from './heroInput.ts'
import { colorAt, heroBackgrounds, nearestStopIndex, stopsByTheme } from './palette.ts'
import { dominantAxis, dragDelta, motionAt, PatternDrive, patternLabel, type Axis } from './patternDrive.ts'

const SPLASH = { src: '/figurewright/splash-easing.svg', width: 1355, height: 764 }

// The page has one hero, so one of each drive; they live outside React
// because the Waves draw loop, not rendering, advances them.
const drive = new ColorDrive()
const patternDrive = new PatternDrive()

function onStrip(target: EventTarget | null): boolean {
  return target instanceof Element && target.closest('.hero-strip') !== null
}

interface Drag {
  pointerId: number
  startX: number
  startY: number
  lastX: number
  lastY: number
  lastTime: number
  // Locked when the pointer first passes the drag threshold.
  axis: Axis | null
}

export default function Hero() {
  // The Animations toggle, which starts from prefers-reduced-motion.
  const reducedMotion = !useAnimations()
  const pageVisible = usePageVisible()
  const coarsePointer = useMediaQuery('(pointer: coarse)')
  const theme = useTheme()
  const stops = stopsByTheme[theme]

  const heroRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(false)
  const [dragging, setDragging] = useState(false)
  const [stopIndex, setStopIndex] = useState(0)
  const [pattern, setPattern] = useState(() => patternLabel(patternDrive.current))
  const stopsRef = useRef(stops)
  const shownIndexRef = useRef(0)
  const shownPatternRef = useRef(pattern)
  const activeRef = useRef(active)
  // Whether the gesture that ends in the next click was a drag.
  const draggedRef = useRef(false)

  useEffect(() => {
    stopsRef.current = stops
  }, [stops])

  useEffect(() => {
    activeRef.current = active
  }, [active])

  useEffect(() => {
    drive.reducedMotion = reducedMotion
    patternDrive.reducedMotion = reducedMotion
  }, [reducedMotion])

  // Called by Waves once per frame; the tag re-renders only when the nearest
  // stop changes.
  const lineColor = useCallback(() => {
    const position = drive.advance(performance.now())
    const index = nearestStopIndex(position)
    if (index !== shownIndexRef.current) {
      shownIndexRef.current = index
      setStopIndex(index)
    }
    return colorAt(stopsRef.current, position)
  }, [])

  // Also called by Waves once per frame. Reduced motion keeps the pattern's
  // shape but not its flow, as before the pattern could change.
  const waveMotion = useCallback(() => {
    const position = patternDrive.advance(performance.now())
    const label = patternLabel(position)
    if (label !== shownPatternRef.current) {
      shownPatternRef.current = label
      setPattern(label)
    }
    const motion = motionAt(position)
    return reducedMotion ? { ...motion, waveSpeedX: 0, waveSpeedY: 0 } : motion
  }, [reducedMotion])

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    let drag: Drag | null = null

    function onPointerDown(event: PointerEvent) {
      if (event.button === MIDDLE_BUTTON) {
        setActive((current) => activeAfterPress(current, event.button))
        return
      }
      draggedRef.current = false
      if (!startsDrag(event.button, event.pointerType, activeRef.current, onStrip(event.target))) return
      const now = performance.now()
      drag = {
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        lastX: event.clientX,
        lastY: event.clientY,
        lastTime: now,
        axis: null,
      }
      patternDrive.grab(now)
    }
    function onPointerMove(event: PointerEvent) {
      if (!drag || event.pointerId !== drag.pointerId) return
      if (drag.axis === null) {
        const fromStartX = event.clientX - drag.startX
        const fromStartY = event.clientY - drag.startY
        if (!isDrag(fromStartX, fromStartY)) return
        drag.axis = dominantAxis(fromStartX, fromStartY)
        draggedRef.current = true
        // Captured only once it is a drag, so a plain click keeps its target.
        hero?.setPointerCapture(event.pointerId)
        window.getSelection()?.removeAllRanges()
        setDragging(true)
      }
      // The travel up to the threshold counts too (last = start until now).
      const now = performance.now()
      const dtMs = now - drag.lastTime
      patternDrive.drag(
        dragDelta(event.clientX - drag.lastX, event.clientY - drag.lastY, drag.axis, dtMs),
        dtMs,
        now,
      )
      drag.lastX = event.clientX
      drag.lastY = event.clientY
      drag.lastTime = now
    }
    function onPointerEnd(event: PointerEvent) {
      if (!drag || event.pointerId !== drag.pointerId) return
      if (drag.axis !== null) patternDrive.release(performance.now())
      drag = null
      setDragging(false)
    }
    // A middle press would otherwise start autoscroll (mousedown) and, on
    // Linux, paste the primary selection (mouseup / auxclick).
    function suppressMiddle(event: MouseEvent) {
      if (event.button === MIDDLE_BUTTON) event.preventDefault()
    }

    hero.addEventListener('pointerdown', onPointerDown)
    hero.addEventListener('pointermove', onPointerMove)
    hero.addEventListener('pointerup', onPointerEnd)
    hero.addEventListener('pointercancel', onPointerEnd)
    hero.addEventListener('mousedown', suppressMiddle)
    hero.addEventListener('mouseup', suppressMiddle)
    hero.addEventListener('auxclick', suppressMiddle)
    return () => {
      hero.removeEventListener('pointerdown', onPointerDown)
      hero.removeEventListener('pointermove', onPointerMove)
      hero.removeEventListener('pointerup', onPointerEnd)
      hero.removeEventListener('pointercancel', onPointerEnd)
      hero.removeEventListener('mousedown', suppressMiddle)
      hero.removeEventListener('mouseup', suppressMiddle)
      hero.removeEventListener('auxclick', suppressMiddle)
    }
  }, [])

  useEffect(() => {
    const hero = heroRef.current
    if (!active || !hero) return
    const accumulator = { pixels: 0 }

    function stepBy(ticks: number) {
      const now = performance.now()
      for (let tick = 0; tick < Math.abs(ticks); tick++) drive.step(ticks > 0 ? 1 : -1, now)
    }
    function onWheel(event: WheelEvent) {
      // The strip at the bottom is the way out: the wheel scrolls the page there.
      if (event.target instanceof Element && event.target.closest('.hero-strip')) return
      event.preventDefault()
      stepBy(wheelTicks(accumulator, event.deltaY, event.deltaMode, window.innerHeight))
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActive(false)
      } else if (event.key === 'ArrowDown' || event.key === 'PageDown') {
        event.preventDefault()
        stepBy(1)
      } else if (event.key === 'ArrowUp' || event.key === 'PageUp') {
        event.preventDefault()
        stepBy(-1)
      }
    }
    function onPointerDown(event: PointerEvent) {
      if (!(event.target instanceof Node) || !hero?.contains(event.target)) setActive(false)
    }
    // A touch pointer "leaves" as soon as the finger lifts, so only a mouse
    // or pen leaving the hero ends the session.
    function onPointerLeave(event: PointerEvent) {
      if (event.pointerType !== 'touch') setActive(false)
    }

    hero.addEventListener('wheel', onWheel, { passive: false })
    hero.addEventListener('pointerleave', onPointerLeave)
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      hero.removeEventListener('wheel', onWheel)
      hero.removeEventListener('pointerleave', onPointerLeave)
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [active])

  function onHeroKeyDown(event: ReactKeyboardEvent) {
    // Only the hero itself: preventing Enter/Space on the strip's button
    // would cancel the button's click.
    if (event.target !== event.currentTarget) return
    if (!active && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault()
      setActive(true)
    }
  }

  function scrollPastHero(event: ReactMouseEvent) {
    // Scrolling away should not also activate the hero.
    event.stopPropagation()
    const next = heroRef.current?.nextElementSibling
    if (!next) throw new Error('Hero: no element after the hero to scroll to')
    next.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' })
  }

  const stop = stops[stopIndex]
  const hint = active
    ? coarsePointer
      ? 'Drag to reshape the waves · tap outside to leave'
      : 'Scroll to shift colors · drag to reshape the waves · middle-click or Esc to leave'
    : coarsePointer
      ? 'Tap to play with the colors'
      : 'Click or middle-click to play with the colors'

  return (
    <header
      ref={heroRef}
      className={['hero', active && 'hero-active', dragging && 'hero-dragging'].filter(Boolean).join(' ')}
      tabIndex={0}
      role="group"
      aria-label="figurewright, with an interactive color background"
      aria-describedby="hero-hint"
      onClick={(event) => {
        if (clickActivates(onStrip(event.target), draggedRef.current)) setActive(true)
      }}
      onKeyDown={onHeroKeyDown}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setActive(false)
      }}
    >
      <Waves
        lineColor={lineColor}
        motion={waveMotion}
        backgroundColor={heroBackgrounds[theme]}
        // With animations off the waves hold still, except while someone is
        // playing with the hero: stepped colors and dragged patterns land
        // instantly then, but the frames still have to be drawn.
        paused={!pageVisible || (reducedMotion && !active)}
        xGap={12}
        yGap={36}
      />
      <div className="hero-content">
        <div className="hero-text">
          <h1>figurewright</h1>
          <p className="tagline">
            Build an avatar that looks like you: body shapes, swappable heads, and layered garments that
            fit every body.
          </p>
          <p className="status">In development. Open-source (MIT) release coming.</p>
        </div>
        <div className="lineup">
          <img
            src={SPLASH.src}
            width={SPLASH.width}
            height={SPLASH.height}
            draggable={false}
            alt="Three dressed figurewright figures of different builds in a relaxed, easing pose, between two original Open Peeps drawings they are built from: on the left, easing with the rig of joints and bones figurewright reads its pose from; on the right, pointing finger"
          />
        </div>
      </div>
      <div className="hero-tags">
        <p className="hero-tag color-tag">
          <span className="color-swatch" style={{ background: stop.hex }} aria-hidden="true" />
          {stop.label} · {stop.name}
        </p>
        <p className="hero-tag pattern-tag">
          <span className="pattern-icon" aria-hidden="true">
            ≈
          </span>
          {pattern}
        </p>
      </div>
      <p id="hero-hint" className="hero-hint">
        {hint}
      </p>
      <div className="hero-strip">
        <button type="button" className="hero-strip-button" onClick={scrollPastHero}>
          <span className="hero-strip-arrow" aria-hidden="true">
            ↓
          </span>{' '}
          Scroll here for more
        </button>
      </div>
    </header>
  )
}
