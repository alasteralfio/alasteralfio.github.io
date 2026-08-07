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

const title = `${profile.name} · ${profile.role}`;
const description = `${profile.role}. ${profile.bio}`;

// OG image URLs need an absolute base. Vercel fills in the production domain;
// set NEXT_PUBLIC_SITE_URL once there's a custom one.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
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
        {/* Without JS the scroll reveals never fire and the page renders
            blank, so force everything to its resolved state. */}
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
