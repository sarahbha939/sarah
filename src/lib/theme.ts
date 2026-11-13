import { useCallback, useEffect, useState } from 'react'
import type { Theme } from '../types.ts'

export type ColorMode = 'light' | 'dark'

/** Where the visitor's light/dark choice is saved in their browser. */
export const STORAGE_KEY = 'portfolio-theme'

const FONTS: Record<Theme['font'], string> = {
  sans: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  serif: 'Charter, "Bitstream Charter", "Iowan Old Style", Georgia, Cambria, serif',
  mono: 'ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace',
}

/** Puts the accent colours and font from data.ts onto the page as CSS variables (see index.css). */
export function applyTheme(theme: Theme) {
  const root = document.documentElement.style
  root.setProperty('--accent-light', theme.accent)
  root.setProperty('--accent-dark', theme.accentDark || theme.accent)
  root.setProperty('--font', FONTS[theme.font] ?? FONTS.sans)
}

function systemMode(): ColorMode {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function savedMode(): ColorMode | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    return null
  }
}

/**
 * Light/dark mode. Starts from the visitor's saved choice, then THEME.mode,
 * then their device setting. A small script in index.html applies it before
 * the page paints, so there's no flash of the wrong colours.
 */
export function useColorMode(defaultMode: Theme['mode']) {
  const [mode, setMode] = useState<ColorMode>(() => {
    const current = document.documentElement.dataset.theme
    if (current === 'light' || current === 'dark') return current
    return savedMode() ?? (defaultMode === 'system' ? systemMode() : defaultMode)
  })

  useEffect(() => {
    document.documentElement.dataset.theme = mode
  }, [mode])

  // Follow the device setting until the visitor picks one themselves.
  useEffect(() => {
    if (defaultMode !== 'system') return
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      if (!savedMode()) setMode(media.matches ? 'dark' : 'light')
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [defaultMode])

  const toggle = useCallback(() => {
    setMode((m) => {
      const next = m === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // Private browsing can block storage. The toggle still works for this visit.
      }
      return next
    })
  }, [])

  return { mode, toggle }
}
