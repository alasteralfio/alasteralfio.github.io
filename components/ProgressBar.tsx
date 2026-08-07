"use client";

import { motion, useReducedMotion } from "framer-motion";

interface ProgressBarProps {
  shipped: number;
  total: number;
  size?: "sm" | "lg";
}

export default function ProgressBar({
  shipped,
  total,
  size = "sm",
}: ProgressBarProps) {
  const reduce = useReducedMotion();
  const pct = total > 0 ? Math.round((shipped / total) * 100) : 0;

  /**
   * The gradient sits full-width underneath so early progress shows the gold
   * end rather than a squashed whole gradient. A solid mask the same colour as
   * the track covers the unfilled part, and we scale it away from the right —
   * a transform, so it animates on the compositor and cannot fail to
   * interpolate the way `clip-path` strings do.
   */
  const masked = 1 - pct / 100;

  return (
    <div className={size === "lg" ? "space-y-3" : "space-y-2"}>
      <div className="flex items-baseline justify-between font-mono uppercase tracking-[0.14em]">
        <span
          className={
            size === "lg" ? "text-sm text-ink sm:text-[15px]" : "text-xs text-ink"
          }
        >
          {shipped}/{total} Shipped
        </span>
        <span
          className={
            size === "lg" ? "text-sm text-gold sm:text-[15px]" : "text-xs text-gold"
          }
        >
          {pct}%
        </span>
      </div>

      <div
        role="progressbar"
        aria-valuenow={shipped}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuetext={`${shipped} of ${total} shipped, ${pct} percent`}
        aria-label="Ship30 progress"
        // `--mask` is the no-JS fallback target; see the noscript block in layout.
        style={{ ["--mask" as string]: `${masked}` }}
        className={`relative w-full overflow-hidden rounded-full bg-surfaceHi ${
          size === "lg" ? "h-4" : "h-3"
        }`}
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-gold to-teal"
        />

        <motion.div
          aria-hidden
          className="js-bar absolute inset-0 origin-right bg-surfaceHi"
          initial={{ scaleX: reduce ? masked : 1 }}
          whileInView={{ scaleX: masked }}
          viewport={{ once: true, amount: 0.6 }}
          transition={
            reduce ? { duration: 0 } : { duration: 1.1, ease: [0.22, 1, 0.36, 1] }
          }
        />

        {/* Slot dividers — one per Ship30 entry, so the scale reads honestly. */}
        <div aria-hidden className="pointer-events-none absolute inset-0 flex">
          {Array.from({ length: total }, (_, i) => (
            <div
              key={i}
              className={`flex-1 ${i < total - 1 ? "border-r border-ground/70" : ""}`}
            />
          ))}
        </div>

        {/* Drawn last so the inset hairline sits above the fill. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/10"
        />
      </div>
    </div>
  );
}
