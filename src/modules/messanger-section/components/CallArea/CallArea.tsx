import * as React from 'react'

import CallIcon from '@mui/icons-material/Call'
import { BackDrop, IconButtons } from '@components'

import baba from '../../../../assets/call-baby.jpg'
import './CallArea.scss'

interface ICallAreaProps {
  isStartCall: boolean
  setIsStartCall: React.Dispatch<React.SetStateAction<boolean>>
  handleAnswer: () => void
}

export const CallArea: React.FC<ICallAreaProps> = ({ isStartCall, setIsStartCall, handleAnswer }) => {
  return (
    <BackDrop isShow={isStartCall}>
      <div className="callbox">
        <div className="callbox__user">
          <h2>Входящий звонок от абонента:</h2>
          <div className="callbox__user__info">
            <p>Вася пупкин</p>
          </div>
          <div className="callbox__user__img">
            <img src={baba} alt="ava" />
          </div>
        </div>
        <div className="callbox__actions">
          <IconButtons size="large" onClick={handleAnswer}>
            <CallIcon color="success"></CallIcon>
          </IconButtons>
          <IconButtons size="large" onClick={() => setIsStartCall(false)}>
            <CallIcon color="error"></CallIcon>
          </IconButtons>
        </div>
      </div>
    </BackDrop>
  )
}
