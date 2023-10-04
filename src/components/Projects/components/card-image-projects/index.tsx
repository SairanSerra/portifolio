import React from 'react'
import type { CardImageProjects } from '../../types'
import * as Styled from './styles'
import Image from 'next/image'

export function CardImageProjects({
  image,
  urlRedirect,
  description,
}: CardImageProjects) {
  return (
    <Styled.ContainerMaster href={urlRedirect} target="_blank">
      <Styled.TextDescription>{description}</Styled.TextDescription>
      <Styled.ContainerContent>
        <Image src={image} alt="Imagem do projeto" fill />
      </Styled.ContainerContent>
    </Styled.ContainerMaster>
  )
}
