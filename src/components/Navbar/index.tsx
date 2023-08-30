'use client'
import React from 'react'
import * as Styled from './styles'
import { itemsNavbar } from './object'

export function NavBar() {
  return (
    <Styled.ContainerMaster>
      <Styled.ContainerText>
        <Styled.Title>Sairan Serra</Styled.Title>
      </Styled.ContainerText>
      <Styled.ContainerItems>
        {itemsNavbar.map(({ id, name, path }) => (
          <Styled.Items href={path} key={id}>
            {name}
          </Styled.Items>
        ))}
      </Styled.ContainerItems>
    </Styled.ContainerMaster>
  )
}
