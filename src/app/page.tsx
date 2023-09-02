'use client'
import React from 'react'
import { NavBar, TitleWithAboutMe } from '@/components'
import * as Styled from './styles'
import { useDropdownNavBar } from '@/components/Layout/hooks'
import { useThemeStore } from '@/store'

export default function Home() {
  const { menuOpen, ref } = useDropdownNavBar()
  const { theme } = useThemeStore()
  return (
    <Styled.ContainerMaster $theme={theme} ref={ref}>
      <NavBar />
      <Styled.ContainerContent $openMenu={menuOpen}>
        <TitleWithAboutMe />
      </Styled.ContainerContent>
    </Styled.ContainerMaster>
  )
}
