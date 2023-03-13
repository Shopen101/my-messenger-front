import React from 'react'
import { Header, SideMenu } from '../../modules'
import { MessengerSection } from '../../modules/messanger-section/MessengerSection'
import { Container, MainSection } from './messenger-styled'

export const Messenger: React.FC = () => {
  return (
    <Container>
      <Header />
      <MainSection>
        <SideMenu />
        <MessengerSection />
      </MainSection>
    </Container>
  )
}
