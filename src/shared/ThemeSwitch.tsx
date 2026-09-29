import { useRef, type KeyboardEvent } from 'react'
import { setThemeChoice, useThemeChoice, type ThemeChoice } from './theme.ts'
import './themeSwitch.css'

const OPTIONS: { choice: ThemeChoice; label: string }[] = [
  { choice: 'system', label: 'System' },
  { choice: 'light', label: 'Light' },
  { choice: 'dark', label: 'Dark' },
]

// A radio group: Tab reaches the checked option only, and the arrow keys
// move the choice (and focus) along the group, wrapping at the ends.
export default function ThemeSwitch({ className }: { className?: string }) {
  const choice = useThemeChoice()
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([])

  function onKeyDown(event: KeyboardEvent) {
    const current = OPTIONS.findIndex((option) => option.choice === choice)
    let next: number
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (current + 1) % OPTIONS.length
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (current - 1 + OPTIONS.length) % OPTIONS.length
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = OPTIONS.length - 1
    else return
    event.preventDefault()
    setThemeChoice(OPTIONS[next].choice)
    buttonsRef.current[next]?.focus()
  }

  return (
    <div className={className ? `site-switch ${className}` : 'site-switch'} role="radiogroup" aria-label="Colour theme" onKeyDown={onKeyDown}>
      {OPTIONS.map((option, index) => {
        const checked = option.choice === choice
        return (
          <button
            key={option.choice}
            ref={(button) => {
              buttonsRef.current[index] = button
            }}
            type="button"
            role="radio"
            aria-checked={checked}
            tabIndex={checked ? 0 : -1}
            className="site-switch-option"
            onClick={() => setThemeChoice(option.choice)}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
