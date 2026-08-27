import { useState } from 'react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { architecture } from '../data/resume'

const shortLabels: Record<string, string> = {
  'Cloud Architecture': 'Cloud',
  'Authentication & Authorization': 'Auth',
  'API & Backend Design': 'API',
  'CI/CD & Infrastructure as Code': 'CI/CD',
  Observability: 'Observability',
  'Security Governance': 'Security',
}

const RX = 40
const RY = 36

function nodePosition(index: number, total: number) {
  const angle = -Math.PI / 2 + (index * 2 * Math.PI) / total
  return {
    x: 50 + RX * Math.cos(angle),
    y: 50 + RY * Math.sin(angle),
  }
}

export default function Architecture() {
  const [active, setActive] = useState(0)
  const positions = architecture.map((_, i) => nodePosition(i, architecture.length))
  const activeItem = architecture[active]

  return (
    <section id="architecture" className="border-t border-[var(--border)] bg-[var(--bg-subtle)]/40 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Engineering"
            title="Architecture & Systems"
            description="Select a node to see how it fits into the systems I've designed and operated."
          />
        </Reveal>

        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div className="relative aspect-[16/11] w-full max-w-xl">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
                {positions.map((pos, i) => (
                  <line
                    key={architecture[i].title}
                    x1={50}
                    y1={50}
                    x2={pos.x}
                    y2={pos.y}
                    stroke={i === active ? 'var(--accent)' : 'var(--border)'}
                    strokeWidth={i === active ? 0.6 : 0.4}
                    vectorEffect="non-scaling-stroke"
                  />
                ))}
              </svg>

              <div
                className="absolute flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] font-mono text-[11px] text-[var(--text-faint)] shadow-sm"
                style={{ left: '50%', top: '50%' }}
              >
                systems
              </div>

              {architecture.map((item, i) => {
                const pos = positions[i]
                const isActive = i === active
                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className={`absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border px-3 py-2 text-center font-mono text-[11px] transition-all sm:text-xs ${
                      isActive
                        ? 'border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent-strong)] scale-110 shadow-md'
                        : 'border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--text)]'
                    }`}
                    style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                  >
                    {shortLabels[item.title] ?? item.title}
                  </button>
                )
              })}
            </div>

            <div
              key={activeItem.title}
              className="reveal is-visible rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6"
            >
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--accent)]">
                {String(active + 1).padStart(2, '0')} / {String(architecture.length).padStart(2, '0')}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-[var(--text)]">{activeItem.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{activeItem.description}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
