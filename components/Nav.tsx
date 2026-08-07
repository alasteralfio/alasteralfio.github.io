"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#ship30", label: "Ship30" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ground/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-content items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#top"
          className="font-display text-sm font-bold tracking-tight text-ink transition-colors hover:text-gold sm:text-base"
        >
          ALASTER
        </a>

        <ul className="flex items-center gap-4 sm:gap-7">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-ink sm:text-xs"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
