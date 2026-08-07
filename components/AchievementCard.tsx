"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { Achievement, Rarity } from "@/lib/data";
import ArrowIcon from "./ArrowIcon";

const GOLD = "232, 179, 77";

// Rarity tints the whole 1px frame, with a stronger top edge. Drawing the top
// edge as a separate element instead would stack on the border and read 2px.
const rarityStyle: Record<
  Rarity,
  { label: string; text: string; border: string; top: string }
> = {
  common: {
    label: "Common",
    text: "text-rarity-common",
    border: "border-rarity-common/25",
    top: "border-t-rarity-common/60",
  },
  rare: {
    label: "Rare",
    text: "text-rarity-rare",
    border: "border-rarity-rare/25",
    top: "border-t-rarity-rare/60",
  },
  epic: {
    label: "Epic",
    text: "text-rarity-epic",
    border: "border-rarity-epic/25",
    top: "border-t-rarity-epic/60",
  },
  legendary: {
    label: "Legendary",
    text: "text-rarity-legendary",
    border: "border-rarity-legendary/40",
    top: "border-t-rarity-legendary/80",
  },
};

const unlockVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: "grayscale(1) brightness(0.6)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "grayscale(0) brightness(1)",
    boxShadow: [
      `0 0 0 0 rgba(${GOLD}, 0)`,
      `0 0 38px 6px rgba(${GOLD}, 0.42)`,
      `0 0 0 0 rgba(${GOLD}, 0)`,
    ],
    transition: {
      opacity: { duration: 0.45, ease: "easeOut" },
      y: { duration: 0.55, ease: "easeOut" },
      filter: { duration: 0.75, delay: 0.12, ease: "easeOut" },
      boxShadow: {
        duration: 1.7,
        delay: 0.18,
        times: [0, 0.32, 1],
        ease: "easeOut",
      },
    },
  },
};

// filter and y are set to none rather than left out. SSR runs before
// useReducedMotion reports, so it emits the unlock variant's inline styles;
// omitting the keys here would leave the card grey and offset forever.
const fadeVariants: Variants = {
  hidden: { opacity: 0, y: 0, filter: "none" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "none",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

function LockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <rect x="4" y="10.5" width="16" height="10" rx="2.5" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

export default function AchievementCard({ item }: { item: Achievement }) {
  const reduce = useReducedMotion();
  const variants = reduce ? fadeVariants : unlockVariants;

  // Locked cards don't animate. Nothing has been earned, and keeping the
  // reveal on real work stops it becoming a page-wide fade.
  if (item.locked) {
    return (
      <article className="flex flex-col gap-3 rounded-2xl border border-dashed border-white/10 bg-surface/40 p-5 transition-colors duration-300 hover:border-white/20">
        <div className="flex items-center justify-between text-muted">
          <LockIcon />
          <span className="font-mono text-[10px] uppercase tracking-[0.18em]">
            Locked
          </span>
        </div>

        <h3 className="font-display text-xl font-bold tracking-tight text-muted">
          <span aria-hidden>???</span>
          <span className="sr-only">Locked achievement</span>
        </h3>

        <p className="text-sm leading-relaxed text-muted">{item.blurb}</p>
      </article>
    );
  }

  const rarity = rarityStyle[item.rarity];

  const card = (
    <motion.article
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      className={`js-reveal relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border bg-surface p-6 transition-colors duration-300 group-hover:bg-surfaceHi sm:p-7 ${rarity.border} ${rarity.top}`}
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={`font-mono text-[10px] uppercase tracking-[0.18em] ${rarity.text}`}
        >
          ◆ {rarity.label}
        </span>
        {item.shipNumber !== undefined && (
          <span className="rounded-full border border-gold/30 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-gold">
            Ship #{String(item.shipNumber).padStart(2, "0")}
          </span>
        )}
      </div>

      <h3 className="font-display text-xl font-bold leading-snug tracking-tight text-ink sm:text-2xl">
        {item.title}
      </h3>

      <p className="text-sm leading-relaxed text-body sm:text-[15px]">
        {item.blurb}
      </p>

      {item.tags && item.tags.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <li
              key={tag}
              // Recessed, not raised: muted on surfaceHi is 4.36:1 and fails AA.
              className="rounded-full bg-ground/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted ring-1 ring-inset ring-white/5"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      {item.detail && (
        <p className="mt-auto inline-flex items-center gap-1.5 pt-1 font-mono text-xs uppercase tracking-[0.14em] text-teal">
          Read more
          <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
        </p>
      )}
    </motion.article>
  );

  // The card itself is the link, so nothing is nested inside another anchor.
  if (item.detail) {
    return (
      <Link
        href={`/projects/${item.id}`}
        className="group block h-full rounded-2xl"
      >
        {card}
      </Link>
    );
  }

  return card;
}
