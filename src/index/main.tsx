import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../shared/base.css'
import './index.css'
import ThemeSwitch from '../shared/ThemeSwitch.tsx'
import IndexPage from './IndexPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeSwitch />
    <IndexPage />
  </StrictMode>,
)
