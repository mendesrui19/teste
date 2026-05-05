import { useEffect, useState } from "react";

/**
 * Cinematic SVG lemon for LIGHT theme — slow squeeze, juice stream draws on path,
 * droplets cascade. Uses warm citrus yellows for the lemon body and dark ink
 * for line work + droplets accent.
 */
export default function CinematicLemon() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    let mounted = true;
    let t1, t2, t3;
    const cycle = () => {
      if (!mounted) return;
      setPhase(0);
      t1 = setTimeout(() => mounted && setPhase(1), 800);
      t2 = setTimeout(() => mounted && setPhase(2), 2400);
      t3 = setTimeout(cycle, 5800);
    };
    cycle();
    return () => {
      mounted = false;
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      data-testid="lemon-squeeze-anim"
    >
      <svg
        viewBox="0 0 600 700"
        className="w-full h-full max-w-[640px]"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="lemonGradLight" cx="40%" cy="35%" r="70%">
            <stop offset="0%" stopColor="#FFFCC8" />
            <stop offset="55%" stopColor="#F0DC2E" />
            <stop offset="100%" stopColor="#A89615" />
          </radialGradient>
          <radialGradient id="highlightLight" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
          <linearGradient id="juiceGradLight" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A89615" stopOpacity="0" />
            <stop offset="20%" stopColor="#A89615" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#A89615" stopOpacity="0" />
          </linearGradient>
          <filter id="softLight" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="0.6" />
          </filter>
        </defs>

        {/* shadow plate */}
        <ellipse
          cx="300"
          cy="600"
          rx="220"
          ry="22"
          fill="#0A0A0A"
          opacity="0.10"
          filter="url(#softLight)"
        />

        {/* lemon body */}
        <g
          style={{
            transformOrigin: "300px 320px",
            transition: "transform 1.1s cubic-bezier(.16,1,.3,1)",
            transform:
              phase === 1
                ? "scaleX(1.10) scaleY(0.86) translateY(8px)"
                : "scaleX(1) scaleY(1)",
          }}
        >
          {/* leaf */}
          <path
            d="M300 120 C 360 70 460 80 480 140 C 430 160 360 145 300 130 Z"
            fill="#0A0A0A"
            stroke="#0A0A0A"
            strokeWidth="1.5"
          />
          {/* stem */}
          <rect x="294" y="118" width="12" height="22" rx="3" fill="#0A0A0A" />
          {/* lemon */}
          <ellipse cx="300" cy="320" rx="190" ry="160" fill="url(#lemonGradLight)" />
          <ellipse
            cx="300"
            cy="320"
            rx="190"
            ry="160"
            fill="none"
            stroke="#0A0A0A"
            strokeOpacity="0.25"
            strokeWidth="1.5"
          />
          {/* highlight */}
          <ellipse cx="220" cy="240" rx="60" ry="32" fill="url(#highlightLight)" />
          {/* tip right */}
          <path
            d="M488 320 q 32 22 -2 56"
            stroke="#0A0A0A"
            strokeOpacity="0.45"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* juice stream */}
        <path
          d="M300 480 C 300 540, 300 580, 300 640"
          stroke="url(#juiceGradLight)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="200"
          strokeDashoffset={phase === 0 ? 200 : 0}
          style={{
            transition: "stroke-dashoffset 1.3s cubic-bezier(.16,1,.3,1)",
          }}
        />

        {/* droplets */}
        {[0, 1, 2, 3, 4].map((i) => (
          <circle
            key={i}
            cx={300 + (i - 2) * 14}
            cy={650}
            r={i === 2 ? 5 : 3}
            fill="#A89615"
            opacity={phase === 2 ? 1 : 0}
            style={{
              transformOrigin: "center",
              transition: `transform 1.6s cubic-bezier(.16,1,.3,1) ${i * 0.08}s, opacity .6s ease ${i * 0.08}s`,
              transform:
                phase === 2
                  ? `translateY(${20 + i * 6}px) scale(1)`
                  : "translateY(-10px) scale(0.4)",
            }}
          />
        ))}

        {/* refined caption inside SVG */}
        <text
          x="300"
          y="60"
          textAnchor="middle"
          fill="#6B6B6B"
          fontFamily="Manrope, sans-serif"
          fontSize="11"
          letterSpacing="3"
        >
          {phase === 0 ? "I D L E" : phase === 1 ? "S Q U E E Z E" : "D R I P"}
        </text>
      </svg>

      {/* corner timecode */}
      <div className="absolute bottom-4 left-4 text-[10px] tracking-[0.3em] uppercase text-sqz-mute font-mono">
        SQZ · 00:0{phase === 0 ? 1 : phase === 1 ? 2 : 3}
      </div>
      <div className="absolute top-4 right-4 flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-sqz-ink">
        <span className="w-1.5 h-1.5 rounded-full bg-sqz-ink animate-pulse" />
        live
      </div>
    </div>
  );
}
