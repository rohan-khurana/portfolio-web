import { useEffect, useState } from 'react'
import { profile } from '../data/resume'

export const OPEN_RESUME_EVENT = 'open-resume'

export function openResumePreview() {
  window.dispatchEvent(new Event(OPEN_RESUME_EVENT))
}

export default function ResumeModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onOpen = () => setOpen(true)
    window.addEventListener(OPEN_RESUME_EVENT, onOpen)
    return () => window.removeEventListener(OPEN_RESUME_EVENT, onOpen)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [open])

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Resume preview"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
    >
      <button
        type="button"
        aria-label="Close resume preview"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      <div className="relative flex h-full max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] shadow-2xl">
        <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-3">
          <p className="font-mono text-sm text-[var(--text-muted)]">resume.pdf</p>
          <div className="flex items-center gap-2">
            <a
              href={profile.resumeUrl}
              download
              className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Download
            </a>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <iframe src={profile.resumeUrl} title="Rohan Khurana — Resume" className="h-full w-full flex-1 bg-white" />
      </div>
    </div>
  )
}
