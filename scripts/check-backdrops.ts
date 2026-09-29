// Checks that the backdrops behind colorwright and skywright keep the demos'
// muted text readable. For every aurora feel (and the cross-fades between
// them), the iridescence, and both themes, it works out the brightest and
// darkest colors the shader can draw, puts the wash over them, puts the
// demo's panel fill over that at the 70% opacity of the panels' translucent
// edge, and measures muted text against the result. Every pair must reach
// 4.5:1. It also checks that src/backdrops/wash.ts still matches the colors
// in the demo files. Exits 1 on any failure. Run: node scripts/check-backdrops.ts
import { readFileSync, readdirSync } from 'node:fs'
import { hexToRgb, type Rgb } from '../src/backdrops/oklab.ts'
import { DEMO_PALETTES, IRIDESCENCE_COLORS, WASH_OPACITY, type Demo, type DemoPalette } from '../src/backdrops/wash.ts'
import { FEELS, mixParams, PRESETS, type AuroraParams } from '../src/backdrops/weather.ts'
import type { Theme } from '../src/shared/theme.ts'

const MIN_CONTRAST = 4.5
const PANEL_EDGE_OPACITY = 0.7
const THEMES: Theme[] = ['light', 'dark']

const failures: string[] = []

function relativeLuminance(rgb: Rgb): number {
  const [red, green, blue] = rgb.map((channel) =>
    channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4,
  )
  return 0.2126 * red + 0.7152 * green + 0.0722 * blue
}

function contrastRatio(first: Rgb, second: Rgb): number {
  const [lighter, darker] = [relativeLuminance(first), relativeLuminance(second)].sort((x, y) => y - x)
  return (lighter + 0.05) / (darker + 0.05)
}

// Browsers composite in gamma-encoded sRGB; `amount` is the top layer's opacity.
function over(bottom: Rgb, top: Rgb, amount: number): Rgb {
  return bottom.map((channel, index) => channel * (1 - amount) + top[index] * amount) as Rgb
}

const clamp01 = (value: number) => Math.min(1, Math.max(0, value))

function smoothstep(edge0: number, edge1: number, value: number): number {
  const progress = clamp01((value - edge0) / (edge1 - edge0))
  return progress * progress * (3 - 2 * progress)
}

// The shader's COLOR_RAMP: stops at 0, 0.5 and 1 across the width, mixed linearly.
function ramp(stops: Rgb[], position: number): Rgb {
  const [from, to, local] = position < 0.5 ? [stops[0], stops[1], position * 2] : [stops[1], stops[2], position * 2 - 1]
  return over(from, to, local)
}

// Every color Aurora.tsx's fragment shader can put on screen for these
// parameters, sampled across the ramp and the whole intensity range.
// Intensity peaks at the top edge where the noise is lowest:
// 0.6 × (2 − exp(−0.5 × amplitude) + 0.2).
function auroraColors(params: AuroraParams, theme: Theme, background: Rgb): Rgb[] {
  const stops = params.colorStops.map(hexToRgb)
  const peak = 0.6 * (2.2 - Math.exp(-0.5 * params.amplitude))
  const colors: Rgb[] = [theme === 'light' ? [1, 1, 1] : background]
  for (let rampStep = 0; rampStep <= 20; rampStep++) {
    const rampColor = ramp(stops, rampStep / 20)
    for (let intensityStep = 0; intensityStep <= 50; intensityStep++) {
      const intensity = (peak * intensityStep) / 50
      const alpha = smoothstep(0.2 - params.blend * 0.5, 0.2 + params.blend * 0.5, intensity)
      if (theme === 'light') {
        const energy = clamp01(intensity)
        const coverage = Math.min(0.86, clamp01(alpha * (0.55 + 0.45 * energy)))
        const chroma = rampColor.map((channel) => clamp01(channel) ** 1.2)
        const chromaPeak = Math.max(...chroma, 0.0001)
        const normalized = chroma.map((channel) => channel / chromaPeak) as Rgb
        colors.push(over([1, 1, 1], normalized, Math.min(coverage * 1.08, 0.94)))
      } else {
        const premultiplied = rampColor.map((channel) => clamp01(intensity * channel) * alpha)
        colors.push(background.map((channel, index) => clamp01(premultiplied[index] + channel * (1 - alpha))) as Rgb)
      }
    }
  }
  return colors
}

// Iridescence.tsx ends with cos(x) × uColor where x is in [0, 1], so each
// channel runs independently from cos(1) × color up to color.
function iridescenceColors(color: [number, number, number]): Rgb[] {
  const low = Math.cos(1)
  const colors: Rgb[] = []
  for (let corner = 0; corner < 8; corner++) {
    colors.push(color.map((channel, index) => ((corner >> index) & 1 ? channel : channel * low)) as Rgb)
  }
  return colors
}

// Each feel, and the points of every cross-fade or click between two feels.
function auroraParamSets(theme: Theme): { label: string; params: AuroraParams }[] {
  const sets = FEELS.map((feel) => ({ label: feel, params: PRESETS[feel][theme] }))
  for (const from of FEELS) {
    for (const to of FEELS) {
      if (from === to) continue
      for (const amount of [0.25, 0.5, 0.75]) {
        sets.push({ label: `${from}→${to} ${amount}`, params: mixParams(PRESETS[from][theme], PRESETS[to][theme], amount) })
      }
    }
  }
  return sets
}

function backdropColors(demo: Demo, theme: Theme): { label: string; colors: Rgb[] }[] {
  const background = hexToRgb(DEMO_PALETTES[demo][theme].background)
  if (demo === 'colorwright') return [{ label: 'iridescence', colors: iridescenceColors(IRIDESCENCE_COLORS[theme]) }]
  return auroraParamSets(theme).map(({ label, params }) => ({ label, colors: auroraColors(params, theme, background) }))
}

