# alasteralfio.github.io

Personal portfolio built as a completionist / achievement-unlock system. Shipped work
renders as unlocked achievement cards, the roadmap as locked `???` cards, and a
live Ship30 bar tracks a public commitment to ship 30 small things.

## Stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Adding a shipped project

All content lives in [`lib/data.ts`](lib/data.ts). Nothing else needs to change.

To ship a locked roadmap entry:

1. Set `locked: false` on its entry.
2. Add `tags`, and `href` if the repo is public (or `note` explaining why not).
3. Add `shipNumber` if it is part of the Ship30 program.
4. Bump `ship30.shipped`.

The Ship30 counter tracks Ship30-program drops only. PSAT is an unlocked
achievement but is internship work, so it carries no `shipNumber` and does not
count toward the 30.

## Notes

- The `base` design token is named `ground` in `tailwind.config.ts`. Tailwind
  ships a core `text-base` font-size utility, so a `base` *color* would emit a
  second `.text-base` rule and silently repaint anything sizing text with
  `text-base` / `sm:text-base`.
- `body` (`#B6BCCB`) is a token added on top of the design doc's palette, for
  reading copy. `muted` is reserved for labels and metadata, and it is only 4.8:1
  on `surface`, which passes AA but reads dim over multiple lines.
- Every text/background pair on the page meets WCAG AA. Tag pills are recessed
  (`bg-ground/60`) rather than elevated because `muted` on `surfaceHi` is
  4.36:1, the one combination in the palette that misses.
- The social preview is generated at `app/opengraph-image.tsx` from the same
  `lib/data.ts` values, so it never drifts from the hero. It runs on the edge
  runtime: `@vercel/og`'s Node build fails to prerender on Windows.
- `metadataBase` reads `NEXT_PUBLIC_SITE_URL`, falling back to Vercel's
  production-domain env var. Set the former once a domain is chosen.
- Scroll reveals are Framer Motion; a `<noscript>` block in `app/layout.tsx`
  reveals everything when JS is unavailable.
- `prefers-reduced-motion` drops the desaturation and the gold unlock pulse and
  falls back to a plain fade.

## Deploy

Deploys on Vercel. There is no `output: "export"`, so image optimization works natively.
Disable GitHub Pages for this repo once Vercel is live so only one source serves
the site.
