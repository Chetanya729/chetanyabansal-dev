import { ArrowUpRight, Mail } from 'lucide-react';
import { CONFIG } from '../data/content';
import Button from './ui/Button';
import Reveal from './ui/Reveal';

export default function Hero({ ready }) {
  return (
    <section
      id="top"
      className={`relative flex min-h-[92svh] items-center overflow-hidden py-[118px] md:min-h-svh md:py-[120px] ${
        ready ? 'is-ready' : ''
      }`}
    >
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-fade" aria-hidden="true" />

      <div className="relative z-[2] mx-auto grid w-full max-w-[1240px] grid-cols-1 items-start gap-11 px-[clamp(20px,5vw,88px)] lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-15">
        <div>
          <p className="m-0 mb-6 flex items-center gap-3 text-[12.5px] tracking-[0.2em] text-cream/40">
            <span className="h-px w-8 flex-none bg-ember" aria-hidden="true" />
            {CONFIG.role}
          </p>

          <h1
            className="m-0 flex flex-wrap font-display text-[clamp(54px,15.5vw,200px)] font-normal leading-[0.86] tracking-[-0.015em] text-cream"
            aria-label={CONFIG.name}
          >
            {[...CONFIG.name].map((ch, i) => (
              <span
                key={i}
                aria-hidden="true"
                className="name-letter"
                style={{ transitionDelay: `${i * 55 + 100}ms` }}
              >
                {ch}
              </span>
            ))}
          </h1>

          <Reveal as="p" delay={7} className="m-0 mt-7 max-w-[24ch] font-display text-[clamp(19px,2.5vw,29px)] italic leading-[1.3] text-cream/60">
            Building things with code, curiosity &amp; caffeine-grade patience.
          </Reveal>

          <Reveal as="p" delay={8} className="m-0 mt-5 max-w-[46ch] text-cream/60">
            Two years of Spring Boot work, from internship to full-time: REST APIs, entity
            models that stay clean as they grow, and the messaging and caching layers underneath.
          </Reveal>

          <Reveal delay={9} className="mt-9 flex flex-wrap gap-3">
            <Button href={CONFIG.linkedin} icon={ArrowUpRight} solid external>LinkedIn</Button>
            <Button href={CONFIG.github} icon={ArrowUpRight} external>GitHub</Button>
            <Button href={CONFIG.mailto} icon={Mail}>Email</Button>
          </Reveal>
        </div>

        <Reveal
          as="aside"
          delay={10}
          aria-label="Quick facts"
          className="w-full border border-cream/10 bg-[rgba(31,21,12,0.45)] px-6 py-5 backdrop-blur-md lg:w-auto lg:min-w-[270px]"
        >
          <div className="mb-4 flex items-center gap-2 text-[11px] tracking-[0.18em] text-cream/40">
            <span className="pulse h-1.5 w-1.5 flex-none rounded-full bg-[#8FA06B]" aria-hidden="true" />
            OPEN TO BACKEND ROLES
          </div>
          <dl className="m-0 grid grid-cols-[auto_1fr] gap-x-5 gap-y-2.5 text-[13.5px]">
            <dt className="text-cream/40">Stack</dt><dd className="m-0 text-right text-cream">Java · Spring Boot</dd>
            <dt className="text-cream/40">Data</dt><dd className="m-0 text-right text-cream">MySQL · MongoDB</dd>
            <dt className="text-cream/40">Scale</dt><dd className="m-0 text-right text-cream">Kafka · Redis</dd>
            <dt className="text-cream/40">Base</dt><dd className="m-0 text-right text-cream">Gurugram, IN</dd>
          </dl>
        </Reveal>
      </div>

      <div
        className="absolute bottom-8 left-[clamp(20px,5vw,88px)] z-[3] hidden items-center gap-3 text-[11px] tracking-[0.2em] text-cream/40 md:flex"
        aria-hidden="true"
      >
        <span className="tube" />
        SCROLL
      </div>
    </section>
  );
}
