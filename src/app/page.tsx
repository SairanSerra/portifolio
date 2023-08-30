import React from 'react'
import { NavBar } from '@/components'
import Image from 'next/image'
import * as Styled from './styles'

export default function Home() {
  return (
    <Styled.ContainerMaster>
      <NavBar />
    </Styled.ContainerMaster>
  )
}
