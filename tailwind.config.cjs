/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  backgroundImage: {
    "hero-pattern":
      "linear-gradient(-135deg, hsla(341, 66%, 33%, 0.75) 25%, hsla(341, 66%, 33%, 0.75) 100%), url(./../../../../public/bg/code-grid.png)",
  },
  theme: {
    fontFamily: {
      sans: ["Arial", "sans-serif"],
    },
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
    },
    extend: {
      colors: {
        maroon: "#8c1d40",
        gold: "#ffc627",
        black: "#000000",
        white: "#ffffff",
        green: "#78be20",
        blue: "#00a3e0",
        organge: "#ff7f32",
        gray: {
          100: "#747474",
          400: "#bfbfbf",
          500: "#d0d0d0",
          600: "#e8e8e8",
          700: "#fafafa",
        },
        copper: "#af674b",
        turquoise: "#04ab7c4",
        pink: "#e74973",
      },
    },
    plugins: [],
  },
};
