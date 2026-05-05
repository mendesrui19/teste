// Subtle cinematic ambience: a few slow drifting lemon-yellow particles.
// Replaces the playful "falling drops" component but stays soft and editorial.
import { useMemo } from "react";

export default function AmbientParticles({ count = 8 }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        left: 10 + Math.random() * 80,
        top: 10 + Math.random() * 80,
        size: 2 + Math.random() * 3,
        delay: Math.random() * 6,
        duration: 12 + Math.random() * 10,
      })),
    [count]
  );
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      {items.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background: "#E5F33D",
            boxShadow: "0 0 12px rgba(229,243,61,0.6)",
            animation: `drift ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
            opacity: 0.5,
          }}
        />
      ))}
      <style>{`
        @keyframes drift {
          0% { transform: translate(0,0); }
          100% { transform: translate(40px,-40px); }
        }
      `}</style>
    </div>
  );
}
