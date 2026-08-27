import { profile } from '../data/resume'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-[var(--border)] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center sm:flex-row sm:justify-between sm:text-left sm:px-8">
        <div>
          <p className="text-sm font-semibold text-[var(--text)]">{profile.name}</p>
          <p className="text-xs text-[var(--text-faint)]">{profile.tagline}</p>
        </div>
        <div className="flex items-center gap-5 text-xs text-[var(--text-muted)]">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--accent)]">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-[var(--accent)]">
            GitHub
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-[var(--accent)]">
            Email
          </a>
        </div>
        <p className="text-xs text-[var(--text-faint)]">
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  )
}
