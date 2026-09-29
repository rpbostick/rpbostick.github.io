import type { ReactNode } from 'react'
import { chooseFeel, usePressedFeel } from '../backdrops/weatherStore.ts'
import type { Feel } from '../backdrops/weather.ts'
import { useTheme } from '../shared/theme.ts'
import '../shared/themeSwitch.css'

const ICON_PROPS = {
  viewBox: '0 0 16 16',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  'aria-hidden': true,
} as const

const OPTIONS: { feel: Feel; label: string; icon: ReactNode }[] = [
  {
    feel: 'sunny',
    label: 'Sun',
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="8" cy="8" r="3" />
        <path d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3 3l1 1M12 12l1 1M3 13l1-1M12 4l1-1" />
      </svg>
    ),
  },
  {
    feel: 'rainy',
    label: 'Rain',
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M4.5 9.5a3 3 0 0 1 .4-6 4 4 0 0 1 7.3 1.5 2.3 2.3 0 0 1-.2 4.5z" />
        <path d="M5 12l-1 2.5M8.5 12l-1 2.5M12 12l-1 2.5" />
      </svg>
    ),
  },
  {
    feel: 'snowy',
    label: 'Snow',
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M8 1.5v13M2.4 4.75l11.2 6.5M2.4 11.25l11.2-6.5M6.5 2.5 8 4l1.5-1.5M6.5 13.5 8 12l1.5 1.5" />
      </svg>
    ),
  },
]

// Sun, Rain and Snow for the skywright aurora; the pressed one is the feel
// being held (or, with animations off, the still frame's).
export default function WeatherButtons() {
  const pressed = usePressedFeel()
  const theme = useTheme()
  return (
    <div className="site-switch" role="group" aria-label="Background weather">
      {OPTIONS.map((option) => (
        <button
          key={option.feel}
          type="button"
          className="site-switch-option"
          aria-pressed={pressed === option.feel}
          aria-label={option.label}
          title={option.label}
          onClick={() => chooseFeel(option.feel, theme)}
        >
          {option.icon}
        </button>
      ))}
    </div>
  )
}
