import { useThemeStore } from '@/store'

export const useNavbar = () => {
  const { setThemeState, theme } = useThemeStore()

  const handleChangeTheme = () => {
    const isThemeWhite = theme === 'white'
    if (isThemeWhite) {
      return setThemeState('dark')
    }
    return setThemeState('white')
  }
  return { handleChangeTheme, theme }
}
