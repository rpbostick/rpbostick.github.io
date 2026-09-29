import { Component, type ReactNode } from 'react'
import { useTheme } from '../shared/theme.ts'
import { DEMO_PALETTES, WASH_OPACITY, type Demo } from './wash.ts'
import './backdrop.css'

// If the backdrop cannot draw (no WebGL), the error is logged and the demo's
// own background and wash stay, so the page is still readable.
class BackdropBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  componentDidCatch(error: unknown) {
    console.error('Backdrop failed to draw:', error)
  }

  render() {
    return this.state.failed ? null : this.props.children
  }
}

// Fixed behind the whole page: the demo's background, the animation, then a
// wash of the background over it (src/backdrops/wash.ts).
export default function BackdropLayers({ demo, children }: { demo: Demo; children: ReactNode }) {
  const theme = useTheme()
  const background = DEMO_PALETTES[demo][theme].background
  return (
    <div className="site-backdrop" style={{ backgroundColor: background }} aria-hidden="true">
      <BackdropBoundary>{children}</BackdropBoundary>
      <div className="site-backdrop-wash" style={{ backgroundColor: background, opacity: WASH_OPACITY[demo][theme] }} />
    </div>
  )
}
