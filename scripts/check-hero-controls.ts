// Checks the hero's pointer controls: the middle-click toggle, click versus
// drag, where a drag may start, the pointer the waves follow, its momentum,
// the pattern drift, steps from the pattern tag and the tag's label.
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
  DRIFT_EASE_MS,
  HOLD_MS,
  motionAt,
  PatternDrive,
  patternLabel,
  PRESETS,
  STEP_EASE_MS,
} from '../src/figurewright/patternDrive.ts'

const RIGHT_BUTTON = 2
const FRAME_MS = 16

// Draws frames FRAME_MS apart for `durationMs` from `start`, as the Waves loop
// would; returns the last frame's time.
function runFrames(drive: PatternDrive, start: number, durationMs: number): number {
  let now = start
  drive.advance(now)
  for (const end = start + durationMs; now + FRAME_MS <= end; ) {
    now += FRAME_MS
    drive.advance(now)
  }
  return now
}

// A stand-in for an element whose ancestors match `selector`: `closest`
// finds it when it is one of the comma-separated selectors asked for.
function inside(selector: string) {
  return {
    closest: (query: string) => (query.split(',').some((part) => part.trim() === selector) ? {} : null),
  }
}

// The press as Hero handles it: only a press that starts a drag grabs.
function pressAt(pointer: WavesPointer, target: ReturnType<typeof inside>, x: number, y: number) {
  if (startsDrag(LEFT_BUTTON, 'mouse', false, onContent(target))) pointer.grab(x, y, 0)
}

const HERO = { left: 0, top: 0, right: 800, bottom: 600 }

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
      pointer.move(40, 50, 0)
      assert.equal(pointer.current, null)
      assert.equal(pointer.at(0, HERO), null)
    },
  ],
  [
    'a drag from bare background feeds the pointer; one from content does not; a still release settles',
    () => {
      const pointer = new WavesPointer()
      pressAt(pointer, inside('.waves'), 10, 20)
      assert.deepEqual(pointer.at(0, HERO), { x: 10, y: 20 })
      pointer.move(30, 25, FRAME_MS)
      assert.deepEqual(pointer.at(FRAME_MS, HERO), { x: 30, y: 25 })
      pointer.release(1000)
      assert.equal(pointer.at(1000, HERO), null)
      pointer.move(35, 25, 1000 + FRAME_MS)
      assert.equal(pointer.at(1000 + FRAME_MS, HERO), null, 'moves after release are hover')

      const fromContent = new WavesPointer()
      pressAt(fromContent, inside('.hero-text'), 10, 20)
      fromContent.move(30, 25, FRAME_MS)
      assert.equal(fromContent.at(FRAME_MS, HERO), null)
    },
  ],
  [
    'a flung pointer coasts on for the waves; a cancelled one or reduced motion does not',
    () => {
      const flung = new WavesPointer()
      pressAt(flung, inside('.waves'), 100, 300)
      flung.move(200, 300, 50)
      flung.release(50)
      assert.equal(flung.current, null, 'the dragged point is gone')
      const coasting = flung.at(50 + FRAME_MS, HERO)
      assert.ok(coasting && coasting.x > 200, `coasting at ${JSON.stringify(coasting)}`)

      const cancelled = new WavesPointer()
      pressAt(cancelled, inside('.waves'), 100, 300)
      cancelled.move(200, 300, 50)
      cancelled.cancel()
      assert.equal(cancelled.at(50 + FRAME_MS, HERO), null)

      const reduced = new WavesPointer()
      reduced.reducedMotion = true
      pressAt(reduced, inside('.waves'), 100, 300)
      reduced.move(200, 300, 50)
      reduced.release(50)
      assert.equal(reduced.at(50 + FRAME_MS, HERO), null)
    },
  ],
  [
    'the drift rests on a preset for HOLD_MS, then eases to the next over DRIFT_EASE_MS',
    () => {
      const drive = new PatternDrive()
      let now = runFrames(drive, 0, HOLD_MS - FRAME_MS)
      assert.equal(drive.current, 0, 'still resting just before the hold ends')
      now = runFrames(drive, now, 2 * FRAME_MS)
      assert.ok(drive.current > 0 && drive.current < 0.1, `easing at ${drive.current}`)
      now = runFrames(drive, now, DRIFT_EASE_MS / 2)
      assert.ok(Math.abs(drive.current - 0.5) < 0.02, `halfway at ${drive.current}`)
      runFrames(drive, now, DRIFT_EASE_MS)
      assert.equal(drive.current, 1)
    },
  ],
  [
    'the drift passes every preset and wraps back to the first',
    () => {
      const drive = new PatternDrive()
      const seen: string[] = []
      let now = 0
      for (let preset = 0; preset <= PRESETS.length; preset++) {
        seen.push(patternLabel(drive.current))
        now = runFrames(drive, now, HOLD_MS + DRIFT_EASE_MS + 10 * FRAME_MS)
      }
      assert.deepEqual(seen, [...PRESETS.map((preset) => preset.name), PRESETS[0].name])
    },
  ],
  [
    'a long pause does not run the hold out unseen',
    () => {
      const drive = new PatternDrive()
      drive.advance(0)
      drive.advance(10 * HOLD_MS)
      assert.equal(drive.current, 0)
    },
  ],
  [
    'a step eases to the next preset at once and restarts the hold',
    () => {
      const drive = new PatternDrive()
      let now = runFrames(drive, 0, HOLD_MS - 1000)
      drive.step(1, now)
      now = runFrames(drive, now, STEP_EASE_MS + FRAME_MS)
      assert.equal(drive.current, 1)
      now = runFrames(drive, now, HOLD_MS - 2 * FRAME_MS)
      assert.equal(drive.current, 1, 'rests a full hold after the step')
      runFrames(drive, now, 4 * FRAME_MS)
      assert.ok(drive.current > 1, `drifting on at ${drive.current}`)
    },
  ],
  [
    'a step mid-drift goes to the preset it was easing toward; quick steps add up',
    () => {
      const drive = new PatternDrive()
      let now = runFrames(drive, 0, HOLD_MS + DRIFT_EASE_MS / 2)
      drive.step(1, now)
      now = runFrames(drive, now, STEP_EASE_MS + FRAME_MS)
      assert.equal(drive.current, 1)
      drive.step(1, now)
      now = runFrames(drive, now, 2 * FRAME_MS)
      drive.step(1, now)
      runFrames(drive, now, STEP_EASE_MS + FRAME_MS)
      assert.equal(drive.current, 3)
    },
  ],
  [
    'the back arrow goes back, across the seam to the last preset',
    () => {
      const drive = new PatternDrive()
      drive.advance(0)
      drive.step(-1, 0)
      runFrames(drive, 0, STEP_EASE_MS + FRAME_MS)
      assert.equal(patternLabel(drive.current), PRESETS[PRESETS.length - 1].name)
      const mid = new PatternDrive()
      const now = runFrames(mid, 0, HOLD_MS + DRIFT_EASE_MS / 2)
      mid.step(-1, now)
      runFrames(mid, now, STEP_EASE_MS + FRAME_MS)
      assert.equal(mid.current, 0, 'back from mid-drift returns to the preset it left')
    },
  ],
  [
    'reduced motion: no drift, and a step lands at once',
    () => {
      const drive = new PatternDrive()
      drive.reducedMotion = true
      const now = runFrames(drive, 0, 3 * (HOLD_MS + DRIFT_EASE_MS))
      assert.equal(drive.current, 0)
      drive.step(1, now)
      assert.equal(drive.advance(now), 1)
      drive.step(-1, now)
      assert.equal(drive.advance(now), 0)
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
