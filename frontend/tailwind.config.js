/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        sqz: {
          bg: "#0A0A0A",
          surface: "#121212",
          ink: "#F5F5F0",
          mute: "#A3A3A3",
          line: "rgba(255,255,255,0.10)",
          accent: "#E5F33D",
          accent2: "#D4E129",
        },
      },
      fontFamily: {
        display: ["'Instrument Serif'", "serif"],
        body: ["Manrope", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};
