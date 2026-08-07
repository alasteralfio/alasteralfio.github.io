import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /**
         * The design doc calls this token `base`. It is named `ground` here
         * because Tailwind ships a core `text-base` font-size utility — a
         * `base` color would emit a second, later `.text-base` rule that
         * silently repaints anything using `text-base`/`sm:text-base` for size.
         */
        ground: "#14171E",
        surface: "#1C2029",
        surfaceHi: "#232838",
        gold: "#E8B34D",
        teal: "#4FD1C5",
        ink: "#EDEEF2",
        /**
         * Reading copy — paragraphs and card blurbs. Sits between `ink` and
         * `muted`: the token doc reserves `muted` for labels and metadata, and
         * multi-line body text set in it reads dim (4.8:1 on `surface`).
         * This is 8.6:1 on `surface`, 9.4:1 on `ground`.
         */
        body: "#B6BCCB",
        muted: "#868C9C",
        // Rarity ladder — game vocabulary. Only `common` and `legendary`
        // are in use today; the rest are here for future drops.
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
