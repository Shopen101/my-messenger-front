import * as React from 'react'
import IconButton from '@mui/material/IconButton'

interface IconButtonProps {
  children: JSX.Element
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
}

export const IconButtons: React.FC<IconButtonProps> = ({ children, size, onClick }) => {
  return (
    <IconButton aria-label="delete" size={size || 'medium'} onClick={onClick}>
      {children}
    </IconButton>
  )
}
