import tw from 'tailwind-styled-components'
import { TypeAnimation } from 'react-type-animation'
import type { Theme } from '@/@types'
import Lottie from 'lottie-react'

export const ContainerMaster = tw.div`
items-center
justify-between
mt-44
block
lg:flex
`

export const WrapperText = tw.div`
flex
flex-col
items-center
lg:items-start
gap-5
`

export const Title = tw(TypeAnimation)<{ $theme: Theme }>`
text-xl
sm:text-2xl
md:text-5xl
${({ $theme }) => ($theme === 'dark' ? 'text-white' : 'text-purple')}
`

export const TextDescription = tw.p`
text-justify
text-gray
w-full
md:w-[650px]
`
export const Image = tw(Lottie)``
