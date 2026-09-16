import { useEffect, useRef } from 'react';
import { useFinePointer, useReducedMotion } from './useMediaQuery';

/**
 * Feeds pointer position into --mx / --my for the .spot gradient,
 * and optionally applies a small 3D tilt or parallax drift.
 */
export function useSpotlight({ tilt = false, drift = 0 } = {}) {
  const ref = useRef(null);
  const fine = useFinePointer();
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || !fine || reduced) return;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;

      el.style.setProperty('--mx', `${px * 100}%`);
      el.style.setProperty('--my', `${py * 100}%`);

      if (tilt) {
        el.style.transform =
          `perspective(900px) rotateY(${(px - 0.5) * 7}deg) rotateX(${(0.5 - py) * 7}deg)`;
      } else if (drift) {
        el.style.transform = `translate(${(px - 0.5) * drift}px, ${(py - 0.5) * drift * 0.7}px)`;
      }
    };
    const onLeave = () => { el.style.transform = ''; };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [fine, reduced, tilt, drift]);

  return ref;
}
