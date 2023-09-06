import { PropsCard } from '@/components/types'
import React, { useState } from 'react'
import * as Styled from './styles'

export const Card = ({ Icon, skill }: PropsCard) => {
  const [showTextLegend, setShowTextLegend] = useState(false)
  return (
    <Styled.ContainerMaster
      onMouseOut={() => setShowTextLegend(false)}
      onMouseOver={() => setShowTextLegend(true)}
    >
      <Styled.WrapperText $showLegend={showTextLegend}>
        {skill}
      </Styled.WrapperText>
      <Styled.CardSkill>
        <Icon color="#5525C9" size={40} />
      </Styled.CardSkill>
    </Styled.ContainerMaster>
  )
}
