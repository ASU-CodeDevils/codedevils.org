/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        'asu-maroon': '#8c1d40',
        'asu-gold': '#ffc627',
        'asu-black': '#000000',
        'asu-white': '#ffffff',
      },
    },
  },
  plugins: [],
};
