import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: "#8c1d40",
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
    },
  },
  plugins: [],
};

export default config;
