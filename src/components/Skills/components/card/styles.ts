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
w-[200px]
h-[150px]
transition-all
duration-300
`
export const ContainerMaster = tw.div`
h-[230px]
w-full
transition-all
duration-300
`

export const WrapperText = tw.div<{ $showLegend: boolean }>`
text-center
bg-purple
w-[200px]
rounded-t-md
transition-all
duration-300
overflow-hidden
${({ $showLegend }) => ($showLegend ? 'h-auto' : 'h-0')}
`
