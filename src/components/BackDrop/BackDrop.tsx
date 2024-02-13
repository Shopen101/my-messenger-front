import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'

interface IProps {
  children?: React.ReactNode
  isShow: boolean
}

export const BackDrop: React.FC<IProps> = ({ children, isShow }) => {
  return (
    <div>
      <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={isShow}>
        {children}
      </Backdrop>
    </div>
  )
}
