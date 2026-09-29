import type { ReactNode } from 'react'
import AnimationsToggle from './AnimationsToggle.tsx'
import ThemeSwitch from './ThemeSwitch.tsx'
import './controlCluster.css'

// The fixed controls at the top right of every demo page. The demos leave a
// 280 × 64 px space there in host mode, so the cluster must fit inside it.
export default function ControlCluster({ children }: { children?: ReactNode }) {
  return (
    <div className="site-controls" role="group" aria-label="Page settings">
      <ThemeSwitch />
      <div className="site-controls-row">
        <AnimationsToggle />
        {children}
      </div>
    </div>
  )
}
