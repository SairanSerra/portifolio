import tw from 'tailwind-styled-components'

export const ContainerMaster = tw.a`
transition-transform
duration-200
md:hover:scale-105
lg:hover:scale-x-110
`
export const ContainerContent = tw.div`
relative
w-[300px]
h-[150px]
sm:w-[450px]
sm:h-[250px]
cursor-pointer
border-4
border-purple
border-t-0
hover:shadow-purple
hover:shadow-2xl
`

export const TextDescription = tw.p`
cursor-pointer
bg-purple
transition-all
pl-2
h-10
flex
flex-col
justify-center
rounded-t-md
w-[300px]
text-sm
sm:text-base
sm:w-[450px]
`
