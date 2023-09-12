'use client'
import React from 'react'
import {
  NavBar,
  AboutMe,
  Skills,
  Projects,
  Contact,
  Footer,
} from '@/components'
import * as Styled from './styles'
import { useDropdownNavBar } from '@/components/Layout/hooks'
import { useThemeStore } from '@/store'

export default function Home() {
  const { ref, setOpenMenu } = useDropdownNavBar()
  const { theme } = useThemeStore()
  return (
    <Styled.ContainerMaster $theme={theme} ref={ref}>
      <Styled.ContainerNavbar className="">
        <NavBar />
      </Styled.ContainerNavbar>
      <Styled.ContainerContent onClick={() => setOpenMenu(false)}>
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </Styled.ContainerContent>
      <Footer />
    </Styled.ContainerMaster>
  )
}
