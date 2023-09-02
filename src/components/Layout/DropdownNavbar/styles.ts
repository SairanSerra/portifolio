import tw from 'tailwind-styled-components'

export const ContainerMaster = tw.div``

export const ContainerItems = tw.div<{ $openMenu: boolean }>`
absolute 
top-20 
right-0 
divide-y 
divide-gray-100 
rounded-b-sm
shadow 
w-full
ease-in-out 
duration-300
bg-purple
${({ $openMenu }) => ($openMenu ? 'block' : 'hidden')}
`

export const ListItems = tw.div`
py-2
flex
flex-col
justify-center
items-center
pr-4
`
export const Item = tw.a`
px-4
py-2
relative
group
text-lg
cursor-pointer
hidden
lg:flex
`

export const LineTopAnimation = tw.div`
absolute 
top-0 
left-0 
w-0 
h-0 
transition-all 
duration-500 
border-t-2 
border-white 
group-hover:w-full 
ease
`
export const LineButtomAnimation = tw.div`
absolute 
bottom-0 
right-0 
w-0 
h-0 
transition-all 
duration-500 
border-b-2 
border-white 
group-hover:w-full 
ease"
`
