import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        botanical: {
          950: "#040D09",
          900: "#071A12",
          850: "#0A2218",
          800: "#0E2F21",
          700: "#133E2C",
          600: "#1B523B",
          500: "#24674B",
        },
        coconut: {
          ivory: "#FAF8F5",
          sand: "#F4EFEA",
          muted: "#ECE5DC",
          border: "#E2D9CE",
        },
        lime: {
          fresh: "#22C55E",
          vibrant: "#10B981",
          leaf: "#4ADE80",
          glow: "#86EFAC",
          dew: "#A3E635",
        },
        charcoal: {
          950: "#0F1412",
          900: "#141A17",
          800: "#222A26",
          700: "#36413C",
          500: "#606F67",
          400: "#86958D",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "var(--font-display)",
          "var(--font-sans)",
          "system-ui",
          "sans-serif",
        ],
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        "scroll-indicator": "scrollLine 2s cubic-bezier(0.65, 0, 0.35, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.03)" },
        },
        scrollLine: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "40%": { opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
