import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CONFIG, REPOS } from '../data/content';
import Section from './ui/Section';
import SectionHead from './ui/SectionHead';
import Reveal from './ui/Reveal';
import Button from './ui/Button';

export default function Github() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    let cancelled = false;

    // Public endpoint, no key, nothing secret in the bundle.
    // If the request fails the tiles simply don't render.
    fetch(`https://api.github.com/users/${CONFIG.githubUser}`, {
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((r) => (r.ok ? r.json() : null))
      .then((u) => {
        if (!cancelled && u) {
          setStats({
            repos: u.public_repos,
            since: new Date(u.created_at).getFullYear(),
          });
        }
      })
      .catch(() => {});

    return () => { cancelled = true; };
  }, []);

  return (
    <Section id="github" dark>
      <SectionHead index="05" title="On GitHub" />

      <div className="grid grid-cols-1 items-start gap-[clamp(24px,4vw,60px)] lg:grid-cols-2">
        <Reveal delay={1}>
          {stats && (
            <div className="mb-6 grid grid-cols-1 gap-px border border-cream/10 bg-cream/10 sm:grid-cols-3" aria-live="polite">
              {[
                [stats.repos, 'PUBLIC REPOS'],
                ['Java', 'PRIMARY LANGUAGE'],
                [stats.since, 'ON GITHUB SINCE'],
              ].map(([value, label]) => (
                <div key={label} className="bg-ink px-4 py-5">
                  <b className="block font-display text-[30px] font-normal leading-none text-cream">{value}</b>
                  <span className="text-[11px] tracking-[0.14em] text-cream/40">{label}</span>
                </div>
              ))}
            </div>
          )}

          <p className="max-w-[56ch] text-[16.5px] text-cream/60">
            Most of what I build lives here — small, focused Spring Boot repositories, each one
            aimed at a single idea I wanted to understand end to end.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href={CONFIG.github} icon={ArrowUpRight} external>View the profile</Button>
          </div>
        </Reveal>

        <Reveal delay={2} className="border border-cream/10 bg-[#060403]">
          <div className="flex items-center gap-2 border-b border-cream/10 px-4 py-3 text-[11px] tracking-[0.14em] text-cream/40">
            <span className="h-1.5 w-1.5 rounded-full bg-cream/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-cream/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-cream/40" />
            <span className="ml-1.5">REPOSITORIES</span>
          </div>

          <div className="px-4 py-5">
            {REPOS.map((r, i) => (
              <a
                key={r.name}
                href={`${CONFIG.github}/${r.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-baseline gap-3 py-2.5 text-[13.5px] transition-[padding] duration-300 hover:pl-2 ${
                  i < REPOS.length - 1 ? 'border-b border-cream/[0.06]' : ''
                }`}
              >
                <span className="flex w-[72px] flex-none items-center gap-2 text-[11.5px] text-cream/40">
                  <i className="h-1.5 w-1.5 flex-none rounded-full bg-ember" aria-hidden="true" />
                  {r.lang}
                </span>
                <span className="flex-none text-cream decoration-ember underline-offset-4 group-hover:underline">
                  {r.name}
                </span>
                <span className="hidden flex-1 truncate text-xs text-cream/40 sm:block">{r.desc}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
