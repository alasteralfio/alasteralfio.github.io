// All site content lives here. Adding a project means editing this file only.
//
// Locked entries keep their real titles; the UI masks them as "???". To ship
// one: locked: false, add tags and href, add shipNumber if it's a Ship30 drop,
// then bump ship30.shipped.

export type Rarity = "common" | "rare" | "epic" | "legendary";

export interface ProjectImage {
  src: string;
  alt: string;
  /** Intrinsic dimensions — required by next/image. */
  w: number;
  h: number;
}

/** Omit to render a card with no detail page. */
export interface ProjectDetail {
  /** Shown under the title, e.g. employer and dates. */
  timeframe?: string;
  overview: string[];
  reflection: string[];
  /** Optional screenshots. First is the cover; the rest form a gallery. */
  images?: ProjectImage[];
}

export interface Achievement {
  id: string;
  title: string;
  blurb: string;
  tags?: string[];
  rarity: Rarity;
  href?: string;
  /** Link text for `href`. Defaults to "View source". */
  hrefLabel?: string;
  /** Extra context line, e.g. "no public repo". Can sit alongside a link. */
  note?: string;
  locked?: boolean;
  /** Ship30 index. Absent for anything outside the programme. */
  shipNumber?: number;
  /** Present => the card links to /projects/<id>. */
  detail?: ProjectDetail;
}

export const ship30 = {
  shipped: 1,
  total: 30,
  logHref: "https://github.com/alasteralfio/ship30",
} as const;

export const profile = {
  name: "Alaster Alfio",
  role: "Software Developer",
  roleDetail: "Dip. Digital Design & Development, Republic Polytechnic",
  status: "Graduated Sep 2026",
  bio: "Multi-aspect developer, highlighted for AI and CV work at the Land Transport Authority.",
  email: "alasteralfio@gmail.com",
  github: "https://github.com/alasteralfio",
  linkedin: "https://www.linkedin.com/in/alaster-alfio-zheng-b36b99279/",
  resume: "/alaster-alfio-resume.pdf",
} as const;

export interface Experience {
  company: string;
  role: string;
  period: string;
  points: string[];
}

export const experience: Experience[] = [
  {
    company: "Land Transport Authority",
    role: "Software Developer Intern / Team Lead",
    period: "Mar 2026 – Jul 2026",
    points: [
      "Built an end-to-end gradient processing pipeline from raw LiDAR point clouds, covering centerline stitching, outlier and seam-jump filtering, and slope computation, replacing a manual geospatial workflow.",
      "Added polygon-based planning area selection over GIS shapefile layers so assessors could scope assessments spatially instead of picking roads one at a time.",
      "Designed a multi-user profile and project system so the tool could be deployed safely on shared department devices.",
      "Introduced Git, Jira ticket tracking, and shared documentation to the team, which moved projected delivery from December to end-July.",
    ],
  },
  {
    company: "MOBOT SG",
    role: "IT Web Developer / E-Commerce Manager",
    period: "Sep 2025 – Dec 2025",
    points: [
      "Managed 50+ high-value products doing around SGD 30,000 in monthly sales.",
      "Built custom back-end integrations for Shopify to support global order fulfillment.",
      "Built landing, navigation, and product pages in custom HTML and Shopify Liquid.",
      "Automated first-line customer service with an n8n and Zapier chatbot, cutting routine inquiry tickets by 80%.",
    ],
  },
  {
    company: "The Brainery Code",
    role: "STEM Instructor",
    period: "Apr 2025 – Aug 2025",
    points: [
      "Taught programming and game development to students aged 4 to 16 across Roblox Scripting, Minecraft Education, Scratch, and EduBlocks.",
      "Ran robotics lessons on LEGO Spike Prime and LEGO Essentials.",
      "Coached competition teams; all three entered placed at the 2025 RoboCup U12 Grand Prix.",
    ],
  },
  {
    company: "UPFUE SG",
    role: "E-Commerce Product Manager",
    period: "Dec 2022 – Dec 2023",
    points: [
      "Managed a catalogue of over 20,000 products, handling categorisation and search optimisation.",
      "Used performance data to inform pricing and promotion decisions.",
    ],
  },
];

