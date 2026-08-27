import Reveal from '../components/Reveal'
import { profile } from '../data/resume'

export default function GitHubSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <Reveal>
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-[var(--text)]">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
            </svg>
            <div>
              <h3 className="text-base font-semibold text-[var(--text)]">Code & contributions</h3>
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                {profile.github.replace('https://', '')}
              </p>
            </div>
          </div>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            View GitHub Profile
          </a>
        </div>
      </Reveal>
    </section>
  )
}
