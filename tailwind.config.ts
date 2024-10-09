import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        asumaroon: {
          DEFAULT: '#8C1D40',
          100: '#E3C7D0',
          200: '#D5ABB8',
          300: '#C68EA0',
          400: '#B87288',
          500: '#A95670',
          600: '#9B3A58',
          700: '#8C1D40',
          800: '#61142D',
          900: '#360B19',
          950: '#20070F',
        },
        black: "#000000",
        white: "#ffffff",
        gray: "#f9f9fa",
      },

      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(0deg, hsla(341, 66%, 33%, 0.05) 0%, rgba(131, 79, 96, 0) 100%)",
      },
      fontFamily: {
        bebas: ['var(--font-bebas-neue)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
