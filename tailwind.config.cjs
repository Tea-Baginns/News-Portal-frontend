/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",

  theme: {
    colors: {
      white: "#ffffff",

      gray: "#8E8E8E",
      red: "#DD3333",
      lgray: "#F1F3F6",
      black: "#262728",
      brown: "#2F2D2D",
    },
    fontFamily: {
      DEFAULT: ["Mulish", "sans-serif"],
    },
    boxShadow: {
      DEFAULT: "0px 4px 20px 0px #00000014",
      hard: "0px 4px 10px 0px #00000026",
    },
    extend: {},
  },
  plugins: [],
};
