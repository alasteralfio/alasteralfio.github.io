import { ship30 } from "@/lib/data";
import ProgressBar from "./ProgressBar";
import Section from "./Section";

export default function Ship30() {
  const remaining = ship30.total - ship30.shipped;

  return (
    <Section id="ship30" label="Progress" title="Ship30">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          <p>
            A public commitment to ship {ship30.total} small, finished things.
            Not side projects that rot in a branch — things that get released and
            solve one real annoyance.
          </p>
          <p>
            Each drop gets its own repo and becomes an achievement here. Keeping
            the count public is the point: it is harder to stall when the number
            is visible.
          </p>
          <p className="text-ink">
            {ship30.shipped} shipped. {remaining} to go.
          </p>

          <a
            href={ship30.logHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 pt-1 font-mono text-xs uppercase tracking-[0.14em] text-teal transition-colors hover:text-ink"
          >
            Running log on GitHub
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5"
              aria-hidden
            >
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </a>
        </div>

        <div className="rounded-3xl border border-white/10 bg-surface/60 p-7 sm:p-9">
          <p className="font-display text-5xl font-extrabold tracking-tight text-ink sm:text-6xl">
            {ship30.shipped}
            <span className="text-muted">/{ship30.total}</span>
          </p>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Drops shipped
          </p>

          <div className="mt-8">
            <ProgressBar
              shipped={ship30.shipped}
              total={ship30.total}
              size="lg"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
