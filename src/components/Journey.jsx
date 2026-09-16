import { useEffect, useRef, useState } from 'react';
import { JOURNEY } from '../data/content';
import Section from './ui/Section';
import SectionHead from './ui/SectionHead';
import Reveal from './ui/Reveal';

export default function Journey() {
  const listRef = useRef(null);
  const [fill, setFill] = useState(0);

  useEffect(() => {
    let ticking = false;

    const read = () => {
      const el = listRef.current;
      if (el) {
        const r = el.getBoundingClientRect();
        const p = (window.innerHeight * 0.72 - r.top) / r.height;
        setFill(Math.min(1, Math.max(0, p)));
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) { ticking = true; requestAnimationFrame(read); }
    };

    read();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <Section id="journey">
      <SectionHead index="04" title="Journey" />

      <div ref={listRef} className="relative pl-[clamp(26px,4vw,46px)]">
        <span className="absolute bottom-1.5 left-0 top-1.5 w-px bg-cream/10" aria-hidden="true" />
        <span
          className="absolute bottom-1.5 left-0 top-1.5 w-px origin-top bg-cream/40 transition-transform duration-150 ease-linear"
          style={{ transform: `scaleY(${fill})` }}
          aria-hidden="true"
        />

        {JOURNEY.map((item, i) => (
          <Reveal
            as="article"
            key={item.role + item.org}
            delay={i}
            className="tnode relative pb-11 last:pb-0 "
          >
            {item.period && (
              <div className="mb-2 text-[11.5px] tracking-[0.16em] text-cream/40">{item.period}</div>
            )}
            <h3 className="m-0 mb-1 font-display text-[clamp(21px,2.6vw,28px)] font-normal text-cream">
              {item.role}
            </h3>
            <p className="m-0 mb-3 text-[13.5px] text-cream/60">{item.org}</p>
            <p className="m-0 max-w-[60ch] text-[15px] text-cream/60">{item.text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
