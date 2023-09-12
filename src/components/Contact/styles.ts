import tw from 'tailwind-styled-components'
import { ImWhatsapp } from 'react-icons/im'
import { MdOutlineEmail } from 'react-icons/md'
import { VscGithubInverted } from 'react-icons/vsc'
import { BiLogoLinkedin } from 'react-icons/bi'

export const ContainerMaster = tw.div`
flex
flex-col
gap-36
`

export const IconWhatsAPP = tw(ImWhatsapp)`
text-xl
sm:text-2xl
md:text-4xl
lg:text-5xl
text-purple
`

export const IconEmail = tw(MdOutlineEmail)`
text-xl
sm:text-2xl
md:text-4xl
lg:text-5xl
text-purple
`

export const IconGithub = tw(VscGithubInverted)`
text-xl
sm:text-2xl
md:text-4xl
lg:text-5xl
text-purple
`
export const IconLinkedin = tw(BiLogoLinkedin)`
text-xl
sm:text-2xl
md:text-4xl
lg:text-5xl
text-purple
`

export const Text = tw.p`
text-lg
sm:text-xl
md:text-2xl
lg:text-2xl
text-purple
`

export const ContainerMasterContent = tw.div`
grid
grid-col-2
sm:flex
sm:justify-center
gap-10
sm:gap-16
md:gap-28
lg:gap-52
`

export const ContainerContent = tw.a`
flex
flex-col
justify-center
items-center
gap-4
cursor-pointer
hover:scale-105
hover:shadow-purple

`
