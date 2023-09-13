import React from 'react'
import * as Styled from './styles'
import { Title } from '..'
import { motion } from 'framer-motion'

export function Contact() {
  return (
    <Styled.ContainerMaster id="contact">
      <Title>Contato</Title>
      <motion.div
        transition={{ duration: 1, ease: 'linear', x: { duration: 1 } }}
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        <Styled.ContainerMasterContent>
          <Styled.ContainerContent href="https://api.whatsapp.com/send?phone=5511996076125">
            <Styled.IconWhatsAPP />
            <Styled.Text>Whatsapp</Styled.Text>
          </Styled.ContainerContent>

          <Styled.ContainerContent href="mailto:sairan.serra@gmail.com">
            <Styled.IconEmail />
            <Styled.Text>Email</Styled.Text>
          </Styled.ContainerContent>

          <Styled.ContainerContent href="https://www.linkedin.com/in/sairan-serra/">
            <Styled.IconLinkedin />
            <Styled.Text>Linkedin</Styled.Text>
          </Styled.ContainerContent>

          <Styled.ContainerContent href="https://github.com/SairanSerra">
            <Styled.IconGithub />
            <Styled.Text>Github</Styled.Text>
          </Styled.ContainerContent>
        </Styled.ContainerMasterContent>
      </motion.div>
    </Styled.ContainerMaster>
  )
}
