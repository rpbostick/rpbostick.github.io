# Iridescence: changes from React Bits

`Iridescence.tsx` and `Iridescence.css` are React Bits' `src/ts-default/Backgrounds/Iridescence/` (https://github.com/DavidHDev/react-bits) at commit `4d6a46d3f401736695c495f1e72ed429e0ed1b93`, with the changes below (profile `site`) applied by reactbits-kit 0.3.0. `rbx update` re-applies them; `rbx check` reports any edit since.

`Iridescence.css` is unchanged.

## Changes

1. **01-accumulated-clock** (`Iridescence.tsx`): The clock is accumulated each frame (a frame counted as at most 100 ms) instead of read from the `requestAnimationFrame` timestamp, so resuming after a pause continues where it stopped. The rate is the same.
2. **02-paused-prop** (`Iridescence.tsx`): A `paused` prop, as in Waves 07-paused-prop: the loop draws one more frame and stops; every re-render and every resize draws one frame.

## License

React Bits' `LICENSE.md` at that commit, verbatim:

---

MIT + Commons Clause License Condition v1.0

Copyright (c) 2026 David Haz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, and distribute the Software **as part of an application, website, or product**, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

## Commons Clause Restriction

You may use this Software, including for any commercial purpose, **so long as you do not sell, sublicense, or redistribute the components themselves-whether alone, in a bundle, or as a ported version.**

## No Warranty

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
