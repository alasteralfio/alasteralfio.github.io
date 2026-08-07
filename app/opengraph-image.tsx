import { ImageResponse } from "next/og";
import { profile, ship30 } from "@/lib/data";

/**
 * Edge runtime: `@vercel/og`'s Node build resolves its bundled assets with
 * `fileURLToPath` and throws `Invalid URL` when prerendering on Windows.
 * The edge build has no such step, and it is what Vercel runs anyway.
 */
export const runtime = "edge";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${profile.name} — ${profile.role}`;

/**
 * The hero "player card", rendered as the social preview.
 *
 * Deliberately no custom font fetch: `next/og` bundles a default face, and
 * pulling Unbounded would mean a build-time request for a TTF (satori cannot
 * read the woff2 that Google serves by default). Not worth the fragility.
 */
export default function OpengraphImage() {
  const ratio = ship30.shipped / ship30.total;
  const pct = Math.round(ratio * 100);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#14171E",
          padding: "0 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            background: "#1C2029",
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: 32,
            padding: 56,
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#E8B34D",
              fontSize: 20,
              letterSpacing: 7,
            }}
          >
            PLAYER CARD
          </div>

          <div
            style={{
              display: "flex",
              color: "#EDEEF2",
              fontSize: 78,
              fontWeight: 800,
              letterSpacing: -2,
              marginTop: 22,
            }}
          >
            {profile.name}
          </div>

          <div
            style={{
              display: "flex",
              color: "#B6BCCB",
              fontSize: 30,
              marginTop: 18,
            }}
          >
            {profile.role}
          </div>

          <div
            style={{
              display: "flex",
              color: "#868C9C",
              fontSize: 19,
              letterSpacing: 2,
              marginTop: 12,
            }}
          >
            LTA PSAT INTERN · DIP. DIGITAL DESIGN &amp; DEVELOPMENT, RP
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 52,
              fontSize: 20,
              letterSpacing: 3,
            }}
          >
            <div style={{ display: "flex", color: "#EDEEF2" }}>
              {ship30.shipped}/{ship30.total} SHIPPED
            </div>
            <div style={{ display: "flex", color: "#E8B34D" }}>{pct}%</div>
          </div>

          <div
            style={{
              display: "flex",
              height: 16,
              marginTop: 14,
              borderRadius: 99,
              background: "#232838",
              overflow: "hidden",
            }}
          >
            {/* Clips a full-track-width gradient rather than squashing the
                whole ramp into the fill, so early progress reads gold — the
                same reason the site's bar masks instead of scaling. Track
                width is fixed: 1200 - (72 page + 56 card + 1 border) * 2. */}
            <div
              style={{
                display: "flex",
                width: `${ratio * 100}%`,
                borderRadius: 99,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 942,
                  height: "100%",
                  background: "linear-gradient(90deg, #E8B34D, #4FD1C5)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
