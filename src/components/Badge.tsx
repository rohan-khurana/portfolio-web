export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-[var(--border)] bg-[var(--bg-subtle)] px-2.5 py-1 font-mono text-xs text-[var(--text-muted)]">
      {children}
    </span>
  )
}
