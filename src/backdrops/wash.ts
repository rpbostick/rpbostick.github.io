import type { Theme } from '../shared/theme.ts'

// Each backdrop is drawn over the demo's own page background and under a wash
// of that background, so its brightest and darkest pixels stay close to what
// the demo's colors were chosen against. `npm run check:backdrops` confirms
// these values match the demos and that the wash keeps dim text readable.

export type Demo = 'colorwright' | 'skywright'

export interface DemoPalette {
  background: string
  // Every fill a panel with a translucent edge can have.
  panels: string[]
  // The dimmest text colors, each held to 4.5:1: muted, and faint where the
  // demo has it.
  dimText: string[]
}

// From public/colorwright/style.css and skywright's palettes (its bundle).
export const DEMO_PALETTES: Record<Demo, Record<Theme, DemoPalette>> = {
  colorwright: {
    light: { background: '#ffffff', panels: ['#ffffff', '#f3f4f6', '#f2f2f2'], dimText: ['#555555', '#5e666f'] },
    dark: { background: '#1a1816', panels: ['#24211e', '#1f1c19'], dimText: ['#b3aa9d', '#a39a8d'] },
  },
  skywright: {
    light: { background: '#e3ebf3', panels: ['#ffffff'], dimText: ['#5a6b7c'] },
    dark: { background: '#1a1816', panels: ['#24211e'], dimText: ['#b3aa9d'] },
  },
}

// The check prints the least wash each backdrop needs for 4.5:1 (0.46 for the
// light iridescence, set by colorwright's faint text; 0.39 for the dark snowy
// aurora; little or none for the rest); these add a margin over that, and a
// floor so the backdrop stays a background rather than the page.
export const WASH_OPACITY: Record<Demo, Record<Theme, number>> = {
  colorwright: { light: 0.5, dark: 0.35 },
  skywright: { light: 0.25, dark: 0.45 },
}

// Iridescence multiplies its pattern by this color (0–1 per channel).
export const IRIDESCENCE_COLORS: Record<Theme, [number, number, number]> = {
  light: [1, 0.97, 0.93],
  dark: [0.42, 0.36, 0.5],
}
