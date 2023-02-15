const { isWhiteSpaceLike } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,ts,tsx,js}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "lightgray",
      },
    },
  },
  plugins: [],
};
