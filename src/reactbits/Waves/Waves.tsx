'use client';

import React, { useRef, useEffect, type CSSProperties } from 'react';
import './Waves.css';
import { MAX_NOISE_PERIOD, Noise, NOISE_SCALE, noisePeriod } from './noise.ts';

interface Point {
  x: number;
  y: number;
  wave: { x: number; y: number };
  cursor: { x: number; y: number; vx: number; vy: number };
}

interface Mouse {
  x: number;
  y: number;
  lx: number;
  ly: number;
  sx: number;
  sy: number;
  v: number;
  vs: number;
  a: number;
  set: boolean;
}

interface Displacement {
  x: ArrayLike<number>;
  y: ArrayLike<number>;
}

// A getter is called once per frame, so the color can change without re-rendering.
type LineColor = string | (() => string);

interface Config {
  lineColor: LineColor;
  waveSpeedX: number;
  waveSpeedY: number;
  waveAmpX: number;
  waveAmpY: number;
  friction: number;
  tension: number;
  maxCursorMove: number;
  xGap: number;
  yGap: number;
  overscanX: number;
  overscanY: number;
}

type Motion = Pick<
  Config,
  'waveSpeedX' | 'waveSpeedY' | 'waveAmpX' | 'waveAmpY' | 'friction' | 'tension' | 'maxCursorMove'
>;

interface WavesProps {
  lineColor?: LineColor;
  // Like a lineColor getter: called once per frame, and what it returns
  // overrides the matching props, so the pattern can change continuously.
  motion?: () => Motion;
  // Replaces the mousemove/touchmove listeners: called once per frame, it
  // returns the pointer in client coordinates, or null when there is none to
  // follow, which settles the ripples as when the pointer leaves.
  pointer?: () => { x: number; y: number } | null;
  // Called once per frame after the points move, with the grid (each line's
  // points, in container coordinates, with this frame's wave offset) and the
  // frame time. It returns an extra offset for every point, indexed
  // line × points per line + point, or null for none.
  displacement?: (lines: readonly (readonly Point[])[], time: number) => Displacement | null;
  // Called once per frame before the noise is read, with the grid and the
  // frame time. It returns, for every point (indexed as for displacement),
  // where in the pattern the point reads the noise, in pixels, instead of
  // its own place; or null for its own place.
  sample?: (lines: readonly (readonly Point[])[], time: number) => Displacement | null;
  // The pattern repeats every this many pixels across and down; each must be
  // a whole number of noise cells (1 / 0.002 px across, 1 / 0.0015 px down).
  patternPeriod?: { x: number; y: number };
  backgroundColor?: string;
  waveSpeedX?: number;
  waveSpeedY?: number;
  waveAmpX?: number;
  waveAmpY?: number;
  xGap?: number;
  yGap?: number;
  // Extra lines this many pixels beyond each side, for a displacement that
  // shifts the lines sideways further than the 100 px the grid already has.
  overscanX?: number;
  // Likewise above and below, beyond the 15 px the grid already has.
  overscanY?: number;
  friction?: number;
  tension?: number;
  maxCursorMove?: number;
  // Draws one more frame and stops the loop; every re-render draws one frame.
  paused?: boolean;
  style?: CSSProperties;
  className?: string;
}

