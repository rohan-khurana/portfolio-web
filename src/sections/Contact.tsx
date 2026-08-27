import Reveal from '../components/Reveal'
import { preferredLocations, profile } from '../data/resume'

export default function Contact() {
  return (
    <section id="contact" className="border-t border-[var(--border)] py-24">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            Contact
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
            Let's build something great.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-[var(--text-muted)]">
            Open to conversations about backend engineering, cloud architecture, and applied AI
            roles. Reach out directly — I usually reply within a day.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-[var(--accent)] px-6 py-2.5 text-sm font-medium text-[var(--bg)] transition-transform hover:scale-[1.03]"
            >
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              GitHub
            </a>
          </div>

          <p className="mt-6 text-sm text-[var(--text-faint)]">{profile.location}</p>

          <div className="mx-auto mt-10 max-w-md rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5 text-left font-mono text-[13px]">
            <p className="text-[var(--text-faint)]">$ whereami --open-to</p>
            <p className="mt-2 flex flex-wrap gap-x-1.5 gap-y-1 text-[var(--text)]">
              {preferredLocations.cities.map((city, i) => (
                <span key={city}>
                  {city}
                  {i < preferredLocations.cities.length - 1 && <span className="text-[var(--text-faint)]"> ·</span>}
                </span>
              ))}
            </p>
            <p className="mt-3 text-[var(--text-faint)]">$ mode --preferred</p>
            <p className="mt-2 text-[var(--accent)]">
              {preferredLocations.modes.join('  or  ')}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
