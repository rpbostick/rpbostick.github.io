// A dev page, not linked from the site: see WavePatternsPage.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../shared/base.css'
import './wavePatterns.css'
import ControlCluster from '../shared/ControlCluster.tsx'
import { mountInOwnElement } from '../shared/mountInOwnElement.tsx'
import WavePatternsPage from './WavePatternsPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WavePatternsPage />
  </StrictMode>,
)
mountInOwnElement('site-controls', <ControlCluster />)
