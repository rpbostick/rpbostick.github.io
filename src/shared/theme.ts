import { useSyncExternalStore } from 'react'

// The chosen theme lives in `data-theme` on <html>: absent for System,
// "light" or "dark" otherwise. The inline script in each index.html sets it
// from localStorage before first paint, under the same key, so a saved
// choice never flashes the other theme.

export type ThemeChoice = 'system' | 'light' | 'dark'
export type Theme = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'theme'
const DARK_QUERY = '(prefers-color-scheme: dark)'

function isExplicit(value: string | null | undefined): value is Theme {
  return value === 'light' || value === 'dark'
}

function currentChoice(): ThemeChoice {
  const attribute = document.documentElement.dataset.theme
  return isExplicit(attribute) ? attribute : 'system'
}

function currentTheme(): Theme {
  const choice = currentChoice()
  if (choice !== 'system') return choice
  return window.matchMedia(DARK_QUERY).matches ? 'dark' : 'light'
}

// Storage can be unavailable (disabled, private mode, sandboxed); the choice
// then applies to this page view only.
function save(choice: ThemeChoice): void {
  try {
    if (choice === 'system') localStorage.removeItem(THEME_STORAGE_KEY)
    else localStorage.setItem(THEME_STORAGE_KEY, choice)
  } catch (error) {
    console.warn('Theme choice not saved:', error)
  }
}

export function setThemeChoice(choice: ThemeChoice): void {
  if (choice === 'system') delete document.documentElement.dataset.theme
  else document.documentElement.dataset.theme = choice
  save(choice)
}

// Re-renders on a new choice (the attribute changes) and, under System, on
// the operating system switching between light and dark.
function subscribe(onChange: () => void): () => void {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
  const media = window.matchMedia(DARK_QUERY)
  media.addEventListener('change', onChange)
  return () => {
    observer.disconnect()
    media.removeEventListener('change', onChange)
  }
}

export function useThemeChoice(): ThemeChoice {
  return useSyncExternalStore(subscribe, currentChoice)
}

// The theme in effect: the choice, or the system's under System. Everything
// that draws in theme colors from script reads this, not the media query.
export function useTheme(): Theme {
  return useSyncExternalStore(subscribe, currentTheme)
}
