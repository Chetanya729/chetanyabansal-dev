import { useMemo, useState } from 'react';
import { SECTIONS } from './data/content';
import { useActiveSection } from './hooks/useActiveSection';

import Preloader from './components/Preloader';
import Cursor from './components/Cursor';
import Rail from './components/Rail';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Github from './components/Github';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [ready, setReady] = useState(false);
  const ids = useMemo(() => SECTIONS.map((s) => s.id), []);
  const active = useActiveSection(ids);
  const label = SECTIONS.find((s) => s.id === active)?.label ?? 'Intro';

  return (
    <>
      <a
        href="#main"
        className="fixed left-[clamp(20px,5vw,88px)] top-[-100px] z-[200] bg-cream px-4 py-2.5 text-[13px] font-medium text-ink transition-[top] duration-200 focus:top-3.5"
      >
        Skip to content
      </a>

      <Preloader onDone={() => setReady(true)} />
      <div className="grain" aria-hidden="true" />
      <Cursor />
      <Rail label={label} />

      <Navbar active={active} />

      <main id="main">
        <Hero ready={ready} />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Github />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
