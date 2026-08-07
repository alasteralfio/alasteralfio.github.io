/**
 * Single source of truth for site content.
 *
 * Adding a shipped project = editing this file. Nothing else needs to change.
 *
 * Locked entries keep their real titles/blurbs here — the UI masks them as "???"
 * for visitors. When one ships: set `locked: false`, add `tags`, `href`, and a
 * `shipNumber` if it is part of the Ship30 program, then bump `ship30.shipped`.
 */

export type Rarity = "common" | "rare" | "epic" | "legendary";

export interface Achievement {
  id: string;
  /** Real title. Forced to "???" in the UI while locked. */
  title: string;
  blurb: string;
  /** Hidden while locked. */
  tags?: string[];
  rarity: Rarity;
  /** External link. Omitted for internal work (PSAT) and locked entries. */
  href?: string;
  /** Explains an absent link, e.g. internal work with no public repo. */
  note?: string;
  /** true => desaturated, "???", no tags or link. */
  locked?: boolean;
  /** Ship30 index. Absent for work outside the program (e.g. PSAT). */
  shipNumber?: number;
}

/**
 * Counts Ship30-program drops only. PSAT is an unlocked achievement but is
 * internship work, not one of the 30 — so two cards can be unlocked while the
 * bar still reads 1/30.
 */
export const ship30 = {
  shipped: 1,
  total: 30,
  /** Running log of every drop. */
  logHref: "https://github.com/alasteralfio",
} as const;

export const profile = {
  name: "Alaster Alfio",
  role: "Software Developer",
  roleDetail:
    "LTA PSAT Intern · Final-year Dip. Digital Design & Development, RP",
  bio: "Building path-safety tooling at LTA, shipping small tools on the side.",
  email: "alasteralfio@gmail.com",
  github: "https://github.com/alasteralfio",
  linkedin: "https://www.linkedin.com/in/alaster-alfio-zheng-b36b99279/",
} as const;

export const achievements: Achievement[] = [
  {
    id: "psat",
    title: "Path Safety Assessment Tool",
    blurb:
      "CycleRAP-based web tool that scores path segments for cycling safety. Automates curvature (circumcircle), width (single-view metrology / homography), and grade (LiDAR point cloud) extraction — work previously done by hand.",
    tags: ["GIS", "Computer Vision", "LiDAR", "LTA Internship"],
    rarity: "legendary",
    note: "Internal LTA project — no public repo.",
  },
  {
    id: "openconvert",
    title: "OpenConvert",
    blurb:
      "Built after getting tired of manually converting currency while shopping on a foreign site — a one-time annoyance that didn't justify a permanent extension. Converts on demand, nothing more.",
    tags: ["Chrome Extension", "JavaScript"],
    rarity: "common",
    href: "https://github.com/alasteralfio/ship30-01-openconvert",
    shipNumber: 1,
  },
  {
    id: "steam-clustering",
    title: "Steam Playstyle Clustering & Recommender",
    blurb: "Unsupervised ML on Steam playstyle data.",
    rarity: "epic",
    locked: true,
  },
  {
    id: "interpreter",
    title: "Toy Interpreter",
    blurb: "A programming language, built from the lexer up.",
    rarity: "epic",
    locked: true,
  },
  {
    id: "realtime-collab",
    title: "Real-time Collaboration",
    blurb: "Real-time collaboration, TBD.",
    rarity: "rare",
    locked: true,
  },
  {
    id: "cli-tool",
    title: "CLI Tooling",
    blurb: "Systems-level CLI tooling.",
    rarity: "rare",
    locked: true,
  },
];
