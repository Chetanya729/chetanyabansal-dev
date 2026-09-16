import { useEffect, useRef } from 'react';
import { useFinePointer, useReducedMotion } from '../hooks/useMediaQuery';

/** Custom cursor plus the warm glow that trails the pointer. Desktop only. */
export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const glow = useRef(null);
  const fine = useFinePointer();
  const reduced = useReducedMotion();
  const enabled = fine && !reduced;

  useEffect(() => {
    if (!enabled) return;
    document.body.classList.add('cursor-on');

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let frame;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${mx}px, ${my}px)`;
      if (glow.current) {
        glow.current.style.setProperty('--gx', `${mx}px`);
        glow.current.style.setProperty('--gy', `${my}px`);
      }
    };

    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`;
      frame = requestAnimationFrame(loop);
    };

    const hot = (on) => (e) => {
      if (e.target.closest('a, button, [data-hot]')) {
        ring.current?.classList.toggle('is-hot', on);
      }
    };
    const onOver = hot(true);
    const onOut = hot(false);

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    loop();

    return () => {
      document.body.classList.remove('cursor-on');
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={glow} className="glow" aria-hidden="true" />
      <div ref={dot} className="cur" aria-hidden="true" />
      <div ref={ring} className="cur-ring" aria-hidden="true" />
    </>
  );
}
