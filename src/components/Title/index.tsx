import React from 'react'
import type { TitleProps } from '../types'
import * as Styled from './styles'
import { useThemeStore } from '@/store'
import { motion } from 'framer-motion'

export function Title({ children }: TitleProps) {
  const { theme } = useThemeStore()
  return (
    <motion.div
      transition={{ duration: 1, ease: 'linear', x: { duration: 1 } }}
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 0, opacity: 1 }}
    >
      <Styled.ContainerMaster>
        <Styled.Content $theme={theme}>{children}</Styled.Content>
      </Styled.ContainerMaster>
    </motion.div>
  )
}
