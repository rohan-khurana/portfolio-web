import { useEffect, useState } from 'react'
import { nav, profile } from '../data/resume'
import { OPEN_PALETTE_EVENT } from './CommandPalette'
import { openResumePreview } from './ResumeModal'
import ThemeToggle from './ThemeToggle'

const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform ?? navigator.userAgent)

export default function Navbar() {
  const [active, setActive] = useState<string>('')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = nav
      .map((n) => document.querySelector(n.href))
      .filter((el): el is Element => !!el)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled
          ? 'border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight text-[var(--text)]">
          {profile.name.split(' ').map((w) => w[0]).join('')}
          <span className="text-[var(--accent)]">.</span>
        </a>

        <ul className="hidden items-center gap-5 xl:gap-6 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`whitespace-nowrap text-[13px] transition-colors hover:text-[var(--text)] ${
                  active === item.href ? 'text-[var(--text)] font-medium' : 'text-[var(--text-muted)]'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event(OPEN_PALETTE_EVENT))}
            className="flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--text-faint)] transition-colors hover:border-[var(--accent)] hover:text-[var(--text-muted)]"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <kbd className="font-mono">{isMac ? '⌘K' : 'Ctrl K'}</kbd>
          </button>
          <ThemeToggle />
          <button
            type="button"
            onClick={openResumePreview}
            className="whitespace-nowrap rounded-full border border-[var(--border)] px-4 py-1.5 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Resume
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            aria-label="Search"
            onClick={() => window.dispatchEvent(new Event(OPEN_PALETTE_EVENT))}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text)]"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text)]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[var(--border)] bg-[var(--bg)] px-5 pb-5 lg:hidden">
          <ul className="flex flex-col gap-1 pt-3">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2.5 text-sm text-[var(--text-muted)] hover:bg-[var(--bg-subtle)] hover:text-[var(--text)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setOpen(false)
                  openResumePreview()
                }}
                className="block w-full rounded-md border border-[var(--border)] px-2 py-2.5 text-center text-sm font-medium text-[var(--text)]"
              >
                View Resume
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
