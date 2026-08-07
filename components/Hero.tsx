import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="px-5 pb-10 pt-28 sm:px-8 sm:pb-12 sm:pt-36"
    >
      <div className="mx-auto max-w-content">
        <div className="rounded-3xl border border-white/10 bg-surface p-7 sm:p-10 lg:p-14">
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
            {profile.roleDetail} · {profile.status}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
            {profile.bio}
          </p>
        </div>
      </div>
    </section>
  );
}
