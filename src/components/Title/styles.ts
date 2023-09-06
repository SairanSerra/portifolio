import { Theme } from '@/@types'
import tw from 'tailwind-styled-components'

export const ContainerMaster = tw.div`
text-center
flex
justify-center
`

export const Content = tw.p<{ $theme: Theme }>`
border
border-purple
shadow-lg
shadow-purple
p-4
font-bold
text-3xl
rounded
${({ $theme }) => ($theme === 'dark' ? 'text-white' : 'text-purple')}
`
