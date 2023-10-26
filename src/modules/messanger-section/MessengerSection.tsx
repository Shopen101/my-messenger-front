import React, { useEffect, useState, useContext, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { CommonAva, IconButtons, InputSearch, MessengerBase } from '../../components'
import { MessangerInput, MessengerTop } from './components'
import {
  ControlPanel,
  Dialogs,
  MessagesFullHeight,
  Messenger,
  UserBlock,
  UserList,
  UserListScroll,
} from './messenger-section-styled'
import GroupsIcon from '@mui/icons-material/Groups'
import PhoneIcon from '@mui/icons-material/Phone'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest'
import { UserMessage } from './components/UserMessage/UserMessage'
import { useSocket } from '../../hooks/useSocket'
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'
import RoomService from '../../services/RoomService'
import { useNavigate } from 'react-router-dom'

export const MessengerSection: React.FC = observer(() => {
  const { ref, inView } = useInView({
    threshold: 1,
  })

  const navigate = useNavigate()
  const socket = useSocket()

  const { store } = useContext(Context)
  const { currentDialog, allUsers, user } = store

  const [currentMessage, setCurrentMessage] = useState<string>('')
  const [messageList, setMessageList] = useState<TUserMessage[]>([])
  const [currentUser] = useState(toJS(user))
  const [messagesCount, setMessagesCount] = useState(10)
  const [isMessageEnd, setIsMessageEnd] = useState(false)

  const messagesScrollerRef = useRef<HTMLDivElement>(null)
  const lastMessageRef = useRef<HTMLDivElement>(null)

  const sendMessage = async () => {
    const messageData = {
      roomId: currentDialog.roomId,
      authorFirstName: currentUser.firstName,
      authorLastName: currentUser.lastName,
      authorId: currentUser.id,
      message: currentMessage,
      time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes(),
    }

    await RoomService.sendNewMessage({
      ...messageData,
    }).then(response => {
      store.setCurrentDialogRoomId(response.data.roomId)
    })

    socket.emit('sendMessage', messageData)

    if (messageList) {
      setMessageList(list => [...list, messageData])
    } else {
      setMessageList([messageData])
    }
    setCurrentMessage('')
    setScrollDown()
    if (messagesCount !== 10) {
      setMessagesCount(10)
    }
  }

  const setScrollDown = () => {
    if (messagesScrollerRef.current) {
      messagesScrollerRef.current.scrollTop = messagesScrollerRef.current.scrollHeight
    }
  }

  const fetchDialogs = async () => {
    const nextMessagesCount = messagesCount + 10
    const response = await RoomService.getDialogMessages(
      currentUser.id,
      currentDialog.userId as string,
      nextMessagesCount,
    )

    if (response.data.isMessageEnd) {
      setIsMessageEnd(true)
      return
    }

    store.setCurrentDialogParams(
      currentDialog.userId as string,
      response.data.dialog.messages,
      response.data.dialog._id,
    )
    setMessagesCount(nextMessagesCount)
  }

  const onEnterKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    setCurrentMessage((event.target as HTMLTextAreaElement).value)
    if ((event.code === 'Enter' || event.code === 'NumpadEnter') && !event.shiftKey) {
      sendMessage()
    }
  }

  useEffect(() => {
    socket.on('receiveMessage', (data: TUserMessage) => {
      setMessageList(list => [...list, data])
    })
  }, [socket])

  useEffect(() => {
    setMessageList(store.currentDialog.messages)
  }, [store, store.currentDialog.messages])

  useEffect(() => {
    if (inView && !isMessageEnd) {
      fetchDialogs()
    }
  }, [inView])

  useEffect(() => {
    store.getAllusers()
  }, [])

  useEffect(() => {
    if (messagesScrollerRef.current) {
      if (messagesCount === 10) {
        messagesScrollerRef.current.scrollTop = messagesScrollerRef.current.scrollHeight
      } else {
        // 900 ? 60 : 120 - fix for users with small height of monitors
        messagesScrollerRef.current.scrollTop = (window.innerHeight / 100) * (window.innerHeight > 900 ? 60 : 120)
      }
    }
  }, [messageList])

  useEffect(() => {
    if (!store.isAuth) {
      navigate('/auth')
    }
  }, [navigate, store.isAuth])

  return (
    <MessengerBase>
      <>
        <UserList>
          <Dialogs>
            <div className="userSearch">
              <InputSearch />
            </div>
            <UserListScroll>
              {toJS(allUsers)?.map(user => {
                if (user.id !== currentUser.id) {
                  return (
                    <UserBlock
                      key={user.id}
                      activeDialog={user.id === currentDialog.userId}
                      onClick={async () => {
                        const response = await RoomService.getDialogMessages(currentUser.id, user.id, messagesCount)
                        socket.emit('joinRoom', response.data.dialog._id)
                        store.setCurrentDialogParams(user.id, response.data.dialog.messages, response.data.dialog._id)
                      }}>
                      <div className="ava">
                        <CommonAva />
                      </div>
                      <div className="info">
                        <div className="info-status">
                          <p>Online</p>
                          {/* <p>12:45</p> */}
                        </div>
                        <div className="info-msg">
                          <p className="user-name">
                            {user.firstName}&nbsp;
                            {user.lastName}
                          </p>
                          {/* <p className="user-message">Adwords Keyword Research For Beginners</p> */}
                        </div>
                      </div>
                    </UserBlock>
                  )
                }
              })}
            </UserListScroll>
          </Dialogs>

          <ControlPanel>
            <IconButtons>
              <GroupsIcon />
            </IconButtons>
            <IconButtons>
              <QuestionAnswerIcon color="primary" />
            </IconButtons>
            <IconButtons>
              <PhoneIcon />
            </IconButtons>
            <IconButtons>
              <SettingsSuggestIcon />
            </IconButtons>
          </ControlPanel>
        </UserList>

        <Messenger>
          <MessengerTop />
          <MessagesFullHeight ref={messagesScrollerRef}>
            {messageList?.map((item, index) => {
              return (
                <UserMessage
                  iref={index === 0 ? ref : index === 1 ? lastMessageRef : null}
                  key={index}
                  text={item.message}
                  isMyMessage={currentUser.id === item.authorId}
                  userName={`${item.authorFirstName} ${item.authorLastName}`}
                  time={item.time}
                />
              )
            })}
          </MessagesFullHeight>
          <MessangerInput
            onKeyPress={onEnterKeyPress}
            sendMessage={sendMessage}
            value={currentMessage}
            setValue={setCurrentMessage}
          />
        </Messenger>
      </>
    </MessengerBase>
  )
})
