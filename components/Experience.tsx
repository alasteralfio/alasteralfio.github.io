import { experience } from "@/lib/data";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" label="History" title="Work Experience">
      <ol className="space-y-4">
        {experience.map((job) => (
          <li
            key={`${job.company}-${job.period}`}
            className="rounded-2xl border border-white/10 bg-surface p-6 sm:p-7"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
                {job.company}
              </h3>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                {job.period}
              </span>
            </div>

            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-gold">
              {job.role}
            </p>

            <ul className="mt-4 space-y-2.5">
              {job.points.map((point, i) => (
                <li
                  key={i}
                  className="relative pl-5 text-sm leading-relaxed text-body sm:text-[15px]"
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-[0.6em] h-1 w-1 rounded-full bg-muted"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
