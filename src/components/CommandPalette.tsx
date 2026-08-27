import { useEffect, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react'
import { nav, profile } from '../data/resume'
import { useTheme } from '../hooks/useTheme'
import { openResumePreview } from './ResumeModal'

export const OPEN_PALETTE_EVENT = 'open-command-palette'

type Command = {
  id: string
  label: string
  hint?: string
  group: 'Navigate' | 'Actions'
  run: () => void
  /** Keep the palette open after running (e.g. to show inline feedback). */
  keepOpen?: boolean
}

function downloadResume() {
  const a = document.createElement('a')
  a.href = profile.resumeUrl
  a.download = 'Rohan_Khurana_Resume.pdf'
  document.body.appendChild(a)
  a.click()
  a.remove()
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const [copied, setCopied] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const { toggleTheme } = useTheme()

  const commands = useMemo<Command[]>(() => {
    const navCommands: Command[] = nav.map((item) => ({
      id: `nav-${item.href}`,
      label: item.label,
      hint: 'Jump to section',
      group: 'Navigate',
      run: () => {
        document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      },
    }))

    const actionCommands: Command[] = [
      {
        id: 'preview-resume',
        label: 'Preview resume',
        hint: 'Open inline',
        group: 'Actions',
        run: openResumePreview,
      },
      {
        id: 'download-resume',
        label: 'Download resume',
        hint: 'PDF',
        group: 'Actions',
        run: downloadResume,
      },
      {
        id: 'copy-email',
        label: 'Copy email address',
        hint: profile.email,
        group: 'Actions',
        run: () => {
          navigator.clipboard?.writeText(profile.email)
          setCopied(true)
          window.setTimeout(() => setCopied(false), 1500)
        },
        keepOpen: true,
      },
      {
        id: 'open-linkedin',
        label: 'Open LinkedIn',
        hint: 'New tab',
        group: 'Actions',
        run: () => window.open(profile.linkedin, '_blank', 'noreferrer'),
      },
      {
        id: 'open-github',
        label: 'Open GitHub',
        hint: 'New tab',
        group: 'Actions',
        run: () => window.open(profile.github, '_blank', 'noreferrer'),
      },
      {
        id: 'toggle-theme',
        label: 'Toggle light / dark theme',
        group: 'Actions',
        run: toggleTheme,
        keepOpen: true,
      },
    ]

    return [...navCommands, ...actionCommands]
  }, [toggleTheme])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return commands
    return commands.filter(
      (c) => c.label.toLowerCase().includes(q) || c.hint?.toLowerCase().includes(q),
    )
  }, [commands, query])

  useEffect(() => {
    setActiveIndex(0)
  }, [query, open]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const isK = e.key.toLowerCase() === 'k'
      if ((e.metaKey || e.ctrlKey) && isK) {
        e.preventDefault()
        setOpen((v) => !v)
      }
    }
    const onOpenEvent = () => setOpen(true)
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener(OPEN_PALETTE_EVENT, onOpenEvent)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener(OPEN_PALETTE_EVENT, onOpenEvent)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    setQuery('')
    const t = window.setTimeout(() => inputRef.current?.focus(), 10)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.clearTimeout(t)
      document.body.style.overflow = prevOverflow
    }
  }, [open])

  const runActive = () => {
    const cmd = filtered[activeIndex]
    if (!cmd) return
    cmd.run()
    if (!cmd.keepOpen) setOpen(false)
  }

  const onKeyDownInput = (e: ReactKeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setOpen(false)
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      runActive()
    }
  }

  if (!open) return null

  let renderedGroup: string | null = null

  return (
    <div role="dialog" aria-modal="true" aria-label="Command palette" className="fixed inset-0 z-[110] flex items-start justify-center px-4 pt-24 sm:pt-32">
      <button
        type="button"
        aria-label="Close command palette"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] shadow-2xl">
        <div className="flex items-center gap-3 border-b border-[var(--border)] px-4 py-3">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="shrink-0 text-[var(--text-faint)]">
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDownInput}
            placeholder="Jump to a section, copy email, toggle theme…"
            className="w-full bg-transparent text-sm text-[var(--text)] outline-none placeholder:text-[var(--text-faint)]"
            aria-label="Command palette search"
          />
          <kbd className="rounded border border-[var(--border)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--text-faint)]">
            esc
          </kbd>
        </div>

        <ul role="listbox" className="max-h-80 overflow-y-auto py-2">
          {filtered.length === 0 && (
            <li className="px-4 py-6 text-center text-sm text-[var(--text-faint)]">No matches</li>
          )}
          {filtered.map((cmd, i) => {
            const showHeader = cmd.group !== renderedGroup
            renderedGroup = cmd.group
            return (
              <li key={cmd.id}>
                {showHeader && (
                  <p className="px-4 pb-1 pt-3 font-mono text-[10px] uppercase tracking-wider text-[var(--text-faint)]">
                    {cmd.group}
                  </p>
                )}
                <button
                  type="button"
                  role="option"
                  aria-selected={i === activeIndex}
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => {
                    cmd.run()
                    if (!cmd.keepOpen) setOpen(false)
                  }}
                  className={`flex w-full items-center justify-between gap-3 px-4 py-2 text-left text-sm transition-colors ${
                    i === activeIndex ? 'bg-[var(--bg-subtle)] text-[var(--text)]' : 'text-[var(--text-muted)]'
                  }`}
                >
                  <span>
                    {cmd.id === 'copy-email' && copied ? 'Copied!' : cmd.label}
                  </span>
                  {cmd.hint && (
                    <span className="font-mono text-xs text-[var(--text-faint)]">{cmd.hint}</span>
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
