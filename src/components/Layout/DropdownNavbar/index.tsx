import React from 'react'
import * as Styled from './styles'
import { Button } from '@/components'
import { HiMenu } from 'react-icons/hi'
import { useMenuNavBarStore } from '@/store'
import { itemsNavbar } from '../object'

export function DropDownNavBar() {
  const { menuOpen, setOpenMenu } = useMenuNavBarStore()
  return (
    <Styled.ContainerMaster onClick={() => setOpenMenu(!menuOpen)}>
      <Button autoChange={false}>
        <HiMenu size={20} />
      </Button>
      <Styled.ContainerItems $openMenu={menuOpen}>
        <Styled.ListItems>
          {itemsNavbar.map((element) => (
            <Styled.Item
              href={element.path}
              onClick={() => setOpenMenu(!menuOpen)}
              key={element.id}
            >
              {element.name}
              <Styled.LineTopAnimation />
              <Styled.LineButtomAnimation />
            </Styled.Item>
          ))}
        </Styled.ListItems>
      </Styled.ContainerItems>
    </Styled.ContainerMaster>
  )
}
