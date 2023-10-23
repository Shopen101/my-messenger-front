import React, { useRef } from 'react'
import { CommonAva } from '../../../../components'
import { Message, MessageInfo } from './UserMessage-styled'

export interface Props {
  isMyMessage?: boolean
  text: string
  userName: string
  time: string
  iref?: any
}

export const UserMessage: React.FC<Props> = ({ isMyMessage = false, text, userName, time, iref }) => {
  const mockRef = useRef(null)
  return (
    <Message ref={iref || mockRef} isMyMessage={isMyMessage}>
      <div className="ava">
        <CommonAva isShowStatusIcon={false} />
      </div>
      <MessageInfo isMyMessage={isMyMessage}>
        <div className="name-and-time">
          <p className="name">{userName}</p>
          <p className="time">{time}</p>
        </div>
        <div className="text-wrapper">
          <p className="text">{text}</p>
        </div>
      </MessageInfo>
    </Message>
  )
}
