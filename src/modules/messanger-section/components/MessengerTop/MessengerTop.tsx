import React from 'react'
import CallIcon from '@mui/icons-material/Call'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { theme } from '../../../../theme'
import { MessangerTop } from './messengerTop-styled'

export const MessengerTop: React.FC = () => {
  return (
    <MessangerTop>
      <div className="btn calls">
        <CallIcon sx={{ color: theme.palette.grey[600] }} />
      </div>
      <div className="userName">
        <div className="indicator"></div>
        <p>Anna Voronkova</p>
      </div>
      <div className="btn functions">
        <MoreVertIcon sx={{ color: theme.palette.grey[600] }} />
      </div>
    </MessangerTop>
  )
}
