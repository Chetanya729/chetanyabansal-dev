import { ArrowUpRight, Mail } from 'lucide-react';
import { CONFIG } from '../data/content';
import Section from './ui/Section';
import Reveal from './ui/Reveal';
import Button from './ui/Button';

export default function Contact() {
  return (
    <Section id="contact">
      <Reveal as="h2" className="m-0 max-w-[16ch] font-display text-[clamp(34px,6.4vw,78px)] font-normal leading-[1.02] tracking-[-0.01em] text-cream">
        Have an opportunity, an idea, or a backend that needs untangling?{' '}
        <span className="italic text-cream/60">Let&apos;s talk.</span>
      </Reveal>

      <Reveal
        as="a"
        delay={1}
        href={CONFIG.mailto}
        className="mt-7 inline-block border-b border-cream/20 pb-1 text-[clamp(15px,2vw,19px)] text-cream/60 transition-colors duration-300 hover:border-cream hover:text-cream"
      >
        {CONFIG.email}
      </Reveal>

      <Reveal delay={2} className="mt-9 flex flex-wrap gap-3">
        <Button href={CONFIG.mailto} icon={Mail} solid>Email me</Button>
        <Button href={CONFIG.linkedin} icon={ArrowUpRight} external>LinkedIn</Button>
        <Button href={CONFIG.github} icon={ArrowUpRight} external>GitHub</Button>
      </Reveal>
    </Section>
  );
}