const Waves: React.FC<WavesProps> = ({
  lineColor = 'black',
  backgroundColor = 'transparent',
  waveSpeedX = 0.0125,
  waveSpeedY = 0.005,
  waveAmpX = 32,
  waveAmpY = 16,
  xGap = 10,
  yGap = 32,
  overscanX = 0,
  overscanY = 0,
  friction = 0.925,
  tension = 0.005,
  maxCursorMove = 100,
  motion,
  pointer,
  displacement,
  sample,
  patternPeriod,
  paused = false,
  style = {},
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const boundingRef = useRef<{
    width: number;
    height: number;
    left: number;
    top: number;
  }>({
    width: 0,
    height: 0,
    left: 0,
    top: 0
  });
  const noiseRef = useRef(new Noise(Math.random()));
  const linesRef = useRef<Point[][]>([]);
  const mouseRef = useRef<Mouse>({
    x: -10,
    y: 0,
    lx: 0,
    ly: 0,
    sx: 0,
    sy: 0,
    v: 0,
    vs: 0,
    a: 0,
    set: false
  });
  const configRef = useRef<Config>({
    lineColor,
    waveSpeedX,
    waveSpeedY,
    waveAmpX,
    waveAmpY,
    friction,
    tension,
    maxCursorMove,
    xGap,
    yGap,
    overscanX,
    overscanY
  });
  const motionRef = useRef(motion);
  const pointerRef = useRef(pointer);
  const displacementRef = useRef(displacement);
  const sampleRef = useRef(sample);
  const periodX = patternPeriod ? noisePeriod(patternPeriod.x, NOISE_SCALE.x) : MAX_NOISE_PERIOD;
  const periodY = patternPeriod ? noisePeriod(patternPeriod.y, NOISE_SCALE.y) : MAX_NOISE_PERIOD;
  const periodRef = useRef({ x: periodX, y: periodY });
  const frameIdRef = useRef<number | null>(null);
  const pausedRef = useRef(paused);
  const requestFrameRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    motionRef.current = motion;
  }, [motion]);

  useEffect(() => {
    pointerRef.current = pointer;
  }, [pointer]);

  useEffect(() => {
    displacementRef.current = displacement;
  }, [displacement]);

  useEffect(() => {
    sampleRef.current = sample;
  }, [sample]);

  useEffect(() => {
    periodRef.current = { x: periodX, y: periodY };
  }, [periodX, periodY]);

  useEffect(() => {
    pausedRef.current = paused;
    requestFrameRef.current?.();
  });

  useEffect(() => {
    configRef.current = {
      lineColor,
      waveSpeedX,
      waveSpeedY,
      waveAmpX,
      waveAmpY,
      friction,
      tension,
      maxCursorMove,
      xGap,
      yGap,
      overscanX,
      overscanY
    };
  }, [lineColor, waveSpeedX, waveSpeedY, waveAmpX, waveAmpY, friction, tension, maxCursorMove, xGap, yGap, overscanX, overscanY]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    ctxRef.current = canvas.getContext('2d');

    function setSize() {
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      boundingRef.current = {
        width: rect.width,
        height: rect.height,
        left: rect.left,
        top: rect.top
      };
      canvas.width = rect.width;
      canvas.height = rect.height;
    }

    function setLines() {
      const { width, height } = boundingRef.current;
      linesRef.current = [];
      const { xGap, yGap, overscanX, overscanY } = configRef.current;
      const oWidth = width + 200 + 2 * overscanX,
        oHeight = height + 30 + 2 * overscanY;
      const totalLines = Math.ceil(oWidth / xGap);
      const totalPoints = Math.ceil(oHeight / yGap);
      const xStart = (width - xGap * totalLines) / 2;
      const yStart = (height - yGap * totalPoints) / 2;
      for (let i = 0; i <= totalLines; i++) {
        const pts: Point[] = [];
        for (let j = 0; j <= totalPoints; j++) {
          pts.push({
            x: xStart + xGap * i,
            y: yStart + yGap * j,
            wave: { x: 0, y: 0 },
            cursor: { x: 0, y: 0, vx: 0, vy: 0 }
          });
        }
        linesRef.current.push(pts);
      }
    }

    // The noise offset is accumulated frame by frame rather than computed as
    // time × speed, so a speed change alters how fast the pattern flows from
    // here on instead of jumping it to a different place in the noise.
    const phase = { x: 0, y: 0, last: null as number | null };
    // A longer gap (a paused, off-screen loop) counts as this long.
    const MAX_FRAME_MS = 100;
    // This frame's extra offsets from the displacement getter.
    let shift: Displacement | null = null;

    function movePoints(time: number) {
      const lines = linesRef.current;
      const mouse = mouseRef.current;
      const noise = noiseRef.current;
      const { waveSpeedX, waveSpeedY, waveAmpX, waveAmpY, friction, tension, maxCursorMove } = {
        ...configRef.current,
        ...motionRef.current?.()
      };
      const frameMs = phase.last === null ? 0 : Math.min(MAX_FRAME_MS, Math.max(0, time - phase.last));
      phase.last = time;
      phase.x += frameMs * waveSpeedX;
      phase.y += frameMs * waveSpeedY;
      const at = sampleRef.current ? sampleRef.current(lines, time) : null;
      const count = lines.length * (lines.length > 0 ? lines[0].length : 0);
      if (at && (at.x.length !== count || at.y.length !== count)) {
        throw new Error(`Waves: ${at.x.length} sample points for ${count} grid points`);
      }
      const period = periodRef.current;
      lines.forEach((pts, line) => {
        pts.forEach((p, idx) => {
          const k = line * pts.length + idx;
          const sx = at ? at.x[k] : p.x,
            sy = at ? at.y[k] : p.y;
          const move =
            noise.perlin2((sx + phase.x) * NOISE_SCALE.x, (sy + phase.y) * NOISE_SCALE.y, period.x, period.y) * 12;
          p.wave.x = Math.cos(move) * waveAmpX;
          p.wave.y = Math.sin(move) * waveAmpY;

          const dx = p.x - mouse.sx,
            dy = p.y - mouse.sy;
          const dist = Math.hypot(dx, dy);
          const l = Math.max(175, mouse.vs);
          if (dist < l) {
            const s = 1 - dist / l;
            const f = Math.cos(dist * 0.001) * s;
            p.cursor.vx += Math.cos(mouse.a) * f * l * mouse.vs * 0.00065;
            p.cursor.vy += Math.sin(mouse.a) * f * l * mouse.vs * 0.00065;
          }

          p.cursor.vx += (0 - p.cursor.x) * tension;
          p.cursor.vy += (0 - p.cursor.y) * tension;
          p.cursor.vx *= friction;
          p.cursor.vy *= friction;
          p.cursor.x += p.cursor.vx * 2;
          p.cursor.y += p.cursor.vy * 2;
          p.cursor.x = Math.min(maxCursorMove, Math.max(-maxCursorMove, p.cursor.x));
          p.cursor.y = Math.min(maxCursorMove, Math.max(-maxCursorMove, p.cursor.y));
        });
      });
      shift = displacementRef.current ? displacementRef.current(lines, time) : null;
    }

    function moved(point: Point, withCursor = true, index = -1): { x: number; y: number } {
      const shiftX = withCursor && shift && index >= 0 ? shift.x[index] : 0;
      const shiftY = withCursor && shift && index >= 0 ? shift.y[index] : 0;
      const x = point.x + point.wave.x + (withCursor ? point.cursor.x : 0) + shiftX;
      const y = point.y + point.wave.y + (withCursor ? point.cursor.y : 0) + shiftY;
      return { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 };
    }

    function drawLines() {
      const { width, height } = boundingRef.current;
      const ctx = ctxRef.current;
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      ctx.beginPath();
      const { lineColor } = configRef.current;
      ctx.strokeStyle = typeof lineColor === 'function' ? lineColor() : lineColor;
      linesRef.current.forEach((points, line) => {
        let p1 = moved(points[0], false);
        ctx.moveTo(p1.x, p1.y);
        points.forEach((p, idx) => {
          const isLast = idx === points.length - 1;
          p1 = moved(p, !isLast, line * points.length + idx);
          const p2 = moved(points[idx + 1] || points[points.length - 1], !isLast);
          ctx.lineTo(p1.x, p1.y);
          if (isLast) ctx.moveTo(p2.x, p2.y);
        });
      });
      ctx.stroke();
    }

    function tick(t: number) {
      if (!container) return;
      const mouse = mouseRef.current;
      if (pointerRef.current) {
        const point = pointerRef.current();
        // The next pointer starts afresh where it is, not with a jump from here.
        if (point) updateMouse(point.x, point.y);
        else mouse.set = false;
      }
      mouse.sx +=(mouse.x - mouse.sx) * 0.1;
      mouse.sy += (mouse.y - mouse.sy) * 0.1;
      const dx = mouse.x - mouse.lx,
        dy = mouse.y - mouse.ly;
      const d = Math.hypot(dx, dy);
      mouse.v = d;
      mouse.vs += (d - mouse.vs) * 0.1;
      mouse.vs = Math.min(100, mouse.vs);
      mouse.lx = mouse.x;
      mouse.ly = mouse.y;
      mouse.a = Math.atan2(dy, dx);
      container.style.setProperty('--x', `${mouse.sx}px`);
      container.style.setProperty('--y', `${mouse.sy}px`);

      movePoints(t);
      drawLines();
      frameIdRef.current = pausedRef.current ? null : requestAnimationFrame(tick);
      // The next frame after a pause counts as the first, not as a long one.
      if (pausedRef.current) phase.last = null;
    }

    function onResize() {
      setSize();
      setLines();
      // Resizing clears the canvas, which a paused loop would leave blank.
      requestFrameRef.current?.();
    }
    function onMouseMove(e: MouseEvent) {
      updateMouse(e.clientX, e.clientY);
    }
    function onTouchMove(e: TouchEvent) {
      const touch = e.touches[0];
      updateMouse(touch.clientX, touch.clientY);
    }
    function updateMouse(x: number, y: number) {
      if (!container) return;
      const mouse = mouseRef.current;
      // Read the rect here rather than the one cached on resize: the cached
      // left/top go stale as soon as the page scrolls.
      const rect = container.getBoundingClientRect();
      mouse.x = x - rect.left;
      mouse.y = y - rect.top;
      if (!mouse.set) {
        mouse.sx = mouse.x;
        mouse.sy = mouse.y;
        mouse.lx = mouse.x;
        mouse.ly = mouse.y;
        mouse.set = true;
      }
    }

    // Run the loop and pointer listeners only while the waves are on screen.
    let running = false;
    requestFrameRef.current = () => {
      if (running && frameIdRef.current === null) frameIdRef.current = requestAnimationFrame(tick);
    };
    function start() {
      if (running) return;
      running = true;
      frameIdRef.current = requestAnimationFrame(tick);
      if (pointerRef.current) return;
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('touchmove', onTouchMove, { passive: false });
    }
    function stop() {
      if (!running) return;
      running = false;
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      if (frameIdRef.current !== null) {
        cancelAnimationFrame(frameIdRef.current);
        frameIdRef.current = null;
      }
    }
    const observer = new IntersectionObserver(entries => {
      if (entries[entries.length - 1].isIntersecting) start();
      else stop();
    });

    setSize();
    setLines();
    observer.observe(container);
    window.addEventListener('resize', onResize);

    return () => {
      requestFrameRef.current = null;
      observer.disconnect();
      window.removeEventListener('resize', onResize);
      stop();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`waves ${className}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        margin: 0,
        padding: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundColor,
        ...style
      }}
    >
      <canvas ref={canvasRef} className="waves-canvas" />
    </div>
  );
};

export default Waves;
