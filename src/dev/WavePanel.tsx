import { RippleField, rippleRadius, type GridPoint } from '@rpbostick/reactbits-kit/modules/rippleField'
import { useCallback, useEffect, useRef, useState } from 'react'
import Waves from '../reactbits/Waves/Waves.tsx'
import { ColorDrive } from '../figurewright/colorDrive.ts'
import { isDrag, LEFT_BUTTON, WavesPointer } from '../figurewright/heroInput.ts'
import { colorAt, heroBackgrounds, stopsByTheme } from '../figurewright/palette.ts'
import { motionAt, patternLabel } from '../figurewright/patternDrive.ts'
import { useAnimations } from '../shared/motion.ts'
import { useTheme } from '../shared/theme.ts'
import { usePageVisible } from '../shared/usePageVisible.ts'

// One color drive for every panel, so all of them draw in the same color at
// any moment and differ only in their pattern. Advancing it once per panel per
// frame is fine: each call adds only the time since the previous one.
const sharedColor = new ColorDrive()

// The hero's line gaps, so a panel's grid matches the hero's.
const X_GAP = 12
const Y_GAP = 36

// Deliberate: as in the hero, Waves' own cursor push stays off and the ripple
// field carries the drag.
const noWavesPointer = () => null

interface WavePanelProps {
  // The pattern position (see patternDrive.ts) at a time in ms; a whole
  // number holds one preset, a growing one morphs through them.
  position: (now: number) => number
}

export default function WavePanel({ position }: WavePanelProps) {
  const reducedMotion = !useAnimations()
  const pageVisible = usePageVisible()
  const theme = useTheme()
  const stops = stopsByTheme[theme]

  const panelRef = useRef<HTMLDivElement>(null)
  // Refs, like the hero's module-level drives: the draw loop and the pointer
  // handlers change them, not rendering. Both constructors are cheap, so
  // building one per render and keeping the first costs nothing.
  const pointerRef = useRef(new WavesPointer())
  const fieldRef = useRef(new RippleField())
  const stopsRef = useRef(stops)
  const positionRef = useRef(position)
  const [label, setLabel] = useState(() => patternLabel(position(performance.now())))
  const labelRef = useRef(label)
  const [dragging, setDragging] = useState(false)

  useEffect(() => {
    stopsRef.current = stops
  }, [stops])

  useEffect(() => {
    positionRef.current = position
  }, [position])

  useEffect(() => {
    sharedColor.reducedMotion = reducedMotion
    pointerRef.current.reducedMotion = reducedMotion
  }, [reducedMotion])

  const lineColor = useCallback(() => colorAt(stopsRef.current, sharedColor.advance(performance.now())), [])

  const waveMotion = useCallback(() => {
    const at = positionRef.current(performance.now())
    const next = patternLabel(at)
    if (next !== labelRef.current) {
      labelRef.current = next
      setLabel(next)
    }
    const motion = motionAt(at)
    return reducedMotion ? { ...motion, waveSpeedX: 0, waveSpeedY: 0 } : motion
  }, [reducedMotion])

  const displacement = useCallback(
    (lines: readonly (readonly GridPoint[])[], time: number) => {
      const panel = panelRef.current
      const pointer = pointerRef.current
      const field = fieldRef.current
      if (!panel || reducedMotion) {
        field.reset()
        return null
      }
      const rect = panel.getBoundingClientRect()
      const at = pointer.at(performance.now(), { left: 0, top: 0, right: rect.width, bottom: rect.height })
      return field.step(lines, {
        pointer: at,
        stroke: pointer.stroke,
        now: time,
        radius: rippleRadius(rect.width, rect.height),
      })
    },
    [reducedMotion],
  )

  useEffect(() => {
    const panel = panelRef.current
    const pointer = pointerRef.current
    if (!panel) return
    const panelElement: HTMLElement = panel
    let drag: { pointerId: number; startX: number; startY: number; moved: boolean } | null = null

    function panelPoint(event: PointerEvent) {
      const rect = panelElement.getBoundingClientRect()
      return { x: event.clientX - rect.left, y: event.clientY - rect.top }
    }
    function onPointerDown(event: PointerEvent) {
      if (event.button !== LEFT_BUTTON) return
      drag = { pointerId: event.pointerId, startX: event.clientX, startY: event.clientY, moved: false }
      const point = panelPoint(event)
      pointer.grab(point.x, point.y, performance.now())
      setDragging(true)
    }
    function onPointerMove(event: PointerEvent) {
      if (!drag || event.pointerId !== drag.pointerId) return
      const point = panelPoint(event)
      pointer.move(point.x, point.y, performance.now())
      if (drag.moved || !isDrag(event.clientX - drag.startX, event.clientY - drag.startY)) return
      drag.moved = true
      panelElement.setPointerCapture(event.pointerId)
    }
    function onPointerEnd(event: PointerEvent) {
      if (!drag || event.pointerId !== drag.pointerId) return
      if (event.type === 'pointercancel') pointer.cancel()
      else pointer.release(performance.now())
      drag = null
      setDragging(false)
    }

    panel.addEventListener('pointerdown', onPointerDown)
    panel.addEventListener('pointermove', onPointerMove)
    panel.addEventListener('pointerup', onPointerEnd)
    panel.addEventListener('pointercancel', onPointerEnd)
    return () => {
      panel.removeEventListener('pointerdown', onPointerDown)
      panel.removeEventListener('pointermove', onPointerMove)
      panel.removeEventListener('pointerup', onPointerEnd)
      panel.removeEventListener('pointercancel', onPointerEnd)
    }
  }, [])

  return (
    <div ref={panelRef} className={['wave-panel', dragging && 'wave-panel-dragging'].filter(Boolean).join(' ')}>
      <Waves
        lineColor={lineColor}
        motion={waveMotion}
        pointer={noWavesPointer}
        displacement={displacement}
        backgroundColor={heroBackgrounds[theme]}
        paused={!pageVisible || reducedMotion}
        xGap={X_GAP}
        yGap={Y_GAP}
      />
      <p className="wave-panel-label">
        <span aria-hidden="true">≈</span> {label}
      </p>
    </div>
  )
}
