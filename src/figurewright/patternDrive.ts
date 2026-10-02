// Where the hero sits on a loop of wave patterns, as a real number: 0 is the
// first preset, 1 the second, and PRESETS.length wraps back to the first.
// It rests on each preset for a while and eases on to the next by itself; the
// pattern tag and its arrows step it. Time is passed in, as in colorDrive.ts,
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

// How long the drift rests on each preset before easing to the next.
export const HOLD_MS = 24000
// How long the drift takes to ease from one preset to the next.
export const DRIFT_EASE_MS = 4000
// How long a step from the tag or its arrows takes; instant under reduced
// motion.
export const STEP_EASE_MS = 900
// A frame gap longer than this (a paused, off-screen hero or a background
// tab) is treated as this long, so the hold does not run out unseen.
const MAX_FRAME_MS = 100

export class PatternDrive {
  reducedMotion = false
  // Unwrapped, so an ease across the last → first seam stays continuous.
  private position = 0
  private target = 0
  private easeFrom = 0
  private easeStart = 0
  private easeMs = 0
  private easing = false
  // Whether the ease in flight came from step(), so quick steps add up.
  private stepped = false
  // Frame time spent resting on the current preset.
  private heldMs = 0
  private lastFrame: number | null = null

  get current(): number {
    return this.position
  }

  // Linear in position: motionAt already eases between presets.
  advance(now: number): number {
    const frameMs = this.lastFrame === null ? 0 : Math.min(MAX_FRAME_MS, Math.max(0, now - this.lastFrame))
    this.lastFrame = now
    if (this.easing) {
      const progress = this.reducedMotion || this.easeMs <= 0 ? 1 : Math.min(1, (now - this.easeStart) / this.easeMs)
      this.position = this.easeFrom + (this.target - this.easeFrom) * progress
      if (progress >= 1) {
        this.position = this.target
        this.easing = false
        this.heldMs = 0
      }
    } else if (!this.reducedMotion) {
      this.heldMs += frameMs
      if (this.heldMs >= HOLD_MS) this.easeTo(this.target + 1, DRIFT_EASE_MS, false, now)
    }
    return this.position
  }

  // One step from the tag or its arrows: +1 forward, -1 back, starting now.
  // From a drift ease it goes to the next whole preset that way; the drift
  // then rests there for a full HOLD_MS.
  step(direction: 1 | -1, now: number): void {
    const epsilon = 1e-9
    const target =
      this.easing && this.stepped
        ? this.target + direction
        : direction > 0
          ? Math.floor(this.position + epsilon) + 1
          : Math.ceil(this.position - epsilon) - 1
    this.easeTo(target, this.reducedMotion ? 0 : STEP_EASE_MS, true, now)
  }

  private easeTo(target: number, easeMs: number, stepped: boolean, now: number): void {
    this.target = target
    this.easeFrom = this.position
    this.easeStart = now
    this.easeMs = easeMs
    this.easing = true
    this.stepped = stepped
    this.heldMs = 0
  }
}
