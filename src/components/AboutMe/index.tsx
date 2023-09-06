'use client'
import React from 'react'
import * as Styled from './styles'
import { useThemeStore } from '@/store'
import { AnimatePresence, motion } from 'framer-motion'
import ImageDeveloper from '@/public/image-developer.json'
import Lottie from 'lottie-react'

export function AboutMe() {
  const { theme } = useThemeStore()
  return (
    <AnimatePresence>
      <motion.div
        transition={{ duration: 1, ease: 'linear', x: { duration: 1 } }}
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
      >
        <Styled.ContainerMaster>
          <Styled.WrapperText>
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
              Sou um desenvolvedor full-stack com um amor pela programação e uma
              visão para criar experiências digitais excepcionais. Minha paixão
              é a resolução de problemas através do código, combinando
              habilidades front-end e back-end para entregar soluções funcionais
              e inovadoras. Estou sempre em busca de novos desafios e
              oportunidades para colaborar em projetos emocionantes. Vamos
              transformar ideias em realidade!
            </Styled.TextDescription>
          </Styled.WrapperText>

          <Styled.Image animationData={ImageDeveloper} loop={true} />
        </Styled.ContainerMaster>
      </motion.div>
    </AnimatePresence>
  )
}
