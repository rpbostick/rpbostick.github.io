# Waves: changes from React Bits

`Waves.tsx` and `Waves.css` are React Bits' `src/ts-default/Backgrounds/Waves/` (https://github.com/DavidHDev/react-bits) at commit `4d6a46d3f401736695c495f1e72ed429e0ed1b93`, with the changes below (profile `site`) applied by reactbits-kit 0.3.0. `rbx update` re-applies them; `rbx check` reports any edit since.

`noise.ts` is code moved out of `Waves.tsx` by 13-noise-module.

## Changes

1. **01-css-variable-fix** (`Waves.css`): The `::before` transform read `var(-0.5rem)` and `var(50%)`, which are invalid CSS and fail Vite's CSS minifier; they now read `var(--x, -0.5rem)` and `var(--y, 50%)`, the custom properties `Waves.tsx` sets.
2. **02-line-color-getter** (`Waves.tsx`): `lineColor` also accepts a function, called once per frame in `drawLines`, so the color can change continuously without re-rendering or re-initializing the waves.
3. **03-intersection-observer** (`Waves.tsx`): An `IntersectionObserver` on the container starts the animation loop and the `mousemove`/`touchmove` listeners when the waves are on screen and stops them when they are not. The `resize` listener stays attached throughout.
4. **04-pointer-position-fix** (`Waves.tsx`): `updateMouse` reads the container's `getBoundingClientRect()` on each move instead of the `left`/`top` cached on resize, which went stale once the page scrolled and put the ripples off the pointer.
5. **05-motion-getter** (`Waves.tsx`): A `motion` prop, a getter called once per frame in `movePoints`, whose `waveSpeedX`, `waveSpeedY`, `waveAmpX`, `waveAmpY`, `friction`, `tension` and `maxCursorMove` override the matching props, so the pattern can change continuously without re-rendering or re-initializing the waves.
6. **06-accumulated-clock** (`Waves.tsx`): The noise offset is accumulated each frame (frame time × speed, with a frame counted as at most 100 ms) instead of computed as `time * waveSpeedX` and `time * waveSpeedY`, so changing the speed changes how fast the pattern flows rather than jumping it elsewhere in the noise.
7. **07-paused-prop** (`Waves.tsx`): A `paused` prop. While it is true, the loop draws one more frame and stops; every re-render and every resize draws one frame, and turning it off starts the loop again. The frame after a pause counts as the first, so the pattern does not jump.
8. **08-pointer-getter** (`Waves.tsx`): A `pointer` prop, a getter called once per frame in `tick` that returns the pointer in client coordinates or null. When it is given, the `mousemove`/`touchmove` listeners of 03-intersection-observer are not attached and the waves follow only what the getter returns; a null resets the mouse's `set` flag, so the ripples settle as when the pointer leaves and the next pointer starts where it is instead of jumping from the last one.
9. **09-displacement-getter** (`Waves.tsx`): A `displacement` prop, a getter called once per frame at the end of `movePoints` with the grid of points (after this frame's wave offsets) and the frame time. It returns an `x` and a `y` offset for each point, indexed line × points per line + point, or null; `drawLines` adds them wherever it adds the cursor offset.
10. **10-overscan** (`Waves.tsx`): An `overscanX` prop (default 0) that widens the grid in `setLines` by that many pixels on each side, so a displacement can shift the lines sideways without the outermost ones coming into view, and an `overscanY` prop (default 0) that lengthens every line by that many pixels at each end, so a displacement can shift them up or down without their ends coming into view.
11. **13-noise-module** (`Waves.tsx`): The `Grad` and `Noise` classes moved unchanged to `Waves/noise.ts`, except that `perlin2` takes a lattice period across and down (default 256, which is the original `& 255` wrap), so the pattern can repeat seamlessly on a smaller period. The noise scales `0.002` and `0.0015` are `NOISE_SCALE` there; `noisePeriod` turns a period in pixels into lattice cells and throws unless it is a whole number of cells from 1 to 256.
12. **14-sample-getter** (`Waves.tsx`): A `sample` prop, a getter called once per frame at the start of `movePoints` with the grid and the frame time. It returns, for each point (indexed as for `displacement`), the pixel position the point reads the noise at instead of its own, or null; a result of the wrong length throws. A `patternPeriod` prop (`{ x, y }` in pixels) passes the noise period; it throws unless each is a whole number of noise cells from 1 to 256.

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
