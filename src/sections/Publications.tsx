import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { publications } from '../data/resume'

export default function Publications() {
  return (
    <section id="publications" className="border-t border-[var(--border)] bg-[var(--bg-subtle)]/40 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Research" title="Publications" />
        </Reveal>

        <div className="space-y-4">
          {publications.map((pub, i) => (
            <Reveal key={pub.title} delay={i * 80}>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold text-[var(--text)]">
                    {pub.link ? (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noreferrer"
                        className="underline decoration-[var(--border)] underline-offset-4 transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
                      >
                        {pub.title}
                      </a>
                    ) : (
                      pub.title
                    )}
                  </h3>
                  <span className="font-mono text-xs text-[var(--text-faint)]">{pub.year}</span>
                </div>
                <p className="mt-1 text-sm text-[var(--accent)]">{pub.venue}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{pub.description}</p>
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1 font-mono text-xs text-[var(--text-faint)] hover:text-[var(--accent)]"
                  >
                    View publication ↗
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
