import { useEffect, useMemo, useRef, useCallback } from 'react';
import { useGesture } from '@use-gesture/react';
import './DomeGallery.css';

interface ImageItem { src: string; alt?: string; }
interface DomeGalleryProps {
  images?: (string | ImageItem)[];
  fit?: number;
  minRadius?: number;
  maxRadius?: number;
  overlayBlurColor?: string;
  segments?: number;
  dragDampening?: number;
  grayscale?: boolean;
}

const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);
const wrapAngleSigned = (deg: number) => { const a = (((deg + 180) % 360) + 360) % 360; return a - 180; };

function buildItems(pool: (string | ImageItem)[], seg: number) {
  const xCols = Array.from({ length: seg }, (_, i) => -37 + i * 2);
  const evenYs = [-4, -2, 0, 2, 4];
  const oddYs = [-3, -1, 1, 3, 5];
  const coords = xCols.flatMap((x, c) => (c % 2 === 0 ? evenYs : oddYs).map((y) => ({ x, y, sizeX: 2, sizeY: 2 })));
  if (pool.length === 0) return coords.map((c) => ({ ...c, src: '', alt: '' }));
  const normalized = pool.map((img) => typeof img === 'string' ? { src: img, alt: '' } : { src: img.src || '', alt: img.alt || '' });
  const used = Array.from({ length: coords.length }, (_, i) => normalized[i % normalized.length]);
  return coords.map((c, i) => ({ ...c, src: used[i].src, alt: used[i].alt }));
}
export default function DomeGallery({ images = [], fit = 0.5, minRadius = 600, maxRadius = Infinity, overlayBlurColor = '#0a0a0a', segments = 35, dragDampening = 2, grayscale = false }: DomeGalleryProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const sphereRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef({ x: 0, y: 0 });
  const startRotRef = useRef({ x: 0, y: 0 });
  const startPosRef = useRef<{ x: number; y: number } | null>(null);
  const draggingRef = useRef(false);
  const inertiaRAF = useRef<number | null>(null);
  const items = useMemo(() => buildItems(images, segments), [images, segments]);

  const applyTransform = (xDeg: number, yDeg: number) => {
    if (sphereRef.current) sphereRef.current.style.transform = `translateZ(calc(var(--radius) * -1)) rotateX(${xDeg}deg) rotateY(${yDeg}deg)`;
  };

  const stopInertia = useCallback(() => { if (inertiaRAF.current) { cancelAnimationFrame(inertiaRAF.current); inertiaRAF.current = null; } }, []);

  const startInertia = useCallback((vx: number, vy: number) => {
    let vX = clamp(vx, -1.4, 1.4) * 80, vY = clamp(vy, -1.4, 1.4) * 80, frames = 0;
    const frictionMul = 0.94 + 0.055 * clamp(dragDampening, 0, 1);
    const step = () => {
      vX *= frictionMul; vY *= frictionMul;
      if ((Math.abs(vX) < 0.01 && Math.abs(vY) < 0.01) || ++frames > 200) { inertiaRAF.current = null; return; }
      const nextX = clamp(rotationRef.current.x - vY / 200, -5, 5);
      const nextY = wrapAngleSigned(rotationRef.current.y + vX / 200);
      rotationRef.current = { x: nextX, y: nextY };
      applyTransform(nextX, nextY);
      inertiaRAF.current = requestAnimationFrame(step);
    };
    stopInertia();
    inertiaRAF.current = requestAnimationFrame(step);
  }, [dragDampening, stopInertia]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const ro = new ResizeObserver((entries) => {
      const { width: w, height: h } = entries[0].contentRect;
      let radius = clamp(Math.min(w, h) * fit, minRadius, maxRadius);
      radius = Math.min(radius, h * 1.35);
      root.style.setProperty('--radius', Math.round(radius) + 'px');
      root.style.setProperty('--overlay-blur-color', overlayBlurColor);
      root.style.setProperty('--image-filter', grayscale ? 'grayscale(1)' : 'none');
      applyTransform(rotationRef.current.x, rotationRef.current.y);
    });
    ro.observe(root);
    return () => ro.disconnect();
  }, [fit, minRadius, maxRadius, overlayBlurColor, grayscale]);

  useEffect(() => { applyTransform(0, 0); }, []);

  useGesture({
    onDragStart: ({ event }) => { stopInertia(); const e = event as MouseEvent; draggingRef.current = true; startRotRef.current = { ...rotationRef.current }; startPosRef.current = { x: e.clientX, y: e.clientY }; },
    onDrag: ({ event, last, velocity = [0, 0], direction = [0, 0] }) => {
      if (!draggingRef.current || !startPosRef.current) return;
      const e = event as MouseEvent;
      const dx = e.clientX - startPosRef.current.x, dy = e.clientY - startPosRef.current.y;
      const nextX = clamp(startRotRef.current.x - dy / 20, -5, 5);
      const nextY = wrapAngleSigned(startRotRef.current.y + dx / 20);
      rotationRef.current = { x: nextX, y: nextY };
      applyTransform(nextX, nextY);
      if (last) { draggingRef.current = false; const vx = velocity[0] * direction[0], vy = velocity[1] * direction[1]; if (Math.abs(vx) > 0.005 || Math.abs(vy) > 0.005) startInertia(vx, vy); }
    },
  }, { target: mainRef, eventOptions: { passive: true } });

  return (
    <div ref={rootRef} className="sphere-root" style={{ '--segments-x': segments, '--segments-y': segments } as React.CSSProperties}>
      <main ref={mainRef} className="sphere-main">
        <div className="stage">
          <div ref={sphereRef} className="sphere">
            {items.map((it, i) => (
              <div key={i} className="item" style={{ '--offset-x': it.x, '--offset-y': it.y, '--item-size-x': it.sizeX, '--item-size-y': it.sizeY } as React.CSSProperties}>
                <div className="item__image"><img src={it.src} draggable={false} alt={it.alt} /></div>
              </div>
            ))}
          </div>
        </div>
        <div className="overlay" />
        <div className="overlay overlay--blur" />
        <div className="edge-fade edge-fade--top" />
        <div className="edge-fade edge-fade--bottom" />
      </main>
    </div>
  );
}
