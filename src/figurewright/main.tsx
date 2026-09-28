import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../shared/base.css'
import './figurewright.css'
import ThemeSwitch from '../shared/ThemeSwitch.tsx'
import FigurewrightPage from './FigurewrightPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeSwitch />
    <FigurewrightPage />
  </StrictMode>,
)
