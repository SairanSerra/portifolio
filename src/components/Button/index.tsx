import React from 'react'
import * as Styled from './styles'
import { ButtonProps } from '../types'

export function Button({ type = 'button', children }: ButtonProps) {
  return (
    <>
      <Styled.Button type={type}>
        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-500 border-t-2 border-purple-200 group-hover:w-full ease"></span>
        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-500 border-b-2 border-purple-200 group-hover:w-full ease"></span>
        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-500 delay-200 bg-purple-200 group-hover:h-full ease"></span>
        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-500 delay-200 bg-purple-200 group-hover:h-full ease"></span>
        <span className="absolute inset-0 w-full h-full duration-500 delay-300 bg-purple opacity-0 group-hover:opacity-100"></span>
        <span className="relative transition-colors duration-300 delay-300 group-hover:text-white ease">
          {children}
        </span>
      </Styled.Button>
    </>
  )
}
