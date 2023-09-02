import { useMenuNavBarStore } from '@/store'
import { useEffect } from 'react'
import { useResizeDetector } from 'react-resize-detector'

export const useDropdownNavBar = () => {
  const { width, ref } = useResizeDetector()
  const { menuOpen, setOpenMenu } = useMenuNavBarStore()
  useEffect(() => {
    const isCloseMenu = width! >= 1024
    if (isCloseMenu) {
      setOpenMenu(false)
    }
  }, [width])

  return {
    setOpenMenu,
    menuOpen,
    ref,
  }
}
