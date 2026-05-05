/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        sqz: {
          bg: "#FAFAF7",
          surface: "#F1F0EB",
          ink: "#0A0A0A",
          mute: "#6B6B6B",
          line: "rgba(10,10,10,0.10)",
          accent: "#9DAA10",
          accent2: "#B5C800",
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
