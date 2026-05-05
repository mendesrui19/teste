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
          // Brand vibrant palette
          yellow: "#FBD503",
          blue: "#6889EC",
          sky: "#04A5E6",
          green: "#B2D801",
          pink: "#FC6CA7",
          lavender: "#D0B2FF",
          orange: "#FE8E04",
        },
      },
      fontFamily: {
        // Display: groovy fat — matches the SQZ lemon logo lettering
        display: ["'Bagel Fat One'", "system-ui", "sans-serif"],
        // Editorial accents
        serif: ["'Instrument Serif'", "serif"],
        // Body
        body: ["Manrope", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};
