import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const EVENT = 'themechange'

function getInitialTheme(): Theme {
  const stored = localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
  localStorage.setItem('theme', theme)
}

// Shared across every component instance so the navbar toggle, command
// palette, and any future control stay in sync without lifting state.
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  useEffect(() => {
    const onExternalChange = (e: Event) => {
      const next = (e as CustomEvent<Theme>).detail
      if (next && next !== theme) setThemeState(next)
    }
    window.addEventListener(EVENT, onExternalChange)
    return () => window.removeEventListener(EVENT, onExternalChange)
  }, [theme])

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next)
    window.dispatchEvent(new CustomEvent(EVENT, { detail: next }))
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme, setTheme])

  return { theme, setTheme, toggleTheme }
}
