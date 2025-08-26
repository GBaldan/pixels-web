'use client'

// External Libraries
import type React from 'react'
import {
  useState,
  useEffect,
  useContext,
  useCallback,
  createContext,
  type PropsWithChildren
} from 'react'

// Utils
import {
  applyThemeClass,
  THEME_STORAGE_KEY,
  resolveSystemTheme
} from './ThemeProvider.utils'

// Types
import type { IThemeMode, IThemeContextData } from './ThemeProvider.types'

const ThemeContext = createContext<IThemeContextData | null>(null)

const ThemeContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  // States
  const [theme, setThemeState] = useState<IThemeMode>('system')
  const [resolvedTheme, setResolvedTheme] = useState(resolveSystemTheme)

  // Functions
  const setTheme = useCallback((newTheme: IThemeMode) => {
    localStorage.setItem(THEME_STORAGE_KEY, newTheme)
    setThemeState(newTheme)

    const final =
      newTheme === 'system'
        ? resolveSystemTheme()
        : (newTheme as Exclude<IThemeMode, 'system'>)

    applyThemeClass(final)
    setResolvedTheme(final)
  }, [])

  const toggleTheme = useCallback(() => {
    const next =
      theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'

    setTheme(next)
  }, [theme, setTheme])

  useEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY) as IThemeMode | null
    const initial = stored ?? 'system'

    setTheme(initial)
  }, [setTheme])

  useEffect(() => {
    if (theme !== 'system') return

    const listener = (e: MediaQueryListEvent) => {
      if (theme === 'system') {
        const systemTheme = e.matches ? 'dark' : 'light'
        setTheme(systemTheme)
      }
    }

    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    mql.addEventListener('change', listener)

    return () => mql.removeEventListener('change', listener)
  }, [theme, setTheme])

  return (
    <ThemeContext.Provider
      value={{ theme, resolvedTheme, setTheme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

function useTheme(): IThemeContextData {
  const context = useContext(ThemeContext)

  if (!context) throw new Error('useTheme must be within a ContextProvider')
  return context
}

export { ThemeContextProvider, useTheme }
