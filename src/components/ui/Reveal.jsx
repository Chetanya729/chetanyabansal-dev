import { useReveal } from '../../hooks/useReveal';

/** Wraps children in a scroll-triggered fade-and-rise. `delay` is in steps of 85ms. */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, shown] = useReveal();

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay * 85}ms` } : undefined}
      className={`reveal ${shown ? 'reveal-in' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
