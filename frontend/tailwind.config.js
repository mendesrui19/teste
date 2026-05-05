/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        sqz: {
          yellow: "#FBD503",
          blue: "#04A5E6",
          pink: "#FC6CA7",
          green: "#B2D801",
          lavender: "#D0B2FF",
          orange: "#FE8E04",
          ink: "#151515",
        },
      },
      fontFamily: {
        display: ["Fredoka", "sans-serif"],
        body: ["'Libre Franklin'", "sans-serif"],
      },
      boxShadow: {
        brutal: "8px 8px 0px 0px #151515",
        "brutal-sm": "4px 4px 0px 0px #151515",
        "brutal-lg": "12px 12px 0px 0px #151515",
      },
    },
  },
  plugins: [],
};
