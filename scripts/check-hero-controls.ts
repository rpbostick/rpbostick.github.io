// Checks the hero's pointer controls: the middle-click toggle, click versus
// drag, where a drag may start, the pointer the waves follow, the drag gain and direction, momentum and the pattern tag.
// Run: node scripts/check-hero-controls.ts
import assert from 'node:assert/strict'
import {
  activeAfterPress,
  clickActivates,
  DRAG_THRESHOLD_PX,
  isDrag,
  LEFT_BUTTON,
  MIDDLE_BUTTON,
  onContent,
  startsDrag,
  WavesPointer,
} from '../src/figurewright/heroInput.ts'
import {
  COAST_TAU_MS,
  dominantAxis,
  dragDelta,
  dragGain,
  GAIN_SPEED,
  MAX_GAIN,
  motionAt,
  PatternDrive,
  patternLabel,
  PIXELS_PER_PRESET,
  PRESETS,
  STILL_BEFORE_RELEASE_MS,
} from '../src/figurewright/patternDrive.ts'

const RIGHT_BUTTON = 2
const FRAME_MS = 16

// A stand-in for an element whose ancestors match `selector`: `closest`
// finds it when it is one of the comma-separated selectors asked for.
function inside(selector: string) {
  return {
    closest: (query: string) => (query.split(',').some((part) => part.trim() === selector) ? {} : null),
  }
}

// The press as Hero handles it: only a press that starts a drag grabs.
function pressAt(pointer: WavesPointer, target: ReturnType<typeof inside>, x: number, y: number) {
  if (startsDrag(LEFT_BUTTON, 'mouse', false, onContent(target))) pointer.grab(x, y)
}

function close(actual: number, expected: number, message = '') {
  assert.ok(Math.abs(actual - expected) < 1e-9, `${message} expected ${expected}, got ${actual}`)
}

