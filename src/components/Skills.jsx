import { SKILLS, LEARNING } from '../data/content';
import Section from './ui/Section';
import SectionHead from './ui/SectionHead';
import Reveal from './ui/Reveal';
import { useMagnetic } from '../hooks/useMagnetic';

function Chip({ label }) {
  const ref = useMagnetic(0.22);
  return (
    <span
      ref={ref}
      className="border border-cream/10 px-3 py-1.5 text-[12.5px] text-cream/60 transition-[transform,border-color,color,background-color] duration-300 hover:border-ember hover:bg-ember/35 hover:text-cream"
    >
      {label}
    </span>
  );
}

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHead index="02" title="What I work with" />

      <Reveal as="p" delay={1} className="max-w-[56ch] text-[16.5px] text-cream/60">
        Everything here is something I&apos;ve actually shipped with or studied in depth — no bars,
        no percentages.
      </Reveal>

      <Reveal delay={2} className="mt-11 grid grid-cols-1 gap-px border border-cream/10 bg-cream/10 sm:grid-cols-2 xl:grid-cols-4">
        {SKILLS.map((group) => (
          <div key={group.title} className="bg-ink px-6 pb-8 pt-7 transition-colors duration-500 hover:bg-[#0A0704]">
            <h4 className="m-0 mb-1 font-display text-[21px] font-normal text-cream">{group.title}</h4>
            <p className="m-0 mb-5 text-xs text-cream/40">{group.note}</p>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => <Chip key={item} label={item} />)}
            </div>
          </div>
        ))}
      </Reveal>

      <Reveal delay={3} className="mt-11 flex flex-wrap items-center gap-3.5 text-[13.5px] text-cream/60">
        <span className="text-[11px] tracking-[0.2em] text-cream/40">CURRENTLY LEARNING</span>
        {LEARNING.map((item) => <Chip key={item} label={item} />)}
      </Reveal>
    </Section>
  );
}
