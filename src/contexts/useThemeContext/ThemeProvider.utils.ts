import type { ITheme } from './ThemeProvider.types'

export function getSystemTheme(): Exclude<ITheme, 'system'> {
  if (typeof window === 'undefined') return 'light'

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function applyThemeClass(theme: Exclude<ITheme, 'system'>): void {
  const root = document.documentElement
  root.classList.remove('light', 'dark')
  root.classList.add(theme)
}

export const THEME_STORAGE_KEY = 'app_theme'
