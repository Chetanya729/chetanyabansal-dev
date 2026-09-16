import Section from './ui/Section';
import SectionHead from './ui/SectionHead';
import Reveal from './ui/Reveal';
import { useSpotlight } from '../hooks/useSpotlight';

const INTERESTS = [
  'REST API design',
  'Entity & DTO modelling',
  'Auth with JWT',
  'Event-driven services',
  'Caching strategy',
  'DSA in Java',
];

const FACTS = [
  ['Role', 'Java Developer, GreenChip Consulting'],
  ['Experience', '~2 years incl. internship'],
  ['Education', 'B.Tech CSE, UIET Kurukshetra'],
  ['Recognition', 'Smart India Hackathon — national winner'],
  ['Studying', 'JPA Criteria API · CCNA · Azure AZ-900'],
];

export default function About() {
  const card = useSpotlight({ tilt: true });

  return (
    <Section id="about" dark>
      <SectionHead index="01" title="About" />

      <div className="grid grid-cols-1 items-start gap-[clamp(30px,6vw,80px)] lg:grid-cols-[1.25fr_0.85fr]">
        <Reveal delay={1}>
          <h3 className="m-0 mb-6 max-w-[18ch] font-display text-[clamp(24px,3.2vw,36px)] font-normal leading-[1.18] text-cream">
            I work on the half of the product nobody sees.
          </h3>

          <p className="m-0 mb-4 max-w-[58ch]">
            I&apos;m a Computer Science &amp; Engineering graduate from UIET, Kurukshetra, now
            writing Java full-time at GreenChip Consulting in Gurugram — the same team I joined
            as an intern.
          </p>
          <p className="m-0 mb-4 max-w-[58ch]">
            Day to day that means Spring Boot services: REST endpoints, JPA entity design,
            Spring Security with JWT, and the Kafka and Redis layers that sit behind them. I care
            about the parts that decide whether a service survives its second year — mapping
            boundaries, transaction edges, cache invalidation, query shape.
          </p>
          <p className="m-0 max-w-[58ch]">
            Away from the ticket queue I keep a day-wise learning journal and rebuild the same
            ideas in small projects until they actually click.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {INTERESTS.map((i) => (
              <span
                key={i}
                className="border border-cream/10 px-3 py-1.5 text-xs tracking-[0.03em] text-cream/60 transition-colors duration-300 hover:border-ember hover:bg-ember/30 hover:text-cream"
              >
                {i}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={2}>
          <div
            ref={card}
            className="spot border border-cream/10 bg-bark p-6 transition-[border-color,transform,box-shadow] duration-[450ms] [transform-style:preserve-3d] hover:border-cream/20 hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.9)]"
          >
            <div className="relative mb-5 flex items-start justify-between border-b border-cream/10 pb-5">
              <div className="font-display text-[27px] leading-[1.1] text-cream">
                Chetanya Bansal
                <small className="mt-2 block font-sans text-xs tracking-[0.14em] text-cream/40">
                  JAVA BACKEND DEVELOPER
                </small>
              </div>
              <div className="text-right text-[11px] tracking-[0.14em] text-cream/40">
                IN<br />GGN
              </div>
            </div>

            <dl className="relative m-0">
              {FACTS.map(([k, v], i) => (
                <div
                  key={k}
                  className={`flex justify-between gap-4 py-2.5 text-[13.5px] ${
                    i < FACTS.length - 1 ? 'border-b border-cream/[0.06]' : ''
                  }`}
                >
                  <dt className="text-cream/40">{k}</dt>
                  <dd className="m-0 max-w-[60%] text-right text-cream">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
