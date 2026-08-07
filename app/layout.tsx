import type { Metadata, Viewport } from "next";
import { Unbounded, Inter, JetBrains_Mono } from "next/font/google";
import { profile } from "@/lib/data";
import "./globals.css";

const display = Unbounded({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const description = `${profile.role} — ${profile.bio}`;

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description,
    type: "website",
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#14171E",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>
        {/* Scroll reveals never fire without JS, which would leave the page
            blank. Show everything in its resolved state instead. */}
        <noscript>
          <style>{`
            .js-reveal { opacity: 1 !important; filter: none !important; transform: none !important; }
            .js-bar { transform: scaleX(var(--mask)) !important; }
          `}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
