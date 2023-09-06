import React from 'react'
import type { TitleProps } from '../types'
import * as Styled from './styles'
import { useThemeStore } from '@/store'

export function Title({ children }: TitleProps) {
  const { theme } = useThemeStore()
  return (
    <Styled.ContainerMaster>
      <Styled.Content $theme={theme}>{children}</Styled.Content>
    </Styled.ContainerMaster>
  )
}
