import { create } from 'zustand'
import { ThemeState } from '@/store/types'

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: 'dark',
  setThemeState: (theme) => set({ theme }),
}))
