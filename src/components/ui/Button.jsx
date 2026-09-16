import { useMagnetic } from '../../hooks/useMagnetic';

export default function Button({
  href,
  children,
  icon: Icon,
  solid = false,
  external = false,
  className = '',
  ...rest
}) {
  const ref = useMagnetic();

  return (
    <a
      ref={ref}
      href={href}
      className={`btn ${solid ? 'btn-solid' : ''} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
      {Icon && <Icon className="btn-ico" size={15} strokeWidth={1.6} aria-hidden="true" />}
    </a>
  );
}
