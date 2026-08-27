import avatar from '../assets/profile.jpg'
import { profile } from '../data/resume'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <img
              src={avatar}
              alt={profile.name}
              className="h-11 w-11 rounded-full border border-[var(--border)] object-cover"
            />
            <p className="font-mono text-sm text-[var(--accent)]">
              Hi, I'm {profile.name.split(' ')[0]} — {profile.title}
            </p>
          </div>

          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-[var(--text)] sm:text-5xl lg:text-[3.4rem]">
            I build secure, scalable backend systems —
            <span className="text-[var(--text-muted)]"> and now, production RAG platforms.</span>
          </h1>

          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-[var(--text-muted)]">
            {profile.yearsExperience} years designing enterprise .NET services, architecting
            multi-cloud infrastructure, and leading authentication/security modernization at UKG —
            now shipping AI-powered chatbot platforms across cloud, single-tenant, and air-gapped
            deployments at Embrace Software.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {profile.heroKeywords.map((k) => (
              <span
                key={k}
                className="rounded-full border border-[var(--border)] px-3 py-1 font-mono text-xs text-[var(--text-muted)]"
              >
                {k}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={profile.resumeUrl}
              download
              className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-[var(--bg)] transition-transform hover:scale-[1.03]"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Contact Me
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

          <p className="mt-8 text-sm text-[var(--text-faint)]">{profile.location}</p>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] font-mono text-[13px] shadow-sm">
            <div className="flex items-center gap-1.5 border-b border-[var(--border)] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--border)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--border)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--border)]" />
              <span className="ml-2 text-[var(--text-faint)]">system-status</span>
            </div>
            <div className="space-y-3 px-4 py-5 text-[var(--text-muted)]">
              <div className="flex items-center justify-between">
                <span>rag_pipeline</span>
                <span className="flex items-center gap-2 text-[var(--accent)]">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
                  </span>
                  online
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>auth_service</span>
                <span className="text-[var(--accent)]">healthy</span>
              </div>
              <div className="flex items-center justify-between">
                <span>stack</span>
                <span className="text-[var(--text-faint)]">.net · react · llm</span>
              </div>
              <div className="flex items-center justify-between">
                <span>deploy_target</span>
                <span className="text-[var(--text-faint)]">cloud · on-prem</span>
              </div>
              <div className="mt-4 border-t border-[var(--border)] pt-4">
                <p className="text-[var(--text-faint)]">$ uptime --experience</p>
                <p className="mt-1 text-[var(--text)]">4+ years, 3 clouds, 0 downtime migrations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
