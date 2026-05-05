export default function Marquee({ words = [], speedSec = 38, bg, color }) {
  const phrase = (
    <span className="flex items-center gap-10 whitespace-nowrap pr-10">
      {words.map((w, i) => (
        <span key={i} className="flex items-center gap-10">
          <span
            className="font-display text-[10vw] sm:text-[8vw] leading-none"
            style={{ color: color || "#0a0a0a" }}
          >
            {w}
          </span>
          <span
            className="w-3 h-3 rounded-full shrink-0"
            style={{ background: color || "#0a0a0a" }}
            aria-hidden="true"
          />
        </span>
      ))}
    </span>
  );

  return (
    <section
      className="border-y border-sqz-line py-6 sm:py-10 overflow-hidden"
      style={{ background: bg || "transparent" }}
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
