import styled from 'styled-components/macro'
import { Props } from './UserMessage'

type IsMyMessage = Pick<Props, 'isMyMessage'>

export const Message = styled.div<IsMyMessage>`
  display: flex;
  flex-direction: ${({ isMyMessage }) => (isMyMessage ? 'row-reverse' : 'row')}; // optional

  .ava {
    margin-right: 30px;
    margin-left: ${({ isMyMessage }) => (isMyMessage ? '30px' : '0')}; // optional
  }
`

export const MessageInfo = styled.div<IsMyMessage>`
  .text-wrapper {
    background: #fff;
    padding: 15px;
    box-shadow: 0px 2px 10px rgba(38, 51, 77, 0.05);
    border-radius: 10px;
    max-width: 370px;
    min-width: 135px;
    margin-top: 18px;

    .text {
      word-break: break-all;
      margin: 0;
      font-weight: 700;
      font-size: 12px;
      line-height: 20px;
      color: ${({ theme }) => theme.palette.grey[700]};
    }
  }

  .name-and-time {
    display: flex;
    align-items: top;
    justify-content: space-between;
    /* flex-direction: ${({ isMyMessage }) => (isMyMessage ? 'row-reverse' : 'row')}; // optional */

    > p {
      margin: 0;
    }

    .name {
      margin: 0;
      font-weight: 700;
      font-size: 13px;
      line-height: 25px;
      color: ${({ theme }) => theme.palette.grey[800]};
    }

    .time {
      font-weight: 700;
      font-size: 12px;
      line-height: 25px;
      color: ${({ theme }) => theme.palette.grey[500]};
    }
  }
`
