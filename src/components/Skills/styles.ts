import tw from 'tailwind-styled-components'
import { Button } from '..'

export const ContainerMaster = tw.div`
h-full
w-full
flex
flex-col
items-center
gap-36
`

export const ContainerSkills = tw.div`
grid
grid-cols-2
gap-x-10
md:gap-x-4
sm:grid-cols-3
xl:grid-cols-5
2xl:grid-cols-7
xl:gap-x-10
md:grid-cols-4
px-10
transition-all
duration-500
w-full
`

export const WrapperButton = tw.div`
flex
gap-x-4
`
export const WrapperButtonMaster = tw.div`
flex
justify-center
gap-x-2
md:gap-x-60
`

export const WrapperContent = tw.div`
flex
flex-col
gap-y-20
`

export const CardSkill = tw.div`
cursor-pointer
border
border-purple
p-5
hover:shadow-lg
hover:shadow-purple
flex
justify-center
items-center
w-[200px]
h-[150px]
`

export const ButtonCustom = tw(Button)`
w-[100px]
text-sm
sm:w-[200px]
`
