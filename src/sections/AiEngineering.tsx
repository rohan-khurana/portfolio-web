import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { aiExpertise } from '../data/resume'

export default function AiEngineering() {
  return (
    <section id="ai-engineering" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="Applied AI"
          title="AI & Engineering Expertise"
          description="AI capability grounded in shipped production systems — not research claims."
        />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2">
        {aiExpertise.map((item, i) => (
          <Reveal key={item.title} delay={i * 60}>
            <div className="flex gap-4 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5">
              <span className="mt-0.5 font-mono text-xs text-[var(--accent)]">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="text-sm font-semibold text-[var(--text)]">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-muted)]">{item.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
