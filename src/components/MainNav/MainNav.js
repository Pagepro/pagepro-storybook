import React from 'react'
import {
  MainNavStyled,
  MainNavItemStyled,
  MainNavLinkStyled,
} from './styledComponents'
import { Typo7 } from '../Typography/Typography'

const MainNav = () => {
  const items = [
    {
      label: 'Projects',
      href: '#',
    },
    {
      label: 'Services',
      href: '#',
    },
    {
      label: 'About',
      href: '#',
    },
    {
      label: 'Career',
      href: '#',
    },
    {
      label: 'Blog',
      href: '#',
    },
    {
      label: 'Contact us',
      href: '#',
    },
  ]
  return (
    <MainNavStyled>
      {items.map(({ label, href }, key) => (
        <MainNavItemStyled key={key}>
          <MainNavLinkStyled href={href}>
            <Typo7>{label}</Typo7>
          </MainNavLinkStyled>
        </MainNavItemStyled>
      ))}
    </MainNavStyled>
  )
}

export default MainNav
