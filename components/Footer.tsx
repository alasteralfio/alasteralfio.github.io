import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-content justify-end px-5 py-10 font-mono text-[11px] uppercase tracking-[0.14em] text-muted sm:px-8">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
      </div>
    </footer>
  );
}
