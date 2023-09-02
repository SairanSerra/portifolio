'use client'
import React from 'react'
import * as Styled from './styles'
import { useThemeStore } from '@/store'

export function TitleWithAboutMe() {
  const { theme } = useThemeStore()
  return (
    <Styled.ContainerMaster>
      {theme === 'dark' && (
        <Styled.Title
          $theme={theme}
          sequence={[
            'Desenvolvedor Full-Stack ',
            2500,
            'Desenvolvedor Front-End ',
            2500,
            'Desenvolvedor Back-End ',
            2500,
            'Desenvolvedor Mobile ',
            2500,
          ]}
          wrapper="b"
          speed={30}
          repeat={Infinity}
        />
      )}
      {theme === 'white' && (
        <Styled.Title
          $theme={theme}
          sequence={[
            'Desenvolvedor Full-Stack ',
            2500,
            'Desenvolvedor Front-End ',
            2500,
            'Desenvolvedor Back-End ',
            2500,
            'Desenvolvedor Mobile ',
            2500,
          ]}
          wrapper="b"
          speed={30}
          repeat={Infinity}
        />
      )}
      <Styled.TextDescription>
        Sou um desenvolvedor full-stack com um amor pela programação e uma visão
        para criar experiências digitais excepcionais. Minha paixão é a
        resolução de problemas através do código, combinando habilidades
        front-end e back-end para entregar soluções funcionais e inovadoras.
        Estou sempre em busca de novos desafios e oportunidades para colaborar
        em projetos emocionantes. Vamos transformar ideias em realidade!
      </Styled.TextDescription>
    </Styled.ContainerMaster>
  )
}
