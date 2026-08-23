import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        "surface-alt": "var(--surface-alt)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        border: "var(--border)",
        primary: {
          DEFAULT: "var(--primary)",
          hover: "var(--primary-hover)"
        },
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)"
        }
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        mono: ["var(--font-geist-mono)", "monospace"]
      },
      fontSize: {
        display: [
          "clamp(3rem, 3vw + 2.25rem, 6.5rem)",
          { lineHeight: "0.95", letterSpacing: "-0.02em" }
        ],
        h1: [
          "clamp(2.25rem, 1.4vw + 1.85rem, 3.75rem)",
          { lineHeight: "1.05", letterSpacing: "-0.01em" }
        ],
        h2: ["2.25rem", { lineHeight: "1.15" }],
        h3: ["1.5rem", { lineHeight: "1.25" }],
        body: ["1.0625rem", { lineHeight: "1.6" }],
        small: ["0.9375rem", { lineHeight: "1.5" }],
        caption: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.16em" }]
      },
      borderRadius: {
        sm: "2px",
        md: "4px",
        lg: "8px"
      },
      maxWidth: {
        content: "72rem"
      }
    }
  },
  plugins: []
};

export default config;
