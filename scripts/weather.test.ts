// The skywright aurora's weather timing. Run: node --test scripts/weather.test.ts
import assert from 'node:assert/strict'
import { test } from 'node:test'
import {
  CLICK_EASE_MS,
  FADE_MS,
  feelAt,
  heldFeel,
  HOLD_MS,
  mixParams,
  PRESETS,
  WeatherDrive,
  weatherAt,
} from '../src/backdrops/weather.ts'
import { hexToRgb } from '../src/backdrops/oklab.ts'

test('the drift holds a feel for HOLD_MS, then cross-fades over FADE_MS to the next', () => {
  assert.deepEqual(weatherAt(0, 'sunny', 'dark'), PRESETS.sunny.dark)
  assert.deepEqual(weatherAt(HOLD_MS - 1, 'sunny', 'dark'), PRESETS.sunny.dark)
  const midFade = weatherAt(HOLD_MS + FADE_MS / 2, 'sunny', 'dark')
  assert.notDeepEqual(midFade, PRESETS.sunny.dark)
  assert.notDeepEqual(midFade, PRESETS.rainy.dark)
  assert.deepEqual(weatherAt(HOLD_MS + FADE_MS, 'sunny', 'dark'), PRESETS.rainy.dark)
})

test('the drift wraps from snowy back to sunny', () => {
  assert.equal(feelAt(3 * (HOLD_MS + FADE_MS), 'sunny'), 'sunny')
  assert.equal(feelAt(HOLD_MS + FADE_MS, 'snowy'), 'sunny')
  assert.deepEqual(weatherAt(HOLD_MS + FADE_MS, 'snowy', 'light'), PRESETS.sunny.light)
})

test('a click eases from what was shown to the feel within CLICK_EASE_MS', () => {
  const shown = weatherAt(HOLD_MS + FADE_MS / 2, 'sunny', 'light')
  assert.deepEqual(weatherAt(0, 'snowy', 'light', shown), shown)
  const halfway = weatherAt(CLICK_EASE_MS / 2, 'snowy', 'light', shown)
  assert.notDeepEqual(halfway, shown)
  assert.notDeepEqual(halfway, PRESETS.snowy.light)
  assert.deepEqual(weatherAt(CLICK_EASE_MS, 'snowy', 'light', shown), PRESETS.snowy.light)
})

test('a clicked feel is held until HOLD_MS, then the drift resumes from it', () => {
  const shown = PRESETS.sunny.dark
  assert.deepEqual(weatherAt(HOLD_MS - 1, 'rainy', 'dark', shown), PRESETS.rainy.dark)
  assert.equal(heldFeel(HOLD_MS - 1, 'rainy'), 'rainy')
  assert.equal(heldFeel(HOLD_MS, 'rainy'), null)
  assert.deepEqual(weatherAt(HOLD_MS + FADE_MS, 'rainy', 'dark', shown), PRESETS.snowy.dark)
})

test('cross-fades mix in OKLab: gold to slate keeps its lightness between the ends', () => {
  const mid = mixParams(PRESETS.sunny.dark, PRESETS.rainy.dark, 0.5)
  const luminance = (hex: string) => hexToRgb(hex).reduce((sum, channel) => sum + channel, 0) / 3
  const [gold, slate, middle] = [PRESETS.sunny.dark.colorStops[0], PRESETS.rainy.dark.colorStops[0], mid.colorStops[0]]
  assert.ok(luminance(middle) > Math.min(luminance(gold), luminance(slate)))
  assert.ok(luminance(middle) < Math.max(luminance(gold), luminance(slate)))
  assert.equal(mid.speed, (PRESETS.sunny.dark.speed + PRESETS.rainy.dark.speed) / 2)
})

test('WeatherDrive: a click shows as pressed for HOLD_MS, and clicking again restarts the hold', () => {
  const drive = new WeatherDrive(0)
  assert.equal(drive.pressedAt(0), null)
  drive.choose('rainy', 1000, 'light')
  assert.equal(drive.pressedAt(1000 + HOLD_MS - 1), 'rainy')
  drive.choose('rainy', 15_000, 'light')
  assert.equal(drive.pressedAt(1000 + HOLD_MS + 1), 'rainy')
  assert.equal(drive.msUntilRelease(15_000), HOLD_MS)
  assert.equal(drive.pressedAt(15_000 + HOLD_MS), null)
  assert.deepEqual(drive.paramsAt(15_000 + CLICK_EASE_MS, 'light'), PRESETS.rainy.light)
})

test('WeatherDrive frozen: one still frame of the current feel; buttons change it; resuming drifts on', () => {
  const drive = new WeatherDrive(0, 'sunny')
  drive.freeze(HOLD_MS + FADE_MS * 0.75)
  assert.deepEqual(drive.paramsAt(10 * HOLD_MS, 'dark'), PRESETS.rainy.dark)
  assert.equal(drive.pressedAt(10 * HOLD_MS), 'rainy')
  drive.choose('snowy', 11 * HOLD_MS, 'dark')
  assert.deepEqual(drive.paramsAt(12 * HOLD_MS, 'dark'), PRESETS.snowy.dark)
  drive.resume(100_000)
  assert.deepEqual(drive.paramsAt(100_000 + HOLD_MS - 1, 'dark'), PRESETS.snowy.dark)
  assert.deepEqual(drive.paramsAt(100_000 + HOLD_MS + FADE_MS, 'dark'), PRESETS.sunny.dark)
})
