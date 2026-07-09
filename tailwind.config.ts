import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#251f1d",
        linen: "#f8f1e8",
        moss: "#5b6f55",
        clay: "#b85f48",
        oat: "#ded1bf"
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"]
      }
    }
  },
  plugins: []
};

export default config;
