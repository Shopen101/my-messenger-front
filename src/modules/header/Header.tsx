import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HeaderContainer, MessengerTop, Menu, MenuTab } from './header-styled'
import { Logo } from '../../components'
import { useStore } from '../../hooks/useStore'
import { SimpleButton } from '../../components/Button/Button'
import { useSocket } from '../../hooks/useSocket'

export const Header: React.FC = () => {
  const store = useStore()
  const socket = useSocket()

  const navigate = useNavigate()

  const logout = () => {
    navigate('/auth')
    store.logout()
  }

  return (
    <HeaderContainer>
      <Logo />
      <MessengerTop>
        <Menu>
          <MenuTab>
            <p>О нас</p>
            <p onClick={() => socket.emit('connection1')}>Новости</p>
          </MenuTab>
          <SimpleButton text={'Выйти'} variant="contained" onClick={logout} size="small" />
        </Menu>
      </MessengerTop>
    </HeaderContainer>
  )
}
