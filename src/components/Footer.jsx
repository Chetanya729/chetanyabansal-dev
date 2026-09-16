import { CONFIG } from '../data/content';

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-[#040302] pb-11 pt-9">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-start justify-between gap-6 px-[clamp(20px,5vw,88px)] sm:items-end">
        <div>
          <div className="font-display text-[26px] leading-none text-cream">{CONFIG.name}</div>
          <div className="mt-2 font-display text-[14.5px] italic text-cream/40">
            Built with curiosity &amp; code.
          </div>
        </div>

        <div className="flex gap-6 text-[13px]">
          <a className="text-cream/60 transition-colors duration-300 hover:text-cream" href={CONFIG.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="text-cream/60 transition-colors duration-300 hover:text-cream" href={CONFIG.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="text-cream/60 transition-colors duration-300 hover:text-cream" href={CONFIG.mailto}>Email</a>
        </div>

        <div className="mt-6 w-full border-t border-cream/[0.06] pt-4 text-[11.5px] tracking-[0.08em] text-cream/25">
          © {new Date().getFullYear()} {CONFIG.fullName}. Designed and built in Gurugram.
        </div>
      </div>
    </footer>
  );
}