export const achievements: Achievement[] = [
  {
    id: "psat",
    title: "Path Safety Assessment Tool",
    blurb:
      "CycleRAP-based web tool that scores path segments for cycling safety. Extracts curvature by circumcircle, width by single-view metrology, and grade from LiDAR point clouds. All three used to be measured by hand.",
    tags: ["GIS", "Computer Vision", "LiDAR", "Python"],
    rarity: "legendary",
    href: "/lta-internship-report.pdf",
    hrefLabel: "View Internship Report",
    note: "Internal LTA project, no public repo.",
    detail: {
      timeframe: "Land Transport Authority · Mar 2026 – Jul 2026",
      overview: [
        "PSAT scores cycling path segments against CycleRAP, a road-safety assessment methodology. Assessors used to collect the inputs by hand: measuring how sharply a path curves, how wide it is, and how steeply it climbs, segment by segment.",
        "I automated all three. Curvature comes from fitting a circumcircle through points along the centerline. Width comes from single-view metrology, recovering real-world distances from a single camera image using homography. Grade comes from raw LiDAR point clouds, through a pipeline that stitches centerlines, filters outliers and seam jumps where survey passes meet, and computes slope along the result.",
        "Alongside the extraction work I added polygon-based planning area selection over GIS shapefile layers, so an assessor can draw a region and scope an assessment spatially rather than selecting roads individually, and a multi-user profile system so the tool could run safely on shared department machines.",
      ],
      reflection: [
        "The hardest part was not the geometry, it was the messiness of real survey data. Seam jumps where two LiDAR passes meet will quietly ruin a slope calculation, and I spent far longer on filtering and validation than on the slope maths itself.",
        "The other thing I took away was process. The team had no version control or ticket tracking when I arrived. Introducing Git, Jira, and shared documentation felt like a detour from writing code, but it was what moved the projected delivery from December to the end of July.",
      ],
    },
  },
  {
    id: "clinical-chatbot",
    title: "KKH Chatbot",
    blurb:
      "Final year project with KK Women's and Children's Hospital. A web chatbot that gives nurses bedside access to clinical guidelines and medical calculators, using NLP and semantic search instead of manual lookup.",
    tags: ["Python", "JavaScript", "n8n", "NLP"],
    rarity: "epic",
    note: "Built with KKH, no public repo.",
    detail: {
      timeframe: "Final Year Project · Republic Polytechnic",
      overview: [
        "Nurses need clinical guidelines and dosage calculations at the bedside, under time pressure. Looking either one up manually is slow at exactly the moment speed matters most.",
        "The system is a responsive web chatbot that answers guideline questions and runs medical calculators from plain language. It uses natural language processing and semantic search so a nurse can ask a question the way they would say it, rather than matching an exact document title.",
        "I built the middleware that routes between the NLP engine and the clinical data, which is where correctness actually lives: the retrieval has to return the right guideline and the calculators have to execute exactly. The interface is mobile-first, because it is used standing up, and includes gamified quizzes and clinical scenarios for ongoing training.",
      ],
      reflection: [
        "Working against a clinical brief changed how I thought about failure. In most projects a wrong answer is a bug; here a plausible-but-wrong dosage is worse than no answer at all, so the calculators execute deterministically rather than being generated.",
        "If I revisited it I would spend more time on evaluating retrieval quality systematically instead of testing by hand against questions I thought to ask.",
      ],
    },
  },
  {
    id: "upbringing",
    title: "Upbringing",
    blurb:
      "VR horror puzzle game built in Unity for the HTC Vive. The player navigates a haunted toy house, avoids Mother, and solves puzzles to escape. All 2D art hand-made.",
    tags: ["Unity", "C#", "VR", "Photoshop"],
    rarity: "epic",
    note: "Not available for download.",
    detail: {
      timeframe: "Republic Polytechnic",
      overview: [
        "Upbringing is a VR game built in Unity with the XR Interaction Toolkit, targeting the HTC Vive and coded in C#. It takes place in a haunted toy house standing in for a twisted childhood. The player avoids Mother, the antagonist, and solves puzzles to escape.",
        "It started as a school assignment. I kept going well past what the assignment needed because I liked what the game was becoming.",
        "Every 2D asset (walls, floors, mannequins, props) I made myself in Photoshop and GIMP. The mannequin poses were sketched roughly first, and the symbols on them were freestyled with reference to Minecraft's enchantment table glyphs. The 3D assets came from the Unity Asset Store and were modified to match the art direction.",
      ],
      reflection: [
        "Lighting came first, before any layout work. I wanted an intentionally dark atmosphere rather than a dark scene that just looked underlit, and getting there took a lot of trial and error.",
        "Coding took the longest by far: the chase AI for the mannequins, the randomisation of their poses and symbols, and the final Simon Says puzzle. That last one was the most fiddly, since the generated sequence had to persist and be checked against player input correctly rather than approximately.",
      ],
      images: [
        { src: "/projects/upbringing.png", w: 600, h: 345, alt: "A dim room in the haunted toy house, lit around a decorated tree" },
        { src: "/projects/upbringing-1.png", w: 650, h: 567, alt: "In-game scene from Upbringing" },
        { src: "/projects/upbringing-2.png", w: 653, h: 587, alt: "In-game scene from Upbringing" },
        { src: "/projects/upbringing-3.png", w: 2000, h: 2000, alt: "Promotional art for Upbringing" },
      ],
    },
  },
  {
    id: "scamateur",
    title: "Scamateur",
    blurb:
      "DSTA BrainHack CODE_EXP finalist. A gamified take on scam awareness that puts the player in a grassroots volunteer role, so they think before clicking and see the damage from the victim's side.",
    tags: ["GameMaker", "C#", "JavaScript", "Hackathon"],
    rarity: "rare",
    note: "Hackathon submission, no public repo.",
    detail: {
      timeframe: "DSTA BrainHack 2025 CODE_EXP · Finalist",
      overview: [
        "Scam awareness campaigns tend to tell people what not to click. We tried the opposite: put the player in the position of a grassroots volunteer helping victims, so the cost of a scam is something they encounter rather than something they are warned about.",
        "I led ideation and project management, and pushed development across the full stack in GameMaker to get a complete submission inside hackathon time.",
      ],
      reflection: [
        "The team had uneven experience with the engine, so a real part of my job was closing that gap while the clock ran rather than absorbing the work myself. Splitting tasks by what someone could learn in the time available, instead of by what they already knew, is the thing I would carry into the next one.",
        "We made finalist. The submission was complete and playable end to end, which mattered more than any single feature we cut to get there.",
      ],
    },
  },
  {
    id: "retro-games",
    title: "Retro Game Collection",
    blurb:
      "Asteroids, Pong, Atari Breakout, and Snake, all custom built in GameMaker Studio 2 with GML. A deliberate move off Unity to learn a second engine.",
    tags: ["GameMaker", "GML", "Game Dev"],
    rarity: "rare",
    detail: {
      overview: [
        "Four retro classics rebuilt from scratch in GameMaker Studio 2, written in GML. I had only worked in Unity before and wanted to learn a second engine properly rather than read about it.",
        "Pong and Snake I picked for nostalgia. Asteroids and Breakout sit just outside my generation but are classics people still recognise.",
      ],
      reflection: [
        "Asteroids came from a tutorial and was mostly about learning the engine's idioms. Early on I did not understand why GameMaker pushes key events instead of reading input in the step event; that made sense later.",
        "Pong was where the actual thinking started, working out bounce trajectories and finding the clamp function to keep paddles in bounds. The AI opponent just tracks the ball's position at a speed slightly below the player's, which is enough to feel fair.",
        "Snake was the hardest. Growing the body in the direction of travel, moving on a grid, and self-collision each took more attempts than I expected.",
      ],
      images: [
        { src: "/projects/game.png", w: 600, h: 345, alt: "Menu montage of the retro game collection" },
        { src: "/projects/game-1.png", w: 687, h: 979, alt: "Gameplay from the retro game collection" },
        { src: "/projects/game-2.png", w: 1196, h: 797, alt: "Gameplay from the retro game collection" },
        { src: "/projects/game-4.png", w: 994, h: 961, alt: "Gameplay from the retro game collection" },
      ],
    },
  },
  {
    id: "openconvert",
    title: "OpenConvert",
    blurb:
      "Built after getting tired of manually converting prices while shopping on a foreign site. It converts only when you ask it to, because a one-off annoyance didn't justify an extension that runs all the time.",
    tags: ["Chrome Extension", "JavaScript"],
    rarity: "common",
    href: "https://github.com/alasteralfio/ship30-01-openconvert",
    shipNumber: 1,
    detail: {
      overview: [
        "A Chrome extension that converts currency on demand. I was shopping on a foreign site, converting prices in my head one at a time, and wanted it to stop.",
        "Ship30 drop #01. The scope is deliberately small: it converts when you invoke it and does nothing otherwise.",
      ],
      reflection: [
        "Every extension I found for this ran constantly in the background and rewrote pages I had not asked it to touch. A one-off annoyance did not justify that, so the whole design decision was to stay inert until called.",
        "Keeping it that small is why it actually shipped, which is the entire point of the Ship30 exercise.",
      ],
      images: [
        { src: "/projects/openconvert-thumbnail.png", w: 440, h: 280, alt: "OpenConvert logo and tagline: every price on the web, in your currency" },
        { src: "/projects/openconvert-convert.png", w: 640, h: 400, alt: "OpenConvert popup converting GBP to JPY, accepting math in the amount field and converting one-to-many" },
        { src: "/projects/openconvert-sites.png", w: 640, h: 400, alt: "OpenConvert live price conversion settings for rewriting prices as you browse" },
        { src: "/projects/openconvert-settings.png", w: 640, h: 400, alt: "OpenConvert number formatting settings for decimal places and number format" },
      ],
    },
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
    blurb: "Real-time, multiplayer, conflict-free.",
    rarity: "rare",
    locked: true,
  },
  {
    id: "cli-tool",
    title: "CLI Tooling",
    blurb: "Fast, low-level, built for the terminal.",
    rarity: "rare",
    locked: true,
  },
];

export const projectsWithDetail = achievements.filter((a) => a.detail && !a.locked);