function worstContrast(demo: Demo, theme: Theme, colors: Rgb[], wash: number): number {
  const palette = DEMO_PALETTES[demo][theme]
  const background = hexToRgb(palette.background)
  const muted = hexToRgb(palette.muted)
  let worst = Infinity
  for (const color of colors) {
    const washed = over(color, background, wash)
    for (const panel of palette.panels) {
      worst = Math.min(worst, contrastRatio(muted, over(washed, hexToRgb(panel), PANEL_EDGE_OPACITY)))
    }
  }
  return worst
}

// The least wash that reaches MIN_CONTRAST, to 0.01, or null if none does.
function leastWash(demo: Demo, theme: Theme, colors: Rgb[]): number | null {
  for (let hundredths = 0; hundredths <= 100; hundredths++) {
    if (worstContrast(demo, theme, colors, hundredths / 100) >= MIN_CONTRAST) return hundredths / 100
  }
  return null
}

function checkBackdrops(): void {
  for (const demo of Object.keys(DEMO_PALETTES) as Demo[]) {
    for (const theme of THEMES) {
      const wash = WASH_OPACITY[demo][theme]
      console.log(`\n${demo}, ${theme} theme: wash ${DEMO_PALETTES[demo][theme].background} at ${wash}`)
      console.log('backdrop              contrast  least wash')
      for (const { label, colors } of backdropColors(demo, theme)) {
        const contrast = worstContrast(demo, theme, colors, wash)
        const least = leastWash(demo, theme, colors)
        console.log(`${label.padEnd(22)}${contrast.toFixed(2).padStart(6)}:1  ${least === null ? 'none' : least.toFixed(2)}`)
        if (contrast < MIN_CONTRAST) failures.push(`${demo} ${theme} ${label}: ${contrast.toFixed(2)}:1 at wash ${wash}`)
      }
    }
  }
}

// --- The palettes in wash.ts against the demo files -------------------------

function cssBlock(css: string, selector: string): Map<string, string> {
  const start = css.indexOf(`${selector}{`)
  if (start === -1) throw new Error(`public/colorwright/style.css: no "${selector}{" block`)
  const body = css.slice(start + selector.length + 1, css.indexOf('}', start))
  return new Map(
    body.split(';').flatMap((declaration) => {
      const colon = declaration.indexOf(':')
      return colon === -1 ? [] : [[declaration.slice(0, colon).trim(), declaration.slice(colon + 1).trim()] as [string, string]]
    }),
  )
}

function cssValue(block: Map<string, string>, name: string, where: string): string {
  const value = block.get(name)
  if (value === undefined) throw new Error(`public/colorwright/style.css ${where}: no ${name}`)
  return value.length === 4 ? '#' + [...value.slice(1)].map((digit) => digit + digit).join('') : value
}

function colorwrightPalettes(): Record<Theme, DemoPalette> {
  const css = readFileSync('public/colorwright/style.css', 'utf8')
  const light = cssBlock(css, ':root')
  const dark = cssBlock(css, ':root[data-theme=dark]')
  const palette = (block: Map<string, string>, where: string): DemoPalette => {
    const surface = cssValue(block, '--surface', where)
    const panels = [surface, cssValue(block, '--row-empty-bg', where), cssValue(block, '--status-bg', where)]
    return {
      background: cssValue(block, '--bg', where),
      panels: [...new Set(panels)],
      muted: cssValue(block, '--text-muted', where),
    }
  }
  return { light: palette(light, ':root'), dark: palette(dark, ':root[data-theme=dark]') }
}

function skywrightPalettes(): Record<Theme, DemoPalette> {
  const directory = 'public/skywright/_expo/static/js/web'
  const bundles = readdirSync(directory).filter((name) => name.endsWith('.js'))
  if (bundles.length !== 1) throw new Error(`${directory}: expected one bundle, found ${bundles.length}`)
  const source = readFileSync(`${directory}/${bundles[0]}`, 'utf8')
  const pattern = /\{background:'(#[0-9a-f]{6})',surface:'(#[0-9a-f]{6})',card:'#[0-9a-f]{6}',text:'#[0-9a-f]{6}',muted:'(#[0-9a-f]{6})'/g
  const matches = [...source.matchAll(pattern)]
  if (matches.length !== 2) throw new Error(`${bundles[0]}: expected the light and dark palettes, found ${matches.length}`)
  const [light, dark] = matches.map(([, background, surface, muted]) => ({ background, panels: [surface], muted }))
  return { light, dark }
}

function checkPalettes(): void {
  const fromFiles: Record<Demo, Record<Theme, DemoPalette>> = {
    colorwright: colorwrightPalettes(),
    skywright: skywrightPalettes(),
  }
  for (const demo of Object.keys(fromFiles) as Demo[]) {
    for (const theme of THEMES) {
      const expected = JSON.stringify(fromFiles[demo][theme])
      const actual = JSON.stringify(DEMO_PALETTES[demo][theme])
      if (expected !== actual) failures.push(`wash.ts ${demo} ${theme} is ${actual}, the demo has ${expected}`)
    }
  }
  console.log('Palettes in src/backdrops/wash.ts checked against public/colorwright/style.css and the skywright bundle.')
}

checkPalettes()
checkBackdrops()

console.log('')
if (failures.length > 0) {
  console.log(`FAIL: ${failures.length} problem(s)`)
  for (const failure of failures) console.log(`  ${failure}`)
  process.exit(1)
}
console.log(`PASS: muted text reaches ${MIN_CONTRAST}:1 over every backdrop color, feel and panel fill in both themes`)
