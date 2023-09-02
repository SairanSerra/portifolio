'use client'
import React from 'react'
import * as Styled from './styles'
import { DropDownNavBar } from '../DropdownNavbar'
import { SwitchTheme } from '@/components'
import { useThemeStore } from '@/store'
import { useNavbar } from '../hooks'

export function NavBar() {
  const { handleChangeTheme } = useNavbar()
  return (
    <Styled.ContainerMaster>
      <DropDownNavBar />
      <Styled.Title>Sairan Serra</Styled.Title>
      <SwitchTheme onClick={handleChangeTheme} />
    </Styled.ContainerMaster>
  )
}
