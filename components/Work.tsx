import { achievements } from "@/lib/data";
import AchievementCard from "./AchievementCard";
import Section from "./Section";

export default function Work() {
  const unlocked = achievements.filter((a) => !a.locked);
  const locked = achievements.filter((a) => a.locked);

  return (
    <Section id="work" label="Achievements" title="Work">
      <div className="grid gap-5 md:grid-cols-2">
        {unlocked.map((item) => (
          <AchievementCard key={item.id} item={item} />
        ))}
      </div>

      {locked.length > 0 && (
        <>
          <div className="mt-14 mb-6 flex items-center gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Locked · {locked.length} remaining
            </span>
            <span aria-hidden className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {locked.map((item) => (
              <AchievementCard key={item.id} item={item} />
            ))}
          </div>
        </>
      )}
    </Section>
  );
}
