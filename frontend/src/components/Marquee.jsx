import React from "react";

export default function Marquee({ items, bg = "#151515", color = "#FBD503" }) {
  const content = items.join("   •   ");
  return (
    <div
      className="w-full overflow-hidden border-y-[3px] border-sqz-ink py-4"
      style={{ background: bg }}
      data-testid="marquee"
    >
      <div className="flex gap-12 whitespace-nowrap marquee-track">
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            className="font-display font-bold text-3xl sm:text-5xl"
            style={{ color }}
          >
            {content}
          </span>
        ))}
      </div>
    </div>
  );
}
