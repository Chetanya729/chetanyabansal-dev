import { useEffect, useRef } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { CONFIG } from '../data/content';

export default function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;

    if (project && !el.open) {
      el.showModal();
      document.body.classList.add('is-locked');
      requestAnimationFrame(() => el.classList.add('is-shown'));
    }
    if (!project && el.open) {
      el.classList.remove('is-shown');
      el.close();
    }
  }, [project]);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    const onCancel = () => {
      document.body.classList.remove('is-locked');
      onClose();
    };
    el.addEventListener('close', onCancel);
    return () => el.removeEventListener('close', onCancel);
  }, [onClose]);

  return (
    <dialog
      ref={dialogRef}
      className="modal w-full max-w-[min(760px,92vw)]"
      aria-labelledby="modal-title"
      onClick={(e) => { if (e.target === dialogRef.current) dialogRef.current.close(); }}
    >
      {project && (
        <div className="relative">
          <div className="modal-panel max-h-[88vh] overflow-y-auto border border-cream/20 bg-bark p-[clamp(26px,4vw,44px)]">
            <h3 id="modal-title" className="m-0 mb-1.5 font-display text-[clamp(28px,4vw,42px)] font-normal leading-[1.1] text-cream">
              {project.name}
            </h3>
            <p className="m-0 mb-6 text-xs tracking-[0.16em] text-cream/40">
              {project.tags.join('  ·  ')}
            </p>

            <p className="m-0 max-w-[62ch] text-cream/80">{project.overview}</p>

            <h4 className="mb-3 mt-7 text-[11px] font-normal tracking-[0.2em] text-cream/40">
              WHAT&apos;S INSIDE
            </h4>
            <ul className="m-0 list-none p-0">
              {project.points.map((p) => (
                <li key={p} className="bullet mb-2.5 max-w-[62ch] text-[15px]">{p}</li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3 border-t border-cream/10 pt-6">
              {project.repo ? (
                <a
                  className="btn"
                  href={`${CONFIG.github}/${project.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open repository
                  <ArrowUpRight className="btn-ico" size={15} strokeWidth={1.6} aria-hidden="true" />
                </a>
              ) : (
                <p className="m-0 text-xs tracking-[0.16em] text-cream/40">
                  {project.note || 'Repository not public yet'}
                </p>
              )}
            </div>
          </div>

          <button
            onClick={() => dialogRef.current?.close()}
            aria-label="Close"
            className="absolute right-3.5 top-3.5 grid h-10 w-10 place-items-center text-cream/40 transition-[color,transform] duration-300 hover:rotate-90 hover:text-cream"
          >
            <X size={18} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
      )}
    </dialog>
  );
}
