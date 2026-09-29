import type { Theme } from '../shared/theme.ts'
import { mixOklab } from './oklab.ts'

// The skywright aurora's weather feels and how it moves between them. Time is
// passed in, so the same functions drive the draw loop and the unit tests.

export type Feel = 'sunny' | 'rainy' | 'snowy'
// The default drift visits the feels in this order, wrapping round.
export const FEELS: readonly Feel[] = ['sunny', 'rainy', 'snowy']

export interface AuroraParams {
  colorStops: [string, string, string]
  amplitude: number
  blend: number
  speed: number
}

// Dark versions are drawn additively over the near-black page, so their
// colors set the brightness; light versions go through the Aurora light
// mode, which keeps only each color's hue and saturation.
export const PRESETS: Record<Feel, Record<Theme, AuroraParams>> = {
  sunny: {
    light: { colorStops: ['#f6c945', '#7ec8f0', '#f2b53a'], amplitude: 1.0, blend: 0.5, speed: 0.6 },
    dark: { colorStops: ['#d9a41e', '#3f86d8', '#e6b43c'], amplitude: 1.0, blend: 0.5, speed: 0.6 },
  },
  rainy: {
    light: { colorStops: ['#8a9bb0', '#6d8098', '#9aa7b5'], amplitude: 1.4, blend: 0.6, speed: 1.4 },
    dark: { colorStops: ['#4a5d73', '#6b7c8f', '#3d4f66'], amplitude: 1.4, blend: 0.6, speed: 1.4 },
  },
  snowy: {
    light: { colorStops: ['#ffffff', '#cfe3fa', '#dcd3f5'], amplitude: 0.7, blend: 0.8, speed: 0.35 },
    dark: { colorStops: ['#dfe8f5', '#a9c4e8', '#c7b8e8'], amplitude: 0.7, blend: 0.8, speed: 0.35 },
  },
}

export const HOLD_MS = 20_000
export const FADE_MS = 8_000
export const CLICK_EASE_MS = 1_500
const CYCLE_MS = HOLD_MS + FADE_MS

function easeInOut(progress: number): number {
  return progress < 0.5 ? 2 * progress * progress : 1 - (-2 * progress + 2) ** 2 / 2
}

export function mixParams(from: AuroraParams, to: AuroraParams, amount: number): AuroraParams {
  const lerp = (start: number, end: number) => start + (end - start) * amount
  return {
    colorStops: from.colorStops.map((stop, index) => mixOklab(stop, to.colorStops[index], amount)) as [
      string,
      string,
      string,
    ],
    amplitude: lerp(from.amplitude, to.amplitude),
    blend: lerp(from.blend, to.blend),
    speed: lerp(from.speed, to.speed),
  }
}

export function nextFeel(feel: Feel): Feel {
  return FEELS[(FEELS.indexOf(feel) + 1) % FEELS.length]
}

// Where the drift stands `elapsedMs` after it started from `feel`: the feel
// it is on (or leaving) and how far into the cross-fade to the next it is.
function driftPosition(elapsedMs: number, feel: Feel): { feel: Feel; fade: number } {
  if (elapsedMs < 0) throw new Error(`Negative elapsed time: ${elapsedMs}`)
  const cycles = Math.floor(elapsedMs / CYCLE_MS)
  const withinCycle = elapsedMs - cycles * CYCLE_MS
  const index = (FEELS.indexOf(feel) + cycles) % FEELS.length
  return { feel: FEELS[index], fade: Math.max(0, (withinCycle - HOLD_MS) / FADE_MS) }
}

// The feel the aurora mostly shows: the one held, or the one a cross-fade is
// more than half-way to.
export function feelAt(sinceClickMs: number, feel: Feel): Feel {
  const position = driftPosition(sinceClickMs, feel)
  return position.fade > 0.5 ? nextFeel(position.feel) : position.feel
}

// The target parameters `sinceClickMs` after the last click on `feel` (or
// after the drift started there). A click eases over CLICK_EASE_MS from what
// was on screen (`from`), holds the feel until HOLD_MS, then drifts on.
export function weatherAt(
  sinceClickMs: number,
  feel: Feel,
  theme: Theme,
  from: AuroraParams | null = null,
): AuroraParams {
  if (from && sinceClickMs < CLICK_EASE_MS) {
    return mixParams(from, PRESETS[feel][theme], easeInOut(sinceClickMs / CLICK_EASE_MS))
  }
  const position = driftPosition(sinceClickMs, feel)
  const current = PRESETS[position.feel][theme]
  if (position.fade === 0) return current
  return mixParams(current, PRESETS[nextFeel(position.feel)][theme], easeInOut(position.fade))
}

// The feel a Sun, Rain or Snow button holds, if any.
export function heldFeel(sinceClickMs: number, feel: Feel): Feel | null {
  return sinceClickMs < HOLD_MS ? feel : null
}

// The skywright page's single aurora state. With animations off it is frozen
// on one feel: the buttons change that feel, and turning animations back on
// drifts on from it.
export class WeatherDrive {
  private feel: Feel
  private since: number
  private from: AuroraParams | null = null
  private clicked = false
  private frozen = false

  constructor(now: number, feel: Feel = FEELS[0]) {
    this.feel = feel
    this.since = now
  }

  choose(feel: Feel, now: number, theme: Theme): void {
    if (!this.frozen) this.from = this.paramsAt(now, theme)
    this.feel = feel
    this.since = now
    this.clicked = true
  }

  freeze(now: number): void {
    if (this.frozen) return
    this.feel = feelAt(now - this.since, this.feel)
    this.frozen = true
  }

  resume(now: number): void {
    if (!this.frozen) return
    this.frozen = false
    this.since = now
    this.from = null
    this.clicked = false
  }

  paramsAt(now: number, theme: Theme): AuroraParams {
    if (this.frozen) return PRESETS[this.feel][theme]
    return weatherAt(now - this.since, this.feel, theme, this.from)
  }

  pressedAt(now: number): Feel | null {
    if (this.frozen) return this.feel
    return this.clicked ? heldFeel(now - this.since, this.feel) : null
  }

  // Milliseconds until pressedAt next changes on its own, or null if never.
  msUntilRelease(now: number): number | null {
    if (this.frozen || !this.clicked) return null
    const left = HOLD_MS - (now - this.since)
    return left > 0 ? left : null
  }
}
