import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { achievements, education } from '../data/resume'

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal>
        <SectionHeading eyebrow="Background" title="Education & Achievements" />
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          {education.map((edu) => (
            <div key={edu.school} className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6">
              <h3 className="text-base font-semibold text-[var(--text)]">{edu.school}</h3>
              <p className="mt-1 text-sm text-[var(--text-muted)]">{edu.degree}</p>
              <p className="mt-3 text-sm text-[var(--text-faint)]">{edu.location}</p>
              <p className="font-mono text-xs text-[var(--text-faint)]">{edu.period}</p>
              <p className="mt-2 text-sm font-medium text-[var(--accent)]">{edu.detail}</p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={100}>
          <ul className="space-y-3">
            {achievements.map((a) => (
              <li
                key={a.title}
                className="flex items-start justify-between gap-4 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium text-[var(--text)]">{a.title}</p>
                  <p className="mt-0.5 text-xs text-[var(--text-muted)]">{a.detail}</p>
                </div>
                <span className="shrink-0 font-mono text-xs text-[var(--text-faint)]">{a.year}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
