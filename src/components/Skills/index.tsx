import React from 'react'
import * as Styled from './styles'
import { Title } from '..'
import { Card } from './components'
import { motion } from 'framer-motion'
import { useSkills } from './hooks'

export function Skills() {
  const {
    listSkill,
    handleChangeTypeListToAll,
    handleChangeTypeListToBackEnd,
    handleChangeTypeListToFrontEnd,
    skillAllSelected,
    skillBackEndSelected,
    skillFrontEndSelected,
  } = useSkills()

  return (
    <Styled.ContainerMaster>
      <Title>Habilidades</Title>
      <motion.div
        transition={{ duration: 1, ease: 'linear', x: { duration: 1 } }}
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        <Styled.WrapperContent>
          <Styled.WrapperButtonMaster>
            <Styled.WrapperButton>
              <Styled.ButtonCustom
                selected={skillAllSelected}
                onClick={handleChangeTypeListToAll}
              >
                Todas
              </Styled.ButtonCustom>
              <Styled.ButtonCustom
                selected={skillFrontEndSelected}
                onClick={handleChangeTypeListToFrontEnd}
              >
                Front-End
              </Styled.ButtonCustom>
              <Styled.ButtonCustom
                selected={skillBackEndSelected}
                onClick={handleChangeTypeListToBackEnd}
              >
                Back-End
              </Styled.ButtonCustom>
            </Styled.WrapperButton>
          </Styled.WrapperButtonMaster>

          <Styled.ContainerSkills>
            {listSkill.map(({ name, icon }, id) => (
              <Card Icon={icon} skill={name} key={id} />
            ))}
          </Styled.ContainerSkills>
        </Styled.WrapperContent>
      </motion.div>
    </Styled.ContainerMaster>
  )
}
