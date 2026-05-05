import React, { useMemo } from "react";

// Background lemon drops continuously falling
export default function FallingDrops({ count = 14 }) {
  const drops = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 6 + Math.random() * 8,
        size: 14 + Math.random() * 26,
        color: ["#FBD503", "#B2D801", "#FC6CA7", "#04A5E6", "#FE8E04", "#D0B2FF"][i % 6],
        rotate: Math.random() * 360,
      })),
    [count]
  );
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {drops.map((d, i) => (
        <span
          key={i}
          style={{
            left: `${d.left}%`,
            width: d.size,
            height: d.size * 1.3,
            background: d.color,
            border: "2px solid #151515",
            borderRadius: "60% 60% 60% 60% / 80% 80% 50% 50%",
            position: "absolute",
            top: "-10vh",
            transform: `rotate(${d.rotate}deg)`,
            animation: `drop-fall ${d.duration}s linear ${d.delay}s infinite`,
            opacity: 0.55,
          }}
        />
      ))}
    </div>
  );
}
