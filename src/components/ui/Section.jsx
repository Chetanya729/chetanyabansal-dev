/** A full band of the page: top hairline, generous vertical rhythm, optional warm ground. */
export default function Section({ id, dark = false, className = '', children }) {
  return (
    <section
      id={id}
      className={`relative border-t border-cream/10 py-[clamp(88px,13vh,150px)] ${
        dark ? 'bg-[linear-gradient(180deg,#1F150C,#150E07)]' : ''
      } ${className}`}
    >
      <div className="relative z-[2] mx-auto max-w-[1240px] px-[clamp(20px,5vw,88px)]">
        {children}
      </div>
    </section>
  );
}
