import Reveal from '../components/Reveal'
import Badge from '../components/Badge'
import SectionHeading from '../components/SectionHeading'
import { experience } from '../data/resume'

export default function Experience() {
  return (
    <section id="experience" className="border-t border-[var(--border)] bg-[var(--bg-subtle)]/40 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Career"
            title="Experience"
            description="Career progression across enterprise product engineering, cloud/security architecture, and applied AI delivery."
          />
        </Reveal>

        <div className="space-y-14">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 80}>
              <div className="grid gap-6 border-l-2 border-[var(--border)] pl-6 sm:grid-cols-[220px_1fr] sm:gap-10">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text)]">{job.company}</h3>
                  <p className="mt-1 text-sm text-[var(--text-faint)]">{job.location}</p>
                  <div className="mt-3 space-y-1.5">
                    {job.roles.map((r) => (
                      <div key={r.title}>
                        <p className="text-sm font-medium text-[var(--accent)]">{r.title}</p>
                        <p className="font-mono text-xs text-[var(--text-faint)]">{r.period}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <ul className="space-y-3">
                    {job.bullets.map((b) => (
                      <li key={b.slice(0, 30)} className="flex gap-3 text-[14.5px] leading-relaxed text-[var(--text-muted)]">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
