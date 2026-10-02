// The hero's pointer rules, as pure functions so a check script can cover
// them: which press toggles the color mode, where and when a press becomes
// a drag, which clicks activate, and the pointer the waves follow.

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

// A drag starts only on bare background. A touch drag only morphs the
// pattern while the hero is active; inactive, the finger scrolls the page.
export function startsDrag(button: number, pointerType: string, active: boolean, onContent: boolean): boolean {
  if (button !== LEFT_BUTTON || onContent) return false
  return pointerType !== 'touch' || active
}

// The pointer the waves ripple under: set only during a drag, so hovering
// leaves the waves alone; null otherwise, which lets the ripples settle.
export class WavesPointer {
  private point: { x: number; y: number } | null = null

  get current(): { x: number; y: number } | null {
    return this.point
  }

  grab(x: number, y: number) {
    this.point = { x, y }
  }

  move(x: number, y: number) {
    if (this.point) this.point = { x, y }
  }

  release() {
    this.point = null
  }
}

// The strip is the way out, so a click anywhere on it (not only its button)
// must not turn the color mode on; nor does the click that ends a drag.
export function clickActivates(onStrip: boolean, dragged: boolean): boolean {
  return !onStrip && !dragged
}
