import tw from 'tailwind-styled-components'

export const ContainerMaster = tw.div`
h-20
bg-purple
rounded-sm
px-24
flex
justify-between
items-center
`

export const ContainerText = tw.div``

export const Title = tw.p`
text-lg
font-bold
`

export const ContainerItems = tw.div`
hidden
lg:flex
gap-8
`

export const Items = tw.a`
text-lg
cursor-pointer
hover:underline underline-offset-8
hover:animate-pulse
`
