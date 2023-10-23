import * as React from 'react'
import Button from '@mui/material/Button'

interface Props {
  text: string
  variant: 'text' | 'outlined' | 'contained'
  onClick: () => void
  size: 'small' | 'medium' | 'large'
}

export const SimpleButton: React.FC<Props> = ({ text, variant, size, onClick }) => {
  return (
    <Button variant={variant} onClick={onClick} size={size}>
      {text}
    </Button>
  )
}
