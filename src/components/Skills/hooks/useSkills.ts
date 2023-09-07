import { useState } from 'react'
import { listStackBackEnd, listStackFrontEnd } from '../object'
import type { TypeListSkill } from '../types'

export const useSkills = () => {
  const allSkills = listStackFrontEnd.concat(listStackBackEnd)
  const [typeListSkills, setTypeListSkills] = useState('ALL')
  const [listSkill, setListSkill] = useState<TypeListSkill[]>(allSkills)

  const handleChangeTypeListToAll = () => {
    setTypeListSkills('ALL')
    setListSkill(allSkills)
  }
  const handleChangeTypeListToBackEnd = () => {
    setTypeListSkills('BACKEND')
    setListSkill(listStackBackEnd)
  }
  const handleChangeTypeListToFrontEnd = () => {
    setTypeListSkills('FRONTEND')
    setListSkill(listStackFrontEnd)
  }

  const skillAllSelected = typeListSkills === 'ALL'
  const skillBackEndSelected = typeListSkills === 'BACKEND'
  const skillFrontEndSelected = typeListSkills === 'FRONTEND'

  return {
    handleChangeTypeListToFrontEnd,
    handleChangeTypeListToBackEnd,
    handleChangeTypeListToAll,
    listSkill,
    skillAllSelected,
    skillBackEndSelected,
    skillFrontEndSelected,
  }
}
