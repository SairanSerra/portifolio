import tw from 'tailwind-styled-components'

export const ContainerMaster = tw.div`
h-full
w-full
flex
flex-col
gap-36
mb-96
`

export const ContainerSkills = tw.div`
grid
grid-cols-1
gap-x-10
md:gap-x-4
lg:grid-cols-5
lg:gap-x-2
md:grid-cols-4
px-10
`

export const WrapperButton = tw.div`
flex
gap-x-2
md:gap-x-60
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
