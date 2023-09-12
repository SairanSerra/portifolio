import tw from 'tailwind-styled-components'

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
w-[100px]
sm:w-[150px]
sm:h-[100px]
lg:w-[200px]
lg:h-[150px]
transition-all
duration-300
`
export const ContainerMaster = tw.div`
h-[150px]
sm:h-[150px]
md:h-[150px]
lg:h-[200px]
w-full
transition-all
duration-300
`

export const WrapperText = tw.div<{ $showLegend: boolean }>`
text-center
bg-purple
w-[100px]
sm:w-[150px]
lg:w-[200px]
rounded-t-md
transition-all
duration-300
overflow-hidden
${({ $showLegend }) => ($showLegend ? 'h-auto' : 'h-0')}
`
