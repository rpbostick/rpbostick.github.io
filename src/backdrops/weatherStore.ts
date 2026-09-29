import { useSyncExternalStore } from 'react'
import type { Theme } from '../shared/theme.ts'
import { WeatherDrive, type AuroraParams, type Feel } from './weather.ts'

// The skywright page's one weather state, shared by the aurora (its own React
// root) and the Sun, Rain and Snow buttons (the controls' root).

const drive = new WeatherDrive(performance.now())
const listeners = new Set<() => void>()
let releaseTimer: ReturnType<typeof setTimeout> | undefined

// Also re-notifies when a held button's 20 s run out, so it shows as released.
function notify(): void {
  for (const listener of listeners) listener()
  clearTimeout(releaseTimer)
  const releaseIn = drive.msUntilRelease(performance.now())
  if (releaseIn !== null) releaseTimer = setTimeout(notify, releaseIn + 1)
}

export function chooseFeel(feel: Feel, theme: Theme): void {
  drive.choose(feel, performance.now(), theme)
  notify()
}

export function setWeatherAnimating(animating: boolean): void {
  if (animating) drive.resume(performance.now())
  else drive.freeze(performance.now())
  notify()
}

export function weatherParams(theme: Theme): AuroraParams {
  return drive.paramsAt(performance.now(), theme)
}

function subscribe(onChange: () => void): () => void {
  listeners.add(onChange)
  return () => listeners.delete(onChange)
}

export function usePressedFeel(): Feel | null {
  return useSyncExternalStore(subscribe, () => drive.pressedAt(performance.now()))
}
