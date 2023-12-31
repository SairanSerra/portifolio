import type { Theme } from '@/@types'
import tw from 'tailwind-styled-components'

export const ContainerMaster = tw.div<{ $theme: Theme }>`
w-full
h-full
transition-all 
duration-1000
flex
flex-col
gap-24

${({ $theme }) => ($theme === 'dark' ? 'bg-dark' : 'bg-white')}
`
export const ContainerContent = tw.div`
px-8
flex 
flex-col
gap-40
z-[99]
`

export const ContainerNavbar = tw.div`
fixed z-[9999] w-full
`
