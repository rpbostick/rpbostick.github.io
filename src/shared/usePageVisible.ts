import { useSyncExternalStore } from 'react'

function subscribe(onChange: () => void): () => void {
  document.addEventListener('visibilitychange', onChange)
  return () => document.removeEventListener('visibilitychange', onChange)
}

function visible(): boolean {
  return document.visibilityState === 'visible'
}

// False while the tab is hidden; every animation loop pauses then, whatever
// the Animations setting.
export function usePageVisible(): boolean {
  return useSyncExternalStore(subscribe, visible)
}
