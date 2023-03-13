import React from 'react'
import { Header, SideMenu } from '../../modules'
import { Container, MainSection } from './messenger-styled'

export const Messenger: React.FC = () => {
  return (
    <Container>
      <Header />
      <MainSection>
        <SideMenu />
      </MainSection>
    </Container>
  )
}
