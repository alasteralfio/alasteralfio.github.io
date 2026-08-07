import { profile, ship30 } from "@/lib/data";
import ProgressBar from "./ProgressBar";

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden px-5 pb-12 pt-28 sm:px-8 sm:pb-16 sm:pt-36"
    >
      {/* Soft gold bloom — depth without a template gradient wash. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[52rem] max-w-none -translate-x-1/2 -translate-y-1/3 rounded-full bg-gold/[0.07] blur-[120px]"
      />

      <div className="relative mx-auto max-w-content">
        <div className="rounded-3xl border border-white/10 bg-surface/60 p-7 backdrop-blur-sm sm:p-10 lg:p-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold">
            Player Card
          </p>

          <h1
            id="hero-heading"
            className="mt-5 font-display text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </h1>

          <p className="mt-5 font-display text-lg font-semibold text-ink sm:text-xl">
            {profile.role}
          </p>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.1em] text-muted sm:text-[13px]">
            {profile.roleDetail}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.bio}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="rounded-full bg-gold px-5 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-ground transition-colors hover:bg-gold/85"
            >
              View work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-ink transition-colors hover:border-white/30 hover:bg-surfaceHi"
            >
              Get in touch
            </a>
          </div>

          <hr className="my-9 border-white/10" />

          <ProgressBar shipped={ship30.shipped} total={ship30.total} />
        </div>
      </div>
    </section>
  );
}
