import React from 'react'
import { theme } from '../../../../theme'
import { InputBlock } from './messengerInput-styled'
import AttachmentIcon from '@mui/icons-material/Attachment'
import CollectionsIcon from '@mui/icons-material/Collections'
import SendIcon from '@mui/icons-material/Send'
import { FormControl, TextField } from '@mui/material'

type Props = {
  value: string
  sendMessage: () => void
  onKeyPress: (event: React.KeyboardEvent<HTMLDivElement>) => void
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export const MessangerInput: React.FC<Props> = ({ sendMessage, value, setValue, onKeyPress }) => {
  return (
    <InputBlock>
      <div className="btns">
        <AttachmentIcon sx={{ color: theme.palette.grey[600] }} />
        <CollectionsIcon sx={{ color: theme.palette.grey[600] }} />
      </div>
      <div className="textfield">
        <FormControl sx={{ m: 0, width: '100%' }} variant="standard">
          <TextField
            sx={{
              m: 0,
              width: '100%',
              outline: 'none',
              textarea: {
                fontSize: '14px',
                height: '30px',
                maxHeight: '70px',
                overflow: 'auto !important',
              },
              '& fieldset': { border: 'none' },
              '& ::placeholder': {
                color: theme.palette.grey[700],
                fontWeight: '500',
                fontSize: '12px',
              },
            }}
            placeholder="Текст сообщения"
            multiline
            value={value}
            onChange={event => setValue(event.target.value)}
            onKeyDown={onKeyPress}
            autoFocus
          />
        </FormControl>
      </div>
      <div className="send" onClick={sendMessage}>
        <SendIcon sx={{ color: theme.palette.primary.main }} />
      </div>
    </InputBlock>
  )
}
