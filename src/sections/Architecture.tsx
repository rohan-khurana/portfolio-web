import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { architecture } from '../data/resume'

export default function Architecture() {
  return (
    <section id="architecture" className="border-t border-[var(--border)] bg-[var(--bg-subtle)]/40 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Engineering" title="Architecture & Systems" />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {architecture.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="h-full rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5">
                <h3 className="text-sm font-semibold text-[var(--text)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
