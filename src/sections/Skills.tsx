import Reveal from '../components/Reveal'
import Badge from '../components/Badge'
import SectionHeading from '../components/SectionHeading'
import { skills } from '../data/resume'

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <Reveal>
        <SectionHeading eyebrow="Toolbox" title="Technical Skills" />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 60}>
            <div className="h-full rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5 transition-colors hover:border-[var(--accent)]/50">
              <h3 className="text-sm font-semibold text-[var(--text)]">{group.category}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
