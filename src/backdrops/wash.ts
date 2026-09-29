import type { Theme } from '../shared/theme.ts'

// Each backdrop is drawn over the demo's own page background and under a wash
// of that background, so its brightest and darkest pixels stay close to what
// the demo's colors were chosen against. `npm run check:backdrops` confirms
// these values match the demos and that the wash keeps muted text readable.

export type Demo = 'colorwright' | 'skywright'

export interface DemoPalette {
  background: string
  // Every fill a panel with a translucent edge can have.
  panels: string[]
  muted: string
}

// From public/colorwright/style.css and skywright's palettes (its bundle).
export const DEMO_PALETTES: Record<Demo, Record<Theme, DemoPalette>> = {
  colorwright: {
    light: { background: '#ffffff', panels: ['#ffffff', '#f3f4f6', '#f2f2f2'], muted: '#555555' },
    dark: { background: '#1a1816', panels: ['#24211e', '#1f1c19'], muted: '#b3aa9d' },
  },
  skywright: {
    light: { background: '#e3ebf3', panels: ['#ffffff'], muted: '#5a6b7c' },
    dark: { background: '#1a1816', panels: ['#24211e'], muted: '#b3aa9d' },
  },
}

// The check prints the least wash each backdrop needs for 4.5:1 (0.39 for the
// dark snowy aurora, none for the rest); these add a margin over that, and a
// floor so the backdrop stays a background rather than the page.
export const WASH_OPACITY: Record<Demo, Record<Theme, number>> = {
  colorwright: { light: 0.35, dark: 0.35 },
  skywright: { light: 0.25, dark: 0.45 },
}

// Iridescence multiplies its pattern by this color (0–1 per channel).
export const IRIDESCENCE_COLORS: Record<Theme, [number, number, number]> = {
  light: [1, 0.97, 0.93],
  dark: [0.42, 0.36, 0.5],
}
