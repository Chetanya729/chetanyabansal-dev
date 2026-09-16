import { useEffect, useState } from 'react';
import { CONFIG, SECTIONS } from '../data/content';
import { useScrollProgress } from '../hooks/useScrollProgress';

const NAV = SECTIONS.filter((s) => s.nav);

export default function Navbar({ active }) {
  const { scrolled } = useScrollProgress();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('is-locked', open);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('is-locked');
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[80] flex items-center justify-between border-b px-[clamp(20px,5vw,88px)] transition-all duration-[400ms] ${
          scrolled
            ? 'border-cream/10 bg-[rgba(10,7,4,0.62)] py-3 backdrop-blur-xl backdrop-saturate-150'
            : 'border-transparent py-5'
        }`}
      >
        <a href="#top" className="brandline font-display text-[23px] text-cream">
          {CONFIG.name}
        </a>

        <nav className="hidden items-center gap-1.5 md:flex" aria-label="Primary">
          {NAV.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`navlink px-3.5 py-2 text-[13.5px] tracking-[0.04em] transition-colors duration-300 ${
                active === s.id ? 'is-active text-cream' : 'text-cream/40 hover:text-cream'
              }`}
              aria-current={active === s.id ? 'true' : undefined}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="relative z-[110] h-10 w-10 md:hidden"
        >
          <span
            className={`absolute left-2.5 h-px w-5 bg-cream transition-transform duration-[400ms] ${
              open ? 'top-[19px] rotate-45' : 'top-4'
            }`}
          />
          <span
            className={`absolute left-2.5 h-px w-5 bg-cream transition-transform duration-[400ms] ${
              open ? 'top-[19px] -rotate-45' : 'top-[22px]'
            }`}
          />
        </button>
      </header>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`fixed inset-0 z-[100] flex flex-col justify-center gap-1 bg-[rgba(5,3,2,0.96)] px-[clamp(20px,5vw,88px)] backdrop-blur-xl transition-all duration-[450ms] md:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        {NAV.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? `${i * 60}ms` : '0ms' }}
            className={`border-b border-cream/10 py-2 font-display text-[clamp(34px,10vw,54px)] text-cream transition-all duration-500 ${
              open ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}
          >
            {s.label}
          </a>
        ))}

        <div className="mt-9 flex gap-6 text-[13px] text-cream/40">
          <a href={CONFIG.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={CONFIG.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={CONFIG.mailto}>Email</a>
        </div>
      </div>
    </>
  );
}
