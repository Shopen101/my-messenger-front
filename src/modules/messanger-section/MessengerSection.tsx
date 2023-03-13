import React from 'react'
import {
  CommonAva,
  IconButtons,
  InputSearch,
  MessengerBase,
} from '../../components'
import {
  ControlPanel,
  Dialogs,
  UserBlock,
  UserList,
  UserListScroll,
} from './messenger-section-styled'
import GroupsIcon from '@mui/icons-material/Groups'
import PhoneIcon from '@mui/icons-material/Phone'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest'

export const MessengerSection: React.FC = () => {
  return (
    <MessengerBase>
      <>
        <UserList>
          <Dialogs>
            <div className="userSearch">
              <InputSearch />
            </div>
            <UserListScroll>
              <UserBlock>
                <div className="ava">
                  <CommonAva />
                </div>
                <div className="info">
                  <div className="info-status">
                    <p>Online</p>
                    <p>12:45</p>
                  </div>
                  <div className="info-msg">
                    <p className="user-name">Alberta Reyes</p>
                    <p className="user-message">
                      Adwords Keyword Research For Beginners
                    </p>
                  </div>
                </div>
              </UserBlock>
              <UserBlock>
                <div className="ava">
                  <CommonAva />
                </div>
                <div className="info">
                  <div className="info-status">
                    <p>Online</p>
                    <p>12:45</p>
                  </div>
                  <div className="info-msg">
                    <p className="user-name">Alberta Reyes</p>
                    <p className="user-message">
                      Adwords Keyword Research For Beginners
                    </p>
                  </div>
                </div>
              </UserBlock>
              <UserBlock>
                <div className="ava">
                  <CommonAva />
                </div>
                <div className="info">
                  <div className="info-status">
                    <p>Online</p>
                    <p>12:45</p>
                  </div>
                  <div className="info-msg">
                    <p className="user-name">Alberta Reyes</p>
                    <p className="user-message">
                      Adwords Keyword Research For Beginners
                    </p>
                  </div>
                </div>
              </UserBlock>
              <UserBlock>
                <div className="ava">
                  <CommonAva />
                </div>
                <div className="info">
                  <div className="info-status">
                    <p>Online</p>
                    <p>12:45</p>
                  </div>
                  <div className="info-msg">
                    <p className="user-name">Alberta Reyes</p>
                    <p className="user-message">
                      Adwords Keyword Research For Beginners
                    </p>
                  </div>
                </div>
              </UserBlock>
              <UserBlock>
                <div className="ava">
                  <CommonAva />
                </div>
                <div className="info">
                  <div className="info-status">
                    <p>Online</p>
                    <p>12:45</p>
                  </div>
                  <div className="info-msg">
                    <p className="user-name">Alberta Reyes</p>
                    <p className="user-message">
                      Adwords Keyword Research For Beginners
                    </p>
                  </div>
                </div>
              </UserBlock>
              <UserBlock>
                <div className="ava">
                  <CommonAva />
                </div>
                <div className="info">
                  <div className="info-status">
                    <p>Online</p>
                    <p>12:45</p>
                  </div>
                  <div className="info-msg">
                    <p className="user-name">Alberta Reyes</p>
                    <p className="user-message">
                      Adwords Keyword Research For Beginners
                    </p>
                  </div>
                </div>
              </UserBlock>
              <UserBlock>
                <div className="ava">
                  <CommonAva />
                </div>
                <div className="info">
                  <div className="info-status">
                    <p>Online</p>
                    <p>12:45</p>
                  </div>
                  <div className="info-msg">
                    <p className="user-name">Alberta Reyes</p>
                    <p className="user-message">
                      Adwords Keyword Research For Beginners
                    </p>
                  </div>
                </div>
              </UserBlock>
              <UserBlock>
                <div className="ava">
                  <CommonAva />
                </div>
                <div className="info">
                  <div className="info-status">
                    <p>Online</p>
                    <p>12:45</p>
                  </div>
                  <div className="info-msg">
                    <p className="user-name">Alberta Reyes</p>
                    <p className="user-message">
                      Adwords Keyword Research For Beginners
                    </p>
                  </div>
                </div>
              </UserBlock>
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

        <div className="messenger">2134</div>
      </>
    </MessengerBase>
  )
}
