import React from 'react'
import { CommonAva } from '../../../../components'
import { Message, MessageInfo } from './UserMessage-styled'
// import { theme } from '../../../../theme'

export interface Props {
  isMyMessage?: boolean
}

export const UserMessage: React.FC<Props> = ({ isMyMessage = false }) => {
  return (
    <Message isMyMessage={isMyMessage}>
      <div className="ava">
        <CommonAva isShowStatusIcon={false} />
      </div>
      <MessageInfo isMyMessage={isMyMessage}>
        <div className="name-and-time">
          <p className="name">Stephen Park</p>
          <p className="time">17:31</p>
        </div>
        <div className="text-wrapper">
          <p className="text">
            Every large design company whether it’s a multi-national branding
            corporation or a regular down at heel tatty magazine publisher needs
            to fill holes in the workforce. If the canny freelance designer
            plays his or her cards right, he can earn a tidy sum while
            essentially.
          </p>
        </div>
      </MessageInfo>
    </Message>
  )
}
