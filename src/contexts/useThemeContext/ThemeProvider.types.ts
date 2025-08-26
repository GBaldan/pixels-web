export type ITheme = 'light' | 'dark' | 'system'

export type IThemeContextData = {
  theme: ITheme
  resolvedTheme: Exclude<ITheme, 'system'>
  toggleTheme: () => void
  setTheme: (theme: ITheme) => void
}
