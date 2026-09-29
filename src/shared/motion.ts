import { useSyncExternalStore } from 'react'

// Whether the site's animations run, set by the Animations toggle. It is
// saved in localStorage under `motion`: "off", or the key removed for on.
// With nothing saved, the system's reduced-motion setting decides; so that a
// reduced-motion visitor who turns animations on is remembered too, that one
// case is saved as "on".

export const MOTION_STORAGE_KEY = 'motion'
const REDUCED_QUERY = '(prefers-reduced-motion: reduce)'

export type SavedMotion = 'on' | 'off' | null

type MotionStorage = Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>

interface ReducedMotionQuery {
  readonly matches: boolean
  addEventListener(type: 'change', listener: () => void): void
  removeEventListener(type: 'change', listener: () => void): void
}

export function animationsEnabled(saved: SavedMotion, systemReduced: boolean): boolean {
  return saved === null ? !systemReduced : saved === 'on'
}

export function motionToSave(enabled: boolean, systemReduced: boolean): SavedMotion {
  if (!enabled) return 'off'
  return systemReduced ? 'on' : null
}

// Storage can be unavailable (disabled, private mode, sandboxed); the choice
// then applies to this page view only.
function readSaved(storage: MotionStorage | null): SavedMotion {
  if (!storage) return null
  let value: string | null
  try {
    value = storage.getItem(MOTION_STORAGE_KEY)
  } catch (error) {
    console.warn('Animations choice not read:', error)
    return null
  }
  if (value === null || value === 'on' || value === 'off') return value
  console.warn(`Ignoring unknown saved animations choice ${JSON.stringify(value)}`)
  return null
}

function writeSaved(storage: MotionStorage | null, saved: SavedMotion): void {
  if (!storage) return
  try {
    if (saved === null) storage.removeItem(MOTION_STORAGE_KEY)
    else storage.setItem(MOTION_STORAGE_KEY, saved)
  } catch (error) {
    console.warn('Animations choice not saved:', error)
  }
}

export interface MotionStore {
  enabled(): boolean
  set(enabled: boolean): void
  subscribe(onChange: () => void): () => void
}

export function createMotionStore(storage: MotionStorage | null, reduced: ReducedMotionQuery): MotionStore {
  let saved = readSaved(storage)
  const listeners = new Set<() => void>()
  return {
    enabled: () => animationsEnabled(saved, reduced.matches),
    set(enabled) {
      saved = motionToSave(enabled, reduced.matches)
      writeSaved(storage, saved)
      for (const listener of listeners) listener()
    },
    subscribe(onChange) {
      listeners.add(onChange)
      reduced.addEventListener('change', onChange)
      return () => {
        listeners.delete(onChange)
        reduced.removeEventListener('change', onChange)
      }
    },
  }
}

function browserStorage(): MotionStorage | null {
  try {
    return window.localStorage
  } catch (error) {
    console.warn('localStorage unavailable:', error)
    return null
  }
}

// Created on first use, so importing this module needs no window.
let pageStore: MotionStore | null = null

function store(): MotionStore {
  pageStore ??= createMotionStore(browserStorage(), window.matchMedia(REDUCED_QUERY))
  return pageStore
}

export function setAnimations(enabled: boolean): void {
  store().set(enabled)
}

export function useAnimations(): boolean {
  const current = store()
  return useSyncExternalStore(current.subscribe, current.enabled)
}
