import Image from "next/image";
import type { ProjectImage } from "@/lib/data";

/**
 * "Minimal float" frame: the image sits on a soft surface panel with a thin
 * ring, a large soft shadow, and four small gold corner ticks. Deliberately
 * quiet — it lets the screenshot breathe rather than dressing it up.
 *
 * Images vary in aspect ratio, so the panel just wraps the image at its natural
 * ratio; next/image gets intrinsic w/h and scales down responsively.
 */

const CORNERS = [
  "left-2 top-2 border-l-2 border-t-2 rounded-tl-sm",
  "right-2 top-2 border-r-2 border-t-2 rounded-tr-sm",
  "left-2 bottom-2 border-l-2 border-b-2 rounded-bl-sm",
  "right-2 bottom-2 border-r-2 border-b-2 rounded-br-sm",
];

export default function ImageFrame({
  image,
  priority = false,
  sizes = "(min-width: 768px) 700px, 100vw",
}: {
  image: ProjectImage;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <figure className="space-y-3">
      <div className="relative rounded-2xl bg-surface p-2.5 shadow-[0_28px_70px_-28px_rgba(0,0,0,0.8)] ring-1 ring-white/10 sm:p-3">
        <div className="overflow-hidden rounded-xl bg-ground/40">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.w}
            height={image.h}
            priority={priority}
            sizes={sizes}
            className="h-auto w-full"
          />
        </div>

        {/* Gold corner ticks — the only accent. */}
        {CORNERS.map((c) => (
          <span
            key={c}
            aria-hidden
            className={`pointer-events-none absolute h-4 w-4 border-gold/70 ${c}`}
          />
        ))}
      </div>
    </figure>
  );
}
