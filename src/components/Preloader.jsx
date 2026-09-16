import { useEffect, useState } from 'react';
import { CONFIG } from '../data/content';
import { useReducedMotion } from '../hooks/useMediaQuery';

export default function Preloader({ onDone }) {
  const reduced = useReducedMotion();
  const [hiding, setHiding] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const wait = reduced ? 0 : 1250;
    const t1 = setTimeout(() => {
      setHiding(true);
      onDone?.();
    }, wait);
    const t2 = setTimeout(() => setGone(true), wait + 800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [reduced, onDone]);

  if (gone) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[150] flex flex-col items-center justify-center gap-7 bg-ink transition-opacity duration-700 ${
        hiding ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex font-display text-[clamp(34px,7vw,62px)] text-cream">
        {[...CONFIG.name].map((ch, i) => (
          <span key={i} className="pre-letter" style={{ animationDelay: `${i * 55}ms` }}>
            {ch}
          </span>
        ))}
      </div>
      <div className="h-px w-[min(220px,40vw)] overflow-hidden bg-cream/20">
        <i className="pre-bar block h-full w-full bg-cream" />
      </div>
    </div>
  );
}
