import Reveal from '../components/Reveal'
import Badge from '../components/Badge'
import SectionHeading from '../components/SectionHeading'
import { projects } from '../data/resume'

export default function Projects() {
  return (
    <section id="projects" className="border-t border-[var(--border)] bg-[var(--bg-subtle)]/40 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Selected Work"
            title="Featured Projects"
            description="Production systems and initiatives — not tutorials. Details reflect actual scope and ownership."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 80}>
              <article className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 transition-shadow hover:shadow-lg hover:shadow-black/[0.03]">
                <h3 className="text-lg font-semibold text-[var(--text)]">{project.name}</h3>

                <div className="mt-4 space-y-3 text-[14px] leading-relaxed text-[var(--text-muted)]">
                  <p>
                    <span className="font-medium text-[var(--text)]">Problem: </span>
                    {project.problem}
                  </p>
                  <p>
                    <span className="font-medium text-[var(--text)]">Built: </span>
                    {project.built}
                  </p>
                  <p>
                    <span className="font-medium text-[var(--text)]">Approach: </span>
                    {project.approach}
                  </p>
                  <p>
                    <span className="font-medium text-[var(--text)]">Challenge: </span>
                    {project.challenges}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2 pt-1">
                  {project.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
