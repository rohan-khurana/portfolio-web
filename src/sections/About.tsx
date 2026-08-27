import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { about } from '../data/resume'

export default function About() {
  const paragraphs = about.trim().split('\n\n')

  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal>
        <SectionHeading eyebrow="About" title="Engineer across backend, cloud, and applied AI" />
      </Reveal>
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
        <Reveal className="space-y-5 text-[15px] leading-relaxed text-[var(--text-muted)]">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </Reveal>
        <Reveal delay={120}>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Years of experience', value: '4+' },
              { label: 'Clouds worked with', value: 'Azure · AWS · GCP' },
              { label: 'Research publications', value: '2' },
              { label: 'Companies', value: '3' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5"
              >
                <p className="text-xl font-semibold text-[var(--text)]">{stat.value}</p>
                <p className="mt-1 text-xs text-[var(--text-faint)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
