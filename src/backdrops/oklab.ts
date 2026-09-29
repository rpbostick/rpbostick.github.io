// Color mixing in OKLab, so a cross-fade between two hues passes through a
// clean in-between color instead of the gray an sRGB mix gives.

export type Rgb = [number, number, number]
type Lab = [number, number, number]

export function hexToRgb(hex: string): Rgb {
  if (!/^#[0-9a-f]{6}$/i.test(hex)) throw new Error(`Not a #rrggbb color: ${JSON.stringify(hex)}`)
  return [1, 3, 5].map((offset) => parseInt(hex.slice(offset, offset + 2), 16) / 255) as Rgb
}

export function rgbToHex(rgb: Rgb): string {
  return (
    '#' +
    rgb
      .map((channel) =>
        Math.round(Math.min(1, Math.max(0, channel)) * 255)
          .toString(16)
          .padStart(2, '0'),
      )
      .join('')
  )
}

function decodeGamma(channel: number): number {
  return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4
}

function encodeGamma(linear: number): number {
  return linear <= 0.0031308 ? 12.92 * linear : 1.055 * linear ** (1 / 2.4) - 0.055
}

function rgbToLab(rgb: Rgb): Lab {
  const [red, green, blue] = rgb.map(decodeGamma)
  const lCone = Math.cbrt(0.4122214708 * red + 0.5363325363 * green + 0.0514459929 * blue)
  const mCone = Math.cbrt(0.2119034982 * red + 0.6806995451 * green + 0.1073969566 * blue)
  const sCone = Math.cbrt(0.0883024619 * red + 0.2817188376 * green + 0.6299787005 * blue)
  return [
    0.2104542553 * lCone + 0.793617785 * mCone - 0.0040720468 * sCone,
    1.9779984951 * lCone - 2.428592205 * mCone + 0.4505937099 * sCone,
    0.0259040371 * lCone + 0.7827717662 * mCone - 0.808675766 * sCone,
  ]
}

function labToRgb([lightness, a, b]: Lab): Rgb {
  const lCone = (lightness + 0.3963377774 * a + 0.2158037573 * b) ** 3
  const mCone = (lightness - 0.1055613458 * a - 0.0638541728 * b) ** 3
  const sCone = (lightness - 0.0894841775 * a - 1.291485548 * b) ** 3
  return [
    4.0767416621 * lCone - 3.3077115913 * mCone + 0.2309699292 * sCone,
    -1.2684380046 * lCone + 2.6097574011 * mCone - 0.3413193965 * sCone,
    -0.0041960863 * lCone - 0.7034186147 * mCone + 1.707614701 * sCone,
  ].map((channel) => Math.min(1, Math.max(0, encodeGamma(Math.max(0, channel))))) as Rgb
}

// `amount` 0 gives `from`, 1 gives `to`.
export function mixOklab(from: string, to: string, amount: number): string {
  const start = rgbToLab(hexToRgb(from))
  const end = rgbToLab(hexToRgb(to))
  return rgbToHex(labToRgb(start.map((value, index) => value + (end[index] - value) * amount) as Lab))
}
