const { isWhiteSpaceLike } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      screens: {
        desktop: "1280px",
        tablet: { min: "680px", max: "1279px" },
        mobile: { min: "360px", max: "679px" },
      },
      colors: {
        primary: "lightgray",
        pink: "#ffd6ff",
      },
    },
  },
  plugins: [],
};
