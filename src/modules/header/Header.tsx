import React from 'react'
import { HeaderContainer, MessengerTop, Menu, MenuTab } from './header-styled'
import { Logo } from '../../components'
import { useStore } from '../../hooks/useStore'
import { SimpleButton } from '../../components/Button/Button'
import { useSocket } from '../../hooks/useSocket'

export const Header: React.FC = () => {
  const store = useStore()
  const socket = useSocket()

  return (
    <HeaderContainer>
      <Logo />
      <MessengerTop>
        <Menu>
          <MenuTab>
            <p>О нас</p>
            <p onClick={() => socket.emit('connection1')}>Новости</p>
          </MenuTab>
          <SimpleButton text={'Выйти'} variant="contained" onClick={() => store.logout()} size="small" />
        </Menu>
      </MessengerTop>
    </HeaderContainer>
  )
}
