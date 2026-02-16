import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
    "./src/modules/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        border: "var(--border)",
        text: "var(--text)",
        muted: "var(--muted)",

        brand: "var(--brand)",
        "brand-ink": "var(--brand-ink)",
        "brand-soft": "var(--brand-soft)",
      },
      borderRadius: {
        app: "var(--radius)",
      },

      /**
       * Viktig for “tablet portrait vs landscape”
       * (kan justeres, men dette fungerer veldig bra i praksis)
       */
      screens: {
        sidebar: "900px", // slå på sidebar her
      },
    },
  },
  plugins: [],
};

export default config;