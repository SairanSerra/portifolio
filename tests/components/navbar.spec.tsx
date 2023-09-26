import { fireEvent, render } from '@testing-library/react'
import { usePathname } from 'next/navigation'
import { NavBar } from '../../src/components'
import '@testing-library/jest-dom'

import React from 'react'

describe('navbar elements', () => {
  it('render elements correct', () => {
    const { getByText } = render(<NavBar />)
    expect(getByText('Sairan Serra')).toBeVisible()
    expect(getByText('Sobre mim')).toBeVisible()
    expect(getByText('Habilidades')).toBeVisible()
    expect(getByText('Projetos')).toBeVisible()
    expect(getByText('Contato')).toBeVisible()
  })

  it('verify callback to click button about me', () => {
    const { queryByText } = render(<NavBar />)
    const buttonAboutMe = queryByText('Sobre mim')

    fireEvent.click(buttonAboutMe!)
    usePathname.mockReturnValue('http://localhost/#aboutme')
    const pathname = usePathname()
    expect(pathname).toEqual('http://localhost/#aboutme')
  })
  it('verify callback to click button Skills', () => {
    const { queryByText } = render(<NavBar />)
    const buttonSkills = queryByText('Habilidades')

    fireEvent.click(buttonSkills!)
    usePathname.mockReturnValue('http://localhost/#skills')
    const pathname = usePathname()
    expect(pathname).toEqual('http://localhost/#skills')
  })

  it('verify callback to click button projects', () => {
    const { queryByText } = render(<NavBar />)
    const buttonProjects = queryByText('Projetos')

    fireEvent.click(buttonProjects!)
    usePathname.mockReturnValue('http://localhost/#projects')
    const pathname = usePathname()
    expect(pathname).toEqual('http://localhost/#projects')
  })

  it('verify callback to click button contact', () => {
    const { queryByText } = render(<NavBar />)
    const buttonContact = queryByText('Contato')

    fireEvent.click(buttonContact!)
    usePathname.mockReturnValue('http://localhost/#contact')
    const pathname = usePathname()
    expect(pathname).toEqual('http://localhost/#contact')
  })
})
