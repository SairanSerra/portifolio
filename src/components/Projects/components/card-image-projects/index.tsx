import React from 'react'
import type { CardImageProjects } from '../../types'
import * as Styled from './styles'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export function CardImageProjects({
  image,
  urlRedirect,
  description,
}: CardImageProjects) {
  const { push } = useRouter()
  return (
    <Styled.ContainerMaster onClick={() => push(urlRedirect)}>
      <Styled.TextDescription>{description}</Styled.TextDescription>
      <Styled.ContainerContent>
        <Image src={image} alt="Imagem do projeto" fill />
      </Styled.ContainerContent>
    </Styled.ContainerMaster>
  )
}
