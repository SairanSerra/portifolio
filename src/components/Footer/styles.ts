import tw from 'tailwind-styled-components'
import { PiCopyrightFill } from 'react-icons/pi'

export const ContainerMaster = tw.div`
bg-purple
w-full
h-10
flex
justify-center
p-5
items-center
`

export const WrapperText = tw.div`
flex
items-center
gap-2
`

export const Icons = tw(PiCopyrightFill)`
text-xl
`

export const Text = tw.p`
font-bold
`
