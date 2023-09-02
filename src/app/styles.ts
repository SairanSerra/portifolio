import type { Theme } from '@/@types'
import tw from 'tailwind-styled-components'

export const ContainerMaster = tw.div<{ $theme: Theme }>`
w-screen
h-screen
transition-all 
duration-700
${({ $theme }) => ($theme === 'dark' ? 'bg-dark' : 'bg-white')}
`
export const ContainerContent = tw.div<{ $openMenu: boolean }>`
p-8
${({ $openMenu }) => ($openMenu ? 'mt-44' : 'mt-0')}
`
