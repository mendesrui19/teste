import React from "react";
import { motion } from "framer-motion";

// Lemon SVG with squeeze + juice drops animation. Pure SVG/CSS.
export default function LemonSqueezeAnim() {
  const drops = Array.from({ length: 6 });
  return (
    <div className="relative w-full h-full flex items-center justify-center" data-testid="lemon-squeeze-anim">
      {/* Hand 1 left */}
      <motion.div
        initial={{ x: -40, rotate: -20 }}
        animate={{ x: [-40, 0, -40], rotate: [-20, -5, -20] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-2 sm:left-6 top-6 z-20 text-5xl sm:text-7xl"
        style={{ filter: "drop-shadow(3px 3px 0 #151515)" }}
      >
        <span role="img" aria-label="hand-left">👈</span>
      </motion.div>
      {/* Hand 2 right */}
      <motion.div
        initial={{ x: 40, rotate: 20 }}
        animate={{ x: [40, 0, 40], rotate: [20, 5, 20] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-2 sm:right-6 top-6 z-20 text-5xl sm:text-7xl"
        style={{ filter: "drop-shadow(3px 3px 0 #151515)" }}
      >
        <span role="img" aria-label="hand-right">👉</span>
      </motion.div>

      {/* Lemon body */}
      <div className="relative animate-squeeze">
        <svg
          width="280"
          height="240"
          viewBox="0 0 280 240"
          className="drop-shadow-[6px_6px_0_#151515]"
        >
          {/* leaf */}
          <g transform="translate(140 18) rotate(-20)">
            <path
              d="M0 0 C 18 -22 60 -22 70 8 C 50 12 18 8 0 0 Z"
              fill="#B2D801"
              stroke="#151515"
              strokeWidth="4"
            />
            <path d="M0 0 C 18 -8 40 -10 60 -4" stroke="#151515" strokeWidth="3" fill="none" />
          </g>
          {/* stem */}
          <rect x="135" y="14" width="10" height="20" fill="#151515" rx="2" />
          {/* lemon shape */}
          <ellipse cx="140" cy="130" rx="115" ry="92" fill="#FBD503" stroke="#151515" strokeWidth="6" />
          {/* highlight */}
          <ellipse cx="95" cy="95" rx="22" ry="12" fill="#FFF2A8" opacity="0.9" transform="rotate(-25 95 95)" />
          {/* bumps to the right */}
          <path
            d="M252 110 q 12 18 -2 38"
            stroke="#151515"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          {/* face */}
          <circle cx="105" cy="135" r="5" fill="#151515" />
          <circle cx="175" cy="135" r="5" fill="#151515" />
          <path d="M115 165 q 25 22 50 0" stroke="#151515" strokeWidth="5" fill="none" strokeLinecap="round" />
          {/* pink cheeks */}
          <circle cx="92" cy="155" r="9" fill="#FC6CA7" opacity="0.8" />
          <circle cx="190" cy="155" r="9" fill="#FC6CA7" opacity="0.8" />
        </svg>

        {/* Juice drops */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 flex gap-1 pointer-events-none">
          {drops.map((_, i) => (
            <span
              key={i}
              className="juice-drop block w-3 h-4 rounded-full"
              style={{
                background: "#FBD503",
                border: "2px solid #151515",
                animationDelay: `${0.2 * i}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* SQUEEZE! sticker */}
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: [1, 1.1, 1], rotate: [-10, -6, -10] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute -top-2 right-4 sm:right-12 bg-[#FC6CA7] text-white font-display font-bold text-xl sm:text-2xl px-4 py-1 rounded-full btl shadow-brutal-sm"
      >
        SQZ them!
      </motion.div>
    </div>
  );
}
