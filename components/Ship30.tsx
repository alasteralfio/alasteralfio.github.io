import { ship30 } from "@/lib/data";
import ArrowIcon from "./ArrowIcon";
import ProgressBar from "./ProgressBar";
import Section from "./Section";

export default function Ship30() {
  const remaining = ship30.total - ship30.shipped;

  return (
    <Section id="ship30" label="Progress" title="Ship30">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="space-y-5 text-base leading-relaxed text-body sm:text-lg">
          <p>
            A public commitment to ship {ship30.total} small, finished things.
            The bar for each one is that it gets released and solves a real
            annoyance.
          </p>
          <p>
            Each drop gets its own repo and shows up here as an achievement. The
            count is public so that stalling is obvious.
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
            <ArrowIcon />
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
