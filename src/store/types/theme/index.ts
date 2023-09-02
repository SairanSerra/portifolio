import { Theme } from '@/@types'

export interface ThemeState {
  theme: Theme
  setThemeState: (theme: Theme) => void
}
