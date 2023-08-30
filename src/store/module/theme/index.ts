import Cookies from 'js-cookie'
import { create } from 'zustand'
import { ThemeState } from '@/store/types'
import { persist } from 'zustand/middleware'

export const useThemeStore = create(
  persist<ThemeState>(
    (set, get) => ({
      theme: 'white',
      setThemetate: (theme) => set({ theme }),
    }),
    {
      name: 'theme',
      storage: {
        getItem: () => {
          const storedData = Cookies.get('theme')
          return storedData ? JSON.parse(storedData) : undefined
        },
        setItem: (key, value) => {
          Cookies.set('theme', JSON.stringify(value), { expires: 99999 })
        },
        removeItem: () => {
          Cookies.set('theme', '', { expires: -1 })
        },
      },
    },
  ),
)
