import Reveal from './Reveal';

export default function SectionHead({ index, title }) {
  return (
    <Reveal className="mb-11 flex flex-wrap items-baseline gap-x-5 gap-y-2">
      <span className="pb-1.5 text-xs tracking-[0.18em] text-cream/40">{index}</span>
      <h2 className="m-0 font-display text-[clamp(30px,4.6vw,52px)] font-normal leading-[1.05] text-cream">
        {title}
      </h2>
    </Reveal>
  );
}
