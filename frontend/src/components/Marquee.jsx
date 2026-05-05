export default function Marquee({ words = [], speedSec = 38 }) {
  const phrase = (
    <span className="flex items-center gap-10 whitespace-nowrap pr-10">
      {words.map((w, i) => (
        <span key={i} className="flex items-center gap-10">
          <span
            className={`font-display text-[10vw] sm:text-[8vw] leading-none text-sqz-ink ${
              i % 2 === 0 ? "" : "italic"
            }`}
          >
            {w}
          </span>
          <span
            className="w-2 h-2 rounded-full bg-sqz-ink shrink-0"
            aria-hidden="true"
          />
        </span>
      ))}
    </span>
  );

  return (
    <section
      className="border-y border-sqz-line py-6 sm:py-10 overflow-hidden bg-sqz-bg"
      data-testid="marquee"
    >
      <div className="flex marquee-track" style={{ animationDuration: `${speedSec}s` }}>
        {phrase}
        {phrase}
        {phrase}
      </div>
    </section>
  );
}
