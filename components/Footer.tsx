import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-content flex-col gap-2 px-5 py-10 font-mono text-[11px] uppercase tracking-[0.14em] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with Next.js · Deployed on Vercel</span>
      </div>
    </footer>
  );
}
