// Prints every hero colour stop with its contrast against both hero
// backgrounds and exits 1 if any stop is under 1.5:1 or the serpentine order
// jumps in lightness. Run: node scripts/check-palette.ts
import { STOP_COUNT, heroBackgrounds, stopsByTheme, type Theme } from '../src/figurewright/palette.ts'

const MIN_LINE_CONTRAST = 1.5

function relativeLuminance(hex: string): number {
  const channels = [1, 3, 5].map((offset) => parseInt(hex.slice(offset, offset + 2), 16) / 255)
  const [red, green, blue] = channels.map((channel) =>
    channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4,
  )
  return 0.2126 * red + 0.7152 * green + 0.0722 * blue
}

function contrastRatio(hexA: string, hexB: string): number {
  const [lighter, darker] = [relativeLuminance(hexA), relativeLuminance(hexB)].sort((x, y) => y - x)
  return (lighter + 0.05) / (darker + 0.05)
}

const failures: string[] = []
const themes: Theme[] = ['light', 'dark']

for (const theme of themes) {
  const stops = stopsByTheme[theme]
  if (stops.length !== STOP_COUNT) failures.push(`${theme}: ${stops.length} stops, expected ${STOP_COUNT}`)
  console.log(`\n${theme} theme, background ${heroBackgrounds[theme]}`)
  console.log('pos  label  name           hex      L      C      contrast')
  let worst = Infinity
  stops.forEach((stop, index) => {
    const contrast = contrastRatio(stop.hex, heroBackgrounds[theme])
    worst = Math.min(worst, contrast)
    if (contrast < MIN_LINE_CONTRAST) failures.push(`${theme} ${stop.label}: contrast ${contrast.toFixed(2)}`)
    const next = stops[(index + 1) % stops.length]
    const lightnessJump = Math.abs(next.l - stop.l)
    // Within a family the step is one shade; across a family boundary it is 0.
    if (lightnessJump > 0.1) failures.push(`${theme} ${stop.label}→${next.label}: lightness jump ${lightnessJump.toFixed(3)}`)
    console.log(
      [
        String(index).padStart(3),
        stop.label.padEnd(5),
        stop.name.padEnd(14),
        stop.hex,
        stop.l.toFixed(3),
        stop.c.toFixed(3),
        `${contrast.toFixed(2)}:1`,
      ].join('  '),
    )
  })
  console.log(`${theme}: lowest contrast ${worst.toFixed(2)}:1`)
}

console.log('')
if (failures.length > 0) {
  console.log(`FAIL: ${failures.length} problem(s)`)
  for (const failure of failures) console.log(`  ${failure}`)
  process.exit(1)
}
console.log(`PASS: all ${STOP_COUNT * themes.length} stops are at least ${MIN_LINE_CONTRAST}:1 against their hero background, and no neighbouring stops jump in lightness`)
