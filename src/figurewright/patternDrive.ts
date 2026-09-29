// Where the hero sits on a loop of wave patterns, as a real number: 0 is the
// first preset, 1 the second, and PRESETS.length wraps back to the first.
// Dragging through the waves moves it; a fast drag moves it further per pixel,
// and on release it coasts to a stop. Time is passed in, as in colorDrive.ts,
// so a check script can drive it.

// Waves' own motion parameters. The line gaps stay fixed: changing them means
// rebuilding the grid, which would throw away the ripples in flight.
export interface WaveMotion {
  waveSpeedX: number
  waveSpeedY: number
  waveAmpX: number
  waveAmpY: number
  friction: number
  tension: number
  maxCursorMove: number
}

export interface PatternPreset extends WaveMotion {
  name: string
}

export const PRESETS: PatternPreset[] = [
  {
    name: 'Swell',
    waveSpeedX: 0.0125,
    waveSpeedY: 0.01,
    waveAmpX: 40,
    waveAmpY: 20,
    friction: 0.9,
    tension: 0.01,
    maxCursorMove: 120,
  },
  {
    name: 'Choppy',
    waveSpeedX: 0.045,
    waveSpeedY: 0.035,
    waveAmpX: 16,
    waveAmpY: 14,
    friction: 0.86,
    tension: 0.02,
    maxCursorMove: 80,
  },
  {
    name: 'Rollers',
    waveSpeedX: 0.005,
    waveSpeedY: 0.004,
    waveAmpX: 75,
    waveAmpY: 48,
    friction: 0.95,
    tension: 0.004,
    maxCursorMove: 180,
  },
  {
    name: 'Ripple',
    waveSpeedX: 0.025,
    waveSpeedY: 0.02,
    waveAmpX: 8,
    waveAmpY: 6,
    friction: 0.8,
    tension: 0.035,
    maxCursorMove: 50,
  },
  {
    name: 'Crosswind',
    waveSpeedX: 0.035,
    waveSpeedY: 0.002,
    waveAmpX: 60,
    waveAmpY: 8,
    friction: 0.92,
    tension: 0.008,
    maxCursorMove: 140,
  },
  {
    name: 'Storm',
    waveSpeedX: 0.05,
    waveSpeedY: 0.045,
    waveAmpX: 55,
    waveAmpY: 38,
    friction: 0.93,
    tension: 0.006,
    maxCursorMove: 220,
  },
]

const MOTION_KEYS = [
  'waveSpeedX',
  'waveSpeedY',
  'waveAmpX',
  'waveAmpY',
  'friction',
  'tension',
  'maxCursorMove',
] as const satisfies readonly (keyof WaveMotion)[]

function wrap(position: number): number {
  return ((position % PRESETS.length) + PRESETS.length) % PRESETS.length
}

function smoothstep(fraction: number): number {
  return fraction * fraction * (3 - 2 * fraction)
}

// Eased between neighboring presets so each preset is a point the pattern
// settles through rather than a corner it turns at.
export function motionAt(position: number): WaveMotion {
  const wrapped = wrap(position)
  const index = Math.floor(wrapped)
  const eased = smoothstep(wrapped - index)
  const from = PRESETS[index]
  const to = PRESETS[(index + 1) % PRESETS.length]
  const motion = {} as WaveMotion
  for (const key of MOTION_KEYS) motion[key] = from[key] + (to[key] - from[key]) * eased
  return motion
}

// "Swell" near a preset, "Swell → Choppy 40%" between two, in 10% steps so
// the tag re-renders a few times per preset rather than every frame.
export function patternLabel(position: number): string {
  const wrapped = wrap(position)
  const index = Math.floor(wrapped)
  const percent = Math.round((wrapped - index) * 10) * 10
  if (percent === 0) return PRESETS[index].name
  if (percent === 100) return PRESETS[(index + 1) % PRESETS.length].name
  return `${PRESETS[index].name} → ${PRESETS[(index + 1) % PRESETS.length].name} ${percent}%`
}

// Pixels of slow drag that move the pattern one whole preset.
export const PIXELS_PER_PRESET = 600
// Pointer speed (px/ms) at which the gain has doubled.
export const GAIN_SPEED = 1
export const MAX_GAIN = 8

// Distance counts for more the faster the pointer moves: 1 at a crawl,
// 1 + (v / GAIN_SPEED)² above it, capped.
export function dragGain(pixelsPerMs: number): number {
  return Math.min(MAX_GAIN, 1 + (pixelsPerMs / GAIN_SPEED) ** 2)
}

export type Axis = 'x' | 'y'

export function dominantAxis(dx: number, dy: number): Axis {
  return Math.abs(dx) >= Math.abs(dy) ? 'x' : 'y'
}

// One pointer move along the drag's axis, in presets: right and down are
// forward. `dtMs` is floored at 1 so two events with one timestamp cannot
// divide by zero.
export function dragDelta(dx: number, dy: number, axis: Axis, dtMs: number): number {
  const along = axis === 'x' ? dx : dy
  const speed = Math.hypot(dx, dy) / Math.max(1, dtMs)
  return (along * dragGain(speed)) / PIXELS_PER_PRESET
}

// Momentum after release halves roughly every COAST_TAU_MS × ln 2.
export const COAST_TAU_MS = 350
// A pointer held still this long before release throws nothing.
export const STILL_BEFORE_RELEASE_MS = 80
const MIN_COAST_RATE = 1e-5
const MAX_FRAME_MS = 100
// Weight of the newest move in the smoothed drag rate.
const RATE_SMOOTHING = 0.4

export class PatternDrive {
  reducedMotion = false
  private position = 0
  // Presets per ms, smoothed while dragging, decaying while coasting.
  private rate = 0
  private coasting = false
  private lastMove = 0
  private lastFrame: number | null = null

  get current(): number {
    return this.position
  }

  // A press catches a coasting pattern and starts the drag rate from rest.
  grab(now: number): void {
    this.coasting = false
    this.rate = 0
    this.lastMove = now
  }

  drag(delta: number, dtMs: number, now: number): void {
    this.coasting = false
    this.position += delta
    const rate = delta / Math.max(1, dtMs)
    this.rate += (rate - this.rate) * RATE_SMOOTHING
    this.lastMove = now
  }

  release(now: number): void {
    const still = now - this.lastMove >= STILL_BEFORE_RELEASE_MS
    this.coasting = !this.reducedMotion && !still && this.rate !== 0
    if (!this.coasting) this.rate = 0
  }

  advance(now: number): number {
    const frameMs = this.lastFrame === null ? 0 : Math.min(MAX_FRAME_MS, Math.max(0, now - this.lastFrame))
    this.lastFrame = now
    if (this.coasting) {
      if (this.reducedMotion) {
        this.coasting = false
        this.rate = 0
        return this.position
      }
      this.position += this.rate * frameMs
      this.rate *= Math.exp(-frameMs / COAST_TAU_MS)
      if (Math.abs(this.rate) < MIN_COAST_RATE) {
        this.coasting = false
        this.rate = 0
      }
    }
    return this.position
  }
}
