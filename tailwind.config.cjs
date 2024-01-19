// @ts-check
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },

      colors: {
        maroon: "#8c1d40",
        gold: "#F7D573",
        black: "#000000",
        white: "#ffffff",
        green: "#78be20",
        gray: {
          100: "#545454",
          200: "#6b6b6b",
          300: "#a3a3a3",
          400: "#bfbfbf",
          500: "#d0d0d0",
          600: "#e8e8e8",
          700: "#fafafa",
          800: "#f5f5f5",
        },
      },
    },
    plugins: [],
  },
};
