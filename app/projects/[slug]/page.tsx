import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArrowIcon, { BackArrowIcon } from "@/components/ArrowIcon";
import Footer from "@/components/Footer";
import ImageFrame from "@/components/ImageFrame";
import Nav from "@/components/Nav";
import { achievements, profile, projectsWithDetail } from "@/lib/data";

interface Params {
  params: { slug: string };
}

const find = (slug: string) =>
  achievements.find((a) => a.id === slug && a.detail && !a.locked);

export function generateStaticParams() {
  return projectsWithDetail.map((p) => ({ slug: p.id }));
}

export function generateMetadata({ params }: Params): Metadata {
  const project = find(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} · ${profile.name}`,
    description: project.blurb,
  };
}

export default function ProjectPage({ params }: Params) {
  const project = find(params.slug);
  if (!project) notFound();

  const detail = project.detail!;
  const [cover, ...gallery] = detail.images ?? [];

  return (
    <>
      <Nav />

      <main id="main" className="mx-auto max-w-3xl px-5 pb-16 pt-28 sm:px-8 sm:pt-32">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink"
        >
          <BackArrowIcon />
          Back to projects
        </Link>

        <h1 className="mt-8 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
          {project.title}
        </h1>

        {detail.timeframe && (
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-gold">
            {detail.timeframe}
          </p>
        )}

        {project.tags && project.tags.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-ground/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted ring-1 ring-inset ring-white/5"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        {cover && (
          <div className="mt-10">
            <ImageFrame image={cover} priority sizes="(min-width: 768px) 720px, 100vw" />
          </div>
        )}

        <Prose heading="Overview" paragraphs={detail.overview} />
        <Prose heading="Reflection" paragraphs={detail.reflection} />

        {gallery.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
              Gallery
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {gallery.map((image) => (
                <ImageFrame
                  key={image.src}
                  image={image}
                  sizes="(min-width: 768px) 340px, 100vw"
                />
              ))}
            </div>
          </section>
        )}

        {(project.href || project.note) && (
          <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8">
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-teal transition-colors hover:text-ink"
              >
                {project.hrefLabel ?? "View source"}
                <ArrowIcon className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            )}
            {project.note && (
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                {project.note}
              </p>
            )}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}

function Prose({
  heading,
  paragraphs,
}: {
  heading: string;
  paragraphs: string[];
}) {
  return (
    <section className="mt-12">
      <h2 className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
        {heading}
      </h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-body sm:text-[17px]">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
