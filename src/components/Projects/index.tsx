import React from 'react'
import * as Styled from './styles'
import { Title } from '..'
import { CardImageProjects } from './components'
import { listProjects } from './object'
import { motion } from 'framer-motion'

export function Projects() {
  return (
    <Styled.ContainerMaster>
      <Title>Projetos</Title>
      <motion.div
        transition={{ duration: 1, ease: 'linear', x: { duration: 1 } }}
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        <Styled.WrapperContent>
          {listProjects.map((element) => (
            <CardImageProjects
              key={element.id}
              image={element.image}
              urlRedirect={element.urlRedirect}
              description={element.description}
            />
          ))}
        </Styled.WrapperContent>
      </motion.div>
    </Styled.ContainerMaster>
  )
}
