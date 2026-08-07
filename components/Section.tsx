interface SectionProps {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
}

export default function Section({ id, label, title, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="mx-auto max-w-content px-5 py-10 sm:px-8 sm:py-14"
    >
      <div className="mb-8 sm:mb-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold">
          {label}
        </p>
        <h2
          id={headingId}
          className="mt-3 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl"
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
