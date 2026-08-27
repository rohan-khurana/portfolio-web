export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-[15px] leading-relaxed text-[var(--text-muted)]">{description}</p>}
    </div>
  )
}
