// Checks the hero's global follow: a held drag pulls the field to a share of
// its offset (capped) through a spring that lags and overshoots a little, the
// pull falls off away from the pointer, release settles back to rest in time,
// the result does not depend on the frame rate, and reduced motion has none.
// Run: node scripts/check-cloth-follow.ts
import assert from 'node:assert/strict'
import { ClothFollow, FOLLOW } from '../src/shared/clothFollow.ts'
import type { Displacement, GridPoint, Point } from '../src/shared/rippleField.ts'

const WIDTH = 1280
const HEIGHT = 800
const X_GAP = 12
const Y_GAP = 36
const OVERSCAN_X = FOLLOW.MAX_SHIFT_PX
const CAP = Math.min(FOLLOW.CAP_SHARE * Math.min(WIDTH, HEIGHT), FOLLOW.MAX_SHIFT_PX)
const PRESS: Point = { x: 400, y: 400 }
// The largest sideways wave amplitude among the hero's patterns (patternDrive).
const MAX_WAVE_AMP_X = 75

// The grid as Waves lays it out (setLines) with the hero's overscan.
function grid(): GridPoint[][] {
  const totalLines = Math.ceil((WIDTH + 200 + 2 * OVERSCAN_X) / X_GAP)
  const totalPoints = Math.ceil((HEIGHT + 30) / Y_GAP)
  const xStart = (WIDTH - X_GAP * totalLines) / 2
  const yStart = (HEIGHT - Y_GAP * totalPoints) / 2
  const lines: GridPoint[][] = []
  for (let line = 0; line <= totalLines; line++) {
    const points: GridPoint[] = []
    for (let index = 0; index <= totalPoints; index++) {
      points.push({ x: xStart + X_GAP * line, y: yStart + Y_GAP * index, wave: { x: 0, y: 0 } })
    }
    lines.push(points)
  }
  return lines
}

const GRID = grid()

// A pointer path: where the held pointer is at `ms`, or null once released.
type Path = (ms: number) => Point | null

// The press, then a 100 ms move by (dx, dy), held until `releaseMs`.
function dragBy(dx: number, dy: number, releaseMs = Infinity): Path {
  return (ms) => {
    if (ms >= releaseMs) return null
    const share = Math.min(1, ms / 100)
    return { x: PRESS.x + dx * share, y: PRESS.y + dy * share }
  }
}

// Steps a fresh follow along `path` every `frameMs` up to `untilMs`, calling
// `each` after every frame.
function run(path: Path, untilMs: number, frameMs = 1000 / 60, each: (follow: ClothFollow, now: number, moving: boolean) => void = () => {}) {
  const follow = new ClothFollow()
  const frames = Math.round(untilMs / frameMs)
  for (let frame = 0; frame <= frames; frame++) {
    const now = frame * frameMs
    const moving = follow.step({ pointer: path(now), stroke: 1, now, width: WIDTH, height: HEIGHT })
    each(follow, now, moving)
  }
  return follow
}

function close(actual: number, expected: number, tolerance: number, what: string) {
  assert.ok(Math.abs(actual - expected) <= tolerance, `${what}: ${actual}, expected ${expected} ± ${tolerance}`)
}

