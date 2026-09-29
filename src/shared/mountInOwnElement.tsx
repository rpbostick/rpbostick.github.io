import { StrictMode, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'

// Renders into a new element at the end of <body>, so the site's controls and
// backdrops never touch a page's own DOM, and one root failing (a backdrop
// without WebGL) leaves the others running.
export function mountInOwnElement(id: string, node: ReactNode): void {
  if (document.getElementById(id)) throw new Error(`#${id} is already on the page`)
  const element = document.createElement('div')
  element.id = id
  element.className = 'site-ui'
  document.body.append(element)
  createRoot(element).render(<StrictMode>{node}</StrictMode>)
}
