import tw from 'tailwind-styled-components'
import { TypeAnimation } from 'react-type-animation'
import type { Theme } from '@/@types'

export const ContainerMaster = tw.div`
flex
flex-col
gap-5

`

export const Title = tw(TypeAnimation)<{ $theme: Theme }>`
text-2xl
md:text-5xl
${({ $theme }) => ($theme === 'dark' ? 'text-white' : 'text-purple')}
`

export const TextDescription = tw.p`
text-justify
text-gray
w-full
md:w-[650px]
`
