import React, { useContext } from 'react'
import MessageIcon from '@mui/icons-material/Message'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import PersonIcon from '@mui/icons-material/Person'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer'
import WbCloudyIcon from '@mui/icons-material/WbCloudy'
import PeopleIcon from '@mui/icons-material/People'
import PhoneIcon from '@mui/icons-material/Phone'
import GroupsIcon from '@mui/icons-material/Groups'
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest'

import { AvaBtns, BigAvaBlock, DashBoardFuncs, FeedBack, UserInfo } from './side-meny-styled'
import { BigAva } from '../../components'

import { theme } from '../../theme'
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'

export const SideMenu = observer(() => {
  const {
    store: {
      user: { email, firstName, lastName },
    },
  } = useContext(Context)

  return (
    <div>
      <AvaBtns>
        <PersonIcon sx={{ color: theme.palette.grey[600] }} />
        <MoreHorizIcon sx={{ color: theme.palette.grey[600] }} />
      </AvaBtns>
      <BigAvaBlock>
        <BigAva />
      </BigAvaBlock>
      <UserInfo>
        <p className="userName">
          {firstName}&nbsp;{lastName}
        </p>
        <p className="userEmail">{email}</p>
      </UserInfo>
      <DashBoardFuncs>
        <div className="squares">
          <div className="square">
            <div className="square-labels">
              <QuestionAnswerIcon />
              <p>Messenger</p>
            </div>
          </div>
          <div className="square">
            <div className="square-labels">
              <PeopleIcon />
              <p>Друзья</p>
            </div>
          </div>
          <div className="square">
            <div className="square-labels">
              <WbCloudyIcon />
              <p>Файлы</p>
            </div>
          </div>
          <div className="square">
            <div className="square-labels">
              <PhoneIcon />
              <p>Вызовы</p>
            </div>
          </div>
          <div className="square">
            <div className="square-labels">
              <MeetingRoomIcon />
              <p>Созд. комнату</p>
            </div>
          </div>
          <div className="square">
            <div className="square-labels">
              <GroupsIcon />
              <p>Комнаты</p>
            </div>
          </div>
        </div>
        <div className="longSquare">
          <div className="longSquare-labels">
            <SettingsSuggestIcon />
            <p>Настройки</p>
          </div>
        </div>
      </DashBoardFuncs>
      <FeedBack>
        <MessageIcon sx={{ color: theme.palette.grey[600] }} />
        <p>Отправить Фидбэк</p>
        <ArrowForwardIcon sx={{ color: theme.palette.grey[600] }} />
      </FeedBack>
    </div>
  )
})
