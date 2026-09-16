import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/content';
import Section from './ui/Section';
import SectionHead from './ui/SectionHead';
import Reveal from './ui/Reveal';
import ProjectModal from './ProjectModal';
import { useSpotlight } from '../hooks/useSpotlight';

function ProjectCard({ project, index, onOpen }) {
  const ref = useSpotlight({ drift: 7 });

  return (
    <Reveal delay={index}>
      <article
        ref={ref}
        onClick={() => onOpen(project)}
        className="spot group grid cursor-pointer grid-cols-[auto_1fr] items-start gap-x-4 gap-y-3.5 border border-cream/10 bg-[linear-gradient(140deg,rgba(31,21,12,0.55),rgba(0,0,0,0.2))] px-[clamp(20px,3vw,34px)] py-[clamp(24px,3.4vw,38px)] transition-[border-color,transform] duration-[450ms] hover:border-ember focus-within:border-ember md:grid-cols-[auto_1fr_auto] md:items-center md:gap-[clamp(18px,3vw,44px)]"
      >
        <span className="relative text-[11px] tracking-[0.16em] text-cream/40 md:self-start md:pt-1.5">
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className="relative">
          <h3 className="m-0 mb-2 font-display text-[clamp(24px,3.1vw,34px)] font-normal leading-[1.14] text-cream">
            {project.name}
          </h3>
          <p className="m-0 max-w-[62ch] text-[14.5px] text-cream/60 md:text-[15px]">
            {project.blurb}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((t, i) => (
              <span
                key={t}
                style={{ transitionDelay: `${i * 40}ms` }}
                className="border border-cream/10 px-2.5 py-1 text-[11.5px] tracking-[0.04em] text-cream/40 transition-[transform,color,border-color] duration-[450ms] group-hover:-translate-y-0.5 group-hover:border-cream/20 group-hover:text-cream/60"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={(e) => { e.stopPropagation(); onOpen(project); }}
          aria-haspopup="dialog"
          aria-label={`Open details for ${project.name}`}
          className="relative col-start-2 mt-0.5 flex h-[42px] w-[42px] flex-none items-center justify-center border border-cream/10 text-cream/40 transition-[background-color,color,border-color,transform] duration-[400ms] group-hover:rotate-45 group-hover:border-cream group-hover:bg-cream group-hover:text-ink focus-visible:rotate-45 focus-visible:border-cream focus-visible:bg-cream focus-visible:text-ink md:col-start-3 md:mt-0 md:h-[46px] md:w-[46px]"
        >
          <ArrowUpRight size={16} strokeWidth={1.6} aria-hidden="true" />
        </button>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  const [open, setOpen] = useState(null);

  return (
    <Section id="projects" dark>
      <SectionHead index="03" title="Selected work" />

      <Reveal as="p" delay={1} className="mb-11 max-w-[56ch] text-[16.5px] text-cream/60">
        Backend projects built to learn a specific thing properly. Open one for detail.
      </Reveal>

      <div className="grid gap-[18px]">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} onOpen={setOpen} />
        ))}
      </div>

      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </Section>
  );
}
