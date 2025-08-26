export type IThemeMode = 'light' | 'dark' | 'system'

export type IThemeContextData = {
  theme: IThemeMode
  resolvedTheme: Exclude<IThemeMode, 'system'>
  toggleTheme: () => void
  setTheme: (theme: IThemeMode) => void
}
