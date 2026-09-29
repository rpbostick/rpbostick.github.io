// The hero's pointer rules, as pure functions so a check script can cover
// them: which press toggles the color mode, when a press becomes a drag,
// and which clicks activate.

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

// A touch drag only morphs the pattern while the hero is active; inactive,
// the finger scrolls the page.
export function startsDrag(button: number, pointerType: string, active: boolean, onStrip: boolean): boolean {
  if (button !== LEFT_BUTTON || onStrip) return false
  return pointerType !== 'touch' || active
}

// The strip is the way out, so a click anywhere on it (not only its button)
// must not turn the color mode on; nor does the click that ends a drag.
export function clickActivates(onStrip: boolean, dragged: boolean): boolean {
  return !onStrip && !dragged
}
