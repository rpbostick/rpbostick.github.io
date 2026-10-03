// The hero's pointer rules, as pure functions so a check script can cover
// them: which press toggles the color mode, where and when a press becomes
// a drag, which clicks activate, and the pointer the waves follow.
import { Momentum, type Bounds, type Point } from '../shared/momentum.ts'

export const LEFT_BUTTON = 0
export const MIDDLE_BUTTON = 1

// Movement under this many pixels between press and release is a click.
export const DRAG_THRESHOLD_PX = 5

// A middle press flips between the wheel shifting colors and the wheel
// scrolling the page; other buttons leave the state alone (a left click
// activates through `clickActivates`, on release).
export function activeAfterPress(active: boolean, button: number): boolean {
  return button === MIDDLE_BUTTON ? !active : active
}

export function isDrag(dx: number, dy: number): boolean {
  return Math.hypot(dx, dy) >= DRAG_THRESHOLD_PX
}

// What a drag cannot start on: the hero's text, tags, hint, buttons, the
// strip, and anything marked data-solid. Everything else is bare background.
export const CONTENT_SELECTOR = '.hero-text, .hero-tag, .hero-hint, .hero-strip, button, a, [data-solid]'

// Typed by shape rather than as Element so the check script can pass a stand-in.
export function onContent(target: { closest?: (selector: string) => unknown } | null): boolean {
  return typeof target?.closest === 'function' && target.closest(CONTENT_SELECTOR) !== null
}

// A drag starts only on bare background. A touch drag only stirs the
// pattern while the hero is active; inactive, the finger scrolls the page.
export function startsDrag(button: number, pointerType: string, active: boolean, onContent: boolean): boolean {
  if (button !== LEFT_BUTTON || onContent) return false
  return pointerType !== 'touch' || active
}

// The pointer the waves ripple under: the dragged point during a drag, then
// a coasting one after a fling, so hovering leaves the waves alone; null
// otherwise, which lets the ripples settle. Coordinates are the caller's
// (the hero passes hero-relative ones, so a scroll mid-coast moves nothing).
export class WavesPointer {
  private point: Point | null = null
  private strokes = 0
  private readonly momentum = new Momentum()
  reducedMotion = false

  // The dragged point only, without the coast.
  get current(): Point | null {
    return this.point
  }

  // Counts presses: a press during a coast moves the pointer in one frame,
  // and this tells the waves it is a new stroke rather than a fling.
  get stroke(): number {
    return this.strokes
  }

  grab(x: number, y: number, now: number) {
    this.strokes++
    this.point = { x, y }
    this.momentum.press(x, y, now)
  }

  move(x: number, y: number, now: number) {
    if (!this.point) return
    this.point = { x, y }
    this.momentum.move(x, y, now)
  }

  release(now: number) {
    this.point = null
    this.momentum.release(now, this.reducedMotion)
  }

  // Ends the drag without a coast.
  cancel() {
    this.point = null
    this.momentum.cancel()
  }

  // Called once per frame.
  at(now: number, bounds: Bounds): Point | null {
    return this.point ?? this.momentum.advance(now, bounds)
  }
}

// The strip is the way out, so a click anywhere on it (not only its button)
// must not turn the color mode on; nor does the click that ends a drag.
export function clickActivates(onStrip: boolean, dragged: boolean): boolean {
  return !onStrip && !dragged
}
