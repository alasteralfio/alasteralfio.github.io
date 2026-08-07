import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // The design doc calls this `base`. Renamed because Tailwind ships a
        // core text-base font-size utility: a `base` colour would emit a
        // second .text-base rule and repaint anything sized with it.
        ground: "#14171E",
        surface: "#1C2029",
        surfaceHi: "#232838",
        gold: "#E8B34D",
        teal: "#4FD1C5",
        ink: "#EDEEF2",
        // Reading copy. muted is for labels only; at 4.8:1 it reads dim over
        // multiple lines. This is 8.6:1 on surface.
        body: "#B6BCCB",
        muted: "#868C9C",
        rarity: {
          common: "#868C9C",
          rare: "#4FD1C5",
          epic: "#A78BFA",
          legendary: "#E8B34D",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
