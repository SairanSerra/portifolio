'use client'
import React from 'react'
import { NavBar, AboutMe, Skills } from '@/components'
import * as Styled from './styles'
import { useDropdownNavBar } from '@/components/Layout/hooks'
import { useThemeStore } from '@/store'

export default function Home() {
  const { ref, setOpenMenu } = useDropdownNavBar()
  const { theme } = useThemeStore()
  return (
    <Styled.ContainerMaster $theme={theme} ref={ref}>
      <div className="fixed z-50 w-full">
        <NavBar />
      </div>

      <Styled.ContainerContent onClick={() => setOpenMenu(false)}>
        <AboutMe />
        <Skills />
      </Styled.ContainerContent>
    </Styled.ContainerMaster>
  )
}
