import React from 'react'
import { SwitchThemProps } from '../types'
import * as Styled from './styles'
import { useThemeStore } from '@/store'

export function SwitchTheme({ onClick }: SwitchThemProps) {
  const { theme } = useThemeStore()
  return (
    <div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          defaultChecked
          value=""
          className="sr-only peer"
          onClick={onClick}
        />
        <div className="w-14 h-6 flex justify-end peer-checked:justify-start items-center border border-white peer-focus:outline-none  rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:after:left-[13.5px] after:content-[''] after:absolute after:top-[2px] after:bg-white  after:rounded-full after:left-[2px] after:h-5 after:w-5 after:transition-all ">
          {theme === 'dark' ? <Styled.IconDark /> : <Styled.IconLight />}
        </div>
      </label>
    </div>
  )
}
