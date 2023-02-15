/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['Arial', 'sans-serif'],
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    extend: {
      colors: {
        'asu-maroon': '#8c1d40',
        'asu-gold': '#ffc627',
        'asu-black': '#000000',
        'asu-white': '#ffffff',
        'asu-green': '#78be20',
        'asu-blue': '#00a3e0',
        'asu-organge': '#ff7f32',
        'asu-gray': '#747474',
        'asu-copper': '#af674b',
        'asu-turquoise': '#04ab7c4',
        'asu-pink': '#e74973',
        'asu-gray-1': '#191919',
        'asu-gray-2': '#484848',
        'asu-gray-3': '#747474',
        'asu-gray-4': '#bfbfbf',
        'asu-gray-5': '#d0d0d0',
        'asu-gray-6': '#e8e8e8',
        'asu-gray-7': '#fafafa',
      },
    },
  },
  plugins: [],
};
