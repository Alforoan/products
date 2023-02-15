const { isWhiteSpaceLike } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,ts,tsx,js}", "./public/index.html"],
  theme: {
    extend: {
      screens: {
        desktop: "1280px",
        tablet: "640px",
        mobile: "360px",
      },
      colors: {
        primary: "lightgray",
      },
    },
  },
  plugins: [],
};
