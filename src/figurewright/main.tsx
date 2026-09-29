import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../shared/base.css'
import './figurewright.css'
import ControlCluster from '../shared/ControlCluster.tsx'
import { mountInOwnElement } from '../shared/mountInOwnElement.tsx'
import FigurewrightPage from './FigurewrightPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FigurewrightPage />
  </StrictMode>,
)
mountInOwnElement('site-controls', <ControlCluster />)