const checks: [string, () => void][] = [
  [
    'a held drag converges to the follow share of its offset',
    () => {
      const shift = run(dragBy(120, -80), 3000).shift
      close(shift.x, 120 * FOLLOW.FOLLOW_SHARE, 0.05, 'x')
      close(shift.y, -80 * FOLLOW.FOLLOW_SHARE, 0.05, 'y')
    },
  ],
  [
    'a long drag is capped at the share of the shorter side',
    () => {
      const shift = run(dragBy(900, 600), 3000).shift
      close(Math.hypot(shift.x, shift.y), CAP, 0.05, 'shift')
      close(Math.atan2(shift.y, shift.x), Math.atan2(600, 900), 1e-3, 'direction')
    },
  ],
  [
    'the field lags behind the drag and overshoots slightly',
    () => {
      const target = 200 * FOLLOW.FOLLOW_SHARE
      let at100 = 0
      let most = 0
      run(dragBy(200, 0), 2000, 1000 / 60, (follow, now) => {
        if (Math.abs(now - 100) < 1) at100 = follow.shift.x
        most = Math.max(most, follow.shift.x)
      })
      assert.ok(at100 < target * 0.3, `100 ms in, the field is at ${at100} of ${target} px`)
      assert.ok(most > target * 1.02, `overshoot to ${most} of ${target} px`)
      assert.ok(most < target * 1.15, `overshoot to ${most} of ${target} px stays slight`)
    },
  ],
  [
    'the pull is strongest at the pointer and falls off to about a third at the far side',
    () => {
      // Dragged from (200, middle) to (300, middle): the far side is the right edge.
      const follow = run((ms) => ({ x: 200 + Math.min(1, ms / 100) * 100, y: HEIGHT / 2 }), 500)
      const near = follow.weightAt({ x: 300, y: HEIGHT / 2 })
      const far = follow.weightAt({ x: WIDTH, y: HEIGHT / 2 })
      const corner = follow.weightAt({ x: WIDTH, y: 0 })
      close(near, 1, 1e-9, 'weight at the pointer')
      assert.ok(far < 0.75 && far > 0.25, `far edge follows ${far}`)
      assert.ok(corner < far, `the far corner (${corner}) follows less than the far edge (${far})`)
      const displacement = follow.displace(GRID, null)
      assert.ok(displacement)
      const points = GRID[0].length
      const shiftOf = (line: number, index: number) => Math.hypot(displacement.x[line * points + index], displacement.y[line * points + index])
      const middle = Math.round(points / 2)
      const nearLine = GRID.findIndex((line) => line[0].x >= 300)
      assert.ok(shiftOf(GRID.length - 1, middle) < shiftOf(nearLine, middle) * 0.75, 'the far lines move less')
    },
  ],
  [
    'on release the field wobbles back and comes to rest within 1.5 s',
    () => {
      let restAt: number | null = null
      let crossed = false
      const follow = run(dragBy(900, 0, 2000), 4000, 1000 / 60, (field, now, moving) => {
        if (now > 2000 && field.shift.x < 0) crossed = true
        if (now >= 2000 && !moving && restAt === null) restAt = now
      })
      assert.ok(crossed, 'it overshoots the rest position once')
      assert.ok(restAt !== null && restAt - 2000 <= 1500, `at rest ${restAt === null ? 'never' : restAt - 2000} ms after release`)
      assert.ok(follow.atRest)
      assert.equal(follow.displace(GRID, null), null, 'nothing to draw at rest')
    },
  ],
  [
    'the frame rate does not change the motion',
    () => {
      const path = dragBy(500, 300, 900)
      const at = (frameMs: number) => {
        const samples: Point[] = []
        run(path, 1200, frameMs, (follow, now) => {
          if (Math.abs(now % 300) < 1e-6 || Math.abs((now % 300) - 300) < 1e-6) samples.push(follow.shift)
        })
        return samples
      }
      const reference = at(1000 / 240)
      // Rates whose frames land on every 300 ms sample.
      for (const frameMs of [1000 / 30, 1000 / 50, 1000 / 60, 1000 / 120]) {
        const samples = at(frameMs)
        assert.equal(samples.length, reference.length, `${frameMs} ms frames sampled ${samples.length} times`)
        samples.forEach((sample, index) => {
          const gap = Math.hypot(sample.x - reference[index].x, sample.y - reference[index].y)
          assert.ok(gap < 0.5, `at ${index * 300} ms, ${frameMs.toFixed(1)} ms frames differ by ${gap} px`)
        })
      }
    },
  ],
  [
    'the drawn shift adds to the ripple and stays within the overscan',
    () => {
      let largest = 0
      const base: Displacement = { x: new Float64Array(GRID.length * GRID[0].length).fill(1), y: new Float64Array(GRID.length * GRID[0].length) }
      // A violent zig-zag, then release.
      const path: Path = (ms) => (ms < 1500 ? { x: PRESS.x + 800 * Math.sign(Math.sin(ms / 40)), y: PRESS.y } : null)
      run(path, 3000, 1000 / 60, (follow) => {
        largest = Math.max(largest, Math.hypot(follow.shift.x, follow.shift.y))
        const displacement = follow.displace(GRID, base)
        if (displacement && displacement !== base) {
          const weight = follow.weightAt(GRID[0][0])
          close(displacement.x[0], weight * follow.shift.x + 1, 1e-9, 'the first point')
        }
      })
      assert.ok(largest <= FOLLOW.MAX_SHIFT_PX + 1e-9, `the shift reached ${largest} px`)
      // The outermost lines stay off screen however far the waves swing them.
      assert.ok(GRID[0][0].x + FOLLOW.MAX_SHIFT_PX + MAX_WAVE_AMP_X < 0, `left line at ${GRID[0][0].x}`)
      assert.ok(GRID[GRID.length - 1][0].x - FOLLOW.MAX_SHIFT_PX - MAX_WAVE_AMP_X > WIDTH, 'right line')
    },
  ],
  [
    'reduced motion has no follow',
    () => {
      const follow = new ClothFollow()
      follow.reducedMotion = true
      const path = dragBy(400, 0)
      const base: Displacement = { x: new Float64Array(GRID.length * GRID[0].length), y: new Float64Array(GRID.length * GRID[0].length) }
      for (let now = 0; now <= 1000; now += 1000 / 60) {
        assert.equal(follow.step({ pointer: path(now), stroke: 1, now, width: WIDTH, height: HEIGHT }), false)
        assert.equal(follow.displace(GRID, base), base)
      }
      assert.deepEqual(follow.shift, { x: 0, y: 0 })
    },
  ],
  [
    'a new press starts its own offset; bad input fails loud',
    () => {
      const follow = run(dragBy(300, 0), 2000)
      // A second stroke pressed far away: no jump towards that point.
      for (let now = 2020; now <= 4000; now += 1000 / 60) {
        follow.step({ pointer: { x: 1100, y: 100 }, stroke: 2, now, width: WIDTH, height: HEIGHT })
      }
      close(Math.hypot(follow.shift.x, follow.shift.y), 0, 0.5, 'shift after holding the new press still')
      assert.throws(() => follow.step({ pointer: { x: Number.NaN, y: 0 }, stroke: 2, now: 4100, width: WIDTH, height: HEIGHT }), /bad pointer/)
      assert.throws(() => follow.step({ pointer: null, stroke: 2, now: 4100, width: 0, height: HEIGHT }), /bad time/)
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
