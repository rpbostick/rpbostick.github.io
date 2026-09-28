Copied from React Bits (https://github.com/DavidHDev/react-bits, https://reactbits.dev): `Waves/Waves.tsx` and `Waves/Waves.css` (from `src/ts-default/Backgrounds/Waves/`). Changes from the original:

1. `Waves.css`: the `::before` transform read `var(-0.5rem)` and `var(50%)`, which are invalid CSS and fail Vite's CSS minifier; they now read `var(--x, -0.5rem)` and `var(--y, 50%)`, the custom properties `Waves.tsx` sets.
2. `Waves.tsx`: `lineColor` also accepts a function, called once per frame in `drawLines`, so the colour can change continuously without re-rendering or re-initialising the waves.
3. `Waves.tsx`: an `IntersectionObserver` on the container starts the animation loop and the `mousemove`/`touchmove` listeners when the waves are on screen and stops them when they are not. The `resize` listener stays attached throughout.
4. `Waves.tsx`: `updateMouse` reads the container's `getBoundingClientRect()` on each move instead of the `left`/`top` cached on resize, which went stale once the page scrolled and put the ripples off the pointer.
5. `Waves.tsx`: a `motion` prop, a getter called once per frame in `movePoints`, whose `waveSpeedX`, `waveSpeedY`, `waveAmpX`, `waveAmpY`, `friction`, `tension` and `maxCursorMove` override the matching props, so the pattern can change continuously without re-rendering or re-initialising the waves.
6. `Waves.tsx`: the noise offset is accumulated each frame (frame time × speed, with a frame counted as at most 100 ms) instead of computed as `time * waveSpeedX` and `time * waveSpeedY`, so changing the speed changes how fast the pattern flows rather than jumping it elsewhere in the noise.

The licence text below is React Bits' `LICENSE.md`, verbatim.

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
