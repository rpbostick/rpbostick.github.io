import { setAnimations, useAnimations } from './motion.ts'
import './themeSwitch.css'

export default function AnimationsToggle() {
  const enabled = useAnimations()
  return (
    <div className="site-switch">
      <button
        type="button"
        className="site-switch-option"
        aria-pressed={enabled}
        onClick={() => setAnimations(!enabled)}
      >
        {enabled ? 'Animations on' : 'Animations off'}
      </button>
    </div>
  )
}
