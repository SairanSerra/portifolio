import { MenuNavBarState } from '@/store'
import { create } from 'zustand'

export const useMenuNavBarStore = create<MenuNavBarState>((set, get) => ({
  menuOpen: false,
  setOpenMenu: (menuOpen: boolean) => set({ menuOpen }),
}))
