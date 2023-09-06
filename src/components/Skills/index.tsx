import React from 'react'
import * as Styled from './styles'
import { Button, Title } from '..'
import { listStackFrontEnd, listStackBackEnd } from './object'
import { Card } from './components'
import { AnimatePresence, motion } from 'framer-motion'

export function Skills() {
  const listelements = listStackBackEnd
  return (
    <AnimatePresence presenceAffectsLayout>
      <motion.div
        layoutScroll
        transition={{ duration: 1, ease: 'linear', x: { duration: 1 } }}
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
      >
        <Styled.ContainerMaster>
          <Title>Habilidades</Title>
          <Styled.WrapperButton>
            <Button>Todos</Button>
            <Button>Front-End</Button>
            <Button>Back-End</Button>
          </Styled.WrapperButton>
          <Styled.ContainerSkills>
            {listelements.map(({ name, icon }, id) => (
              <Card Icon={icon} skill={name} key={id} />
            ))}
          </Styled.ContainerSkills>
        </Styled.ContainerMaster>
      </motion.div>
    </AnimatePresence>
  )
}
