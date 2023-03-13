import React from 'react'
import { HeaderContainer, MessengerTop, Menu } from './header-styled'
import { InputSearch, Logo } from '../../components'

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo />
      <MessengerTop>
        <Menu>
          <p>О нас</p>
          <p>Новости</p>
        </Menu>
        <InputSearch />
      </MessengerTop>
    </HeaderContainer>
  )
}