const checks: [string, () => void][] = [
  [
    'a middle press toggles both ways; left and right presses do not',
    () => {
      assert.equal(activeAfterPress(false, MIDDLE_BUTTON), true)
      assert.equal(activeAfterPress(true, MIDDLE_BUTTON), false)
      for (const active of [false, true]) {
        assert.equal(activeAfterPress(active, LEFT_BUTTON), active)
        assert.equal(activeAfterPress(active, RIGHT_BUTTON), active)
      }
    },
  ],
  [
    'under the threshold is a click, at it a drag',
    () => {
      assert.equal(isDrag(3, 3), false)
      assert.equal(isDrag(0, DRAG_THRESHOLD_PX - 0.1), false)
      assert.equal(isDrag(DRAG_THRESHOLD_PX, 0), true)
      assert.equal(isDrag(-4, -4), true)
    },
  ],
  [
    'a click activates unless it is on the strip or ends a drag',
    () => {
      assert.equal(clickActivates(false, false), true)
      assert.equal(clickActivates(true, false), false)
      assert.equal(clickActivates(false, true), false)
    },
  ],
  [
    'a mouse drags whenever; a finger only while active; never from content or other buttons',
    () => {
      assert.equal(startsDrag(LEFT_BUTTON, 'mouse', false, false), true)
      assert.equal(startsDrag(LEFT_BUTTON, 'touch', false, false), false)
      assert.equal(startsDrag(LEFT_BUTTON, 'touch', true, false), true)
      assert.equal(startsDrag(LEFT_BUTTON, 'mouse', true, true), false)
      assert.equal(startsDrag(MIDDLE_BUTTON, 'mouse', true, false), false)
    },
  ],
  [
    'text, tags, buttons, the strip and data-solid are content; the waves and bare hero are not',
    () => {
      for (const selector of ['.hero-text', '.hero-tag', '.hero-hint', '.hero-strip', 'button', '[data-solid]']) {
        assert.equal(onContent(inside(selector)), true, selector)
      }
      assert.equal(onContent(inside('.waves')), false)
      assert.equal(onContent(inside('.hero-content')), false)
      assert.equal(onContent(null), false)
    },
  ],
  [
    'hover feeds the waves no pointer',
    () => {
      const pointer = new WavesPointer()
      pointer.move(40, 50)
      assert.equal(pointer.current, null)
    },
  ],
  [
    'a drag from bare background feeds the pointer; one from content does not; release settles',
    () => {
      const pointer = new WavesPointer()
      pressAt(pointer, inside('.waves'), 10, 20)
      assert.deepEqual(pointer.current, { x: 10, y: 20 })
      pointer.move(30, 25)
      assert.deepEqual(pointer.current, { x: 30, y: 25 })
      pointer.release()
      assert.equal(pointer.current, null)
      pointer.move(35, 25)
      assert.equal(pointer.current, null, 'moves after release are hover')

      const fromContent = new WavesPointer()
      pressAt(fromContent, inside('.hero-text'), 10, 20)
      fromContent.move(30, 25)
      assert.equal(fromContent.current, null)
    },
  ],
  [
    'gain is 1 at rest, rises with the square of speed, and is capped',
    () => {
      close(dragGain(0), 1)
      close(dragGain(GAIN_SPEED), 2)
      close(dragGain(2 * GAIN_SPEED), 5)
      assert.equal(dragGain(100 * GAIN_SPEED), MAX_GAIN)
    },
  ],
  [
    'a slow drag moves one preset per PIXELS_PER_PRESET; a fast one further',
    () => {
      // 1 px per 100 ms is a crawl: gain barely above 1.
      let slow = 0
      for (let move = 0; move < PIXELS_PER_PRESET; move++) slow += dragDelta(1, 0, 'x', 100)
      assert.ok(Math.abs(slow - 1) < 0.001, `slow ${slow}`)
      const fast = dragDelta(PIXELS_PER_PRESET, 0, 'x', PIXELS_PER_PRESET / (2 * GAIN_SPEED))
      close(fast, 5, 'fast')
    },
  ],
  [
    'right and down go forward, left and up back, along the dominant axis',
    () => {
      assert.equal(dominantAxis(10, 3), 'x')
      assert.equal(dominantAxis(-2, -9), 'y')
      assert.ok(dragDelta(10, 0, 'x', 16) > 0)
      assert.ok(dragDelta(-10, 0, 'x', 16) < 0)
      assert.ok(dragDelta(0, 10, 'y', 16) > 0)
      assert.ok(dragDelta(0, -10, 'y', 16) < 0)
      assert.equal(dragDelta(0, 10, 'x', 16), 0, 'the cross axis does not move the pattern')
    },
  ],
  [
    'a flick coasts on after release, forward, and comes to rest',
    () => {
      const drive = new PatternDrive()
      drive.advance(0)
      drive.grab(0)
      for (let now = FRAME_MS; now <= 10 * FRAME_MS; now += FRAME_MS) drive.drag(0.02, FRAME_MS, now)
      drive.release(10 * FRAME_MS)
      const released = drive.current
      drive.advance(10 * FRAME_MS)
      let position = released
      for (let now = 11 * FRAME_MS; now < 10 * FRAME_MS + 20 * COAST_TAU_MS; now += FRAME_MS) {
        position = drive.advance(now)
      }
      assert.ok(position > released + 0.05, `coasted ${position - released}`)
      assert.equal(drive.advance(10 * FRAME_MS + 21 * COAST_TAU_MS), position, 'at rest')
    },
  ],
  [
    'no momentum after a held-still release or under reduced motion',
    () => {
      const held = new PatternDrive()
      held.advance(0)
      held.grab(0)
      held.drag(0.2, FRAME_MS, FRAME_MS)
      held.release(FRAME_MS + STILL_BEFORE_RELEASE_MS)
      assert.equal(held.advance(1000), 0.2)

      const reduced = new PatternDrive()
      reduced.reducedMotion = true
      reduced.advance(0)
      reduced.grab(0)
      reduced.drag(0.2, FRAME_MS, FRAME_MS)
      assert.equal(reduced.current, 0.2, 'the drag itself still moves the pattern')
      reduced.release(FRAME_MS)
      assert.equal(reduced.advance(1000), 0.2)
    },
  ],
  [
    'motion is each preset at whole positions and wraps round the loop',
    () => {
      assert.deepEqual({ ...motionAt(1), name: PRESETS[1].name }, PRESETS[1])
      assert.deepEqual(motionAt(PRESETS.length), motionAt(0))
      assert.deepEqual(motionAt(-1), motionAt(PRESETS.length - 1))
      const between = motionAt(0.5).waveAmpX
      close(between, (PRESETS[0].waveAmpX + PRESETS[1].waveAmpX) / 2)
    },
  ],
  [
    'the pattern tag names the nearest preset or the blend',
    () => {
      assert.equal(patternLabel(0), 'Swell')
      assert.equal(patternLabel(0.4), 'Swell → Choppy 40%')
      assert.equal(patternLabel(0.97), 'Choppy')
      assert.equal(patternLabel(-0.02), 'Swell')
      assert.equal(patternLabel(PRESETS.length - 0.5), `${PRESETS[PRESETS.length - 1].name} → Swell 50%`)
    },
  ],
]

let failed = 0
for (const [name, check] of checks) {
  try {
    check()
    console.log(`ok   ${name}`)
  } catch (error) {
    failed++
    console.log(`FAIL ${name}\n     ${error instanceof Error ? error.message : String(error)}`)
  }
}
console.log(`\n${checks.length - failed} passed, ${failed} failed`)
process.exit(failed === 0 ? 0 : 1)
