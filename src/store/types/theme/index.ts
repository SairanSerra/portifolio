export type Theme = 'dark' | 'white'

export interface ThemeState {
    theme: Theme
    setThemetate: (theme: Theme) => void
}