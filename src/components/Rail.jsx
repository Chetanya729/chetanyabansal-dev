import { useScrollProgress } from '../hooks/useScrollProgress';

/** Thin left-edge progress rail with the current section name. Desktop only. */
export default function Rail({ label }) {
  const { progress } = useScrollProgress();

  return (
    <div className="fixed bottom-0 left-[26px] top-0 z-40 hidden w-px bg-cream/10 xl:block" aria-hidden="true">
      <i
        className="absolute left-0 top-0 h-full w-full origin-top bg-cream/40"
        style={{ transform: `scaleY(${progress})` }}
      />
      <b className="absolute bottom-14 left-3.5 origin-bottom-left -rotate-90 whitespace-nowrap text-[11px] font-normal tracking-[0.22em] text-cream/40">
        {label}
      </b>
    </div>
  );
}
