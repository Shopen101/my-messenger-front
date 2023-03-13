import styled from 'styled-components'

export const Dialogs = styled.div``

export const UserList = styled.div`
  padding: 30px 10px;
  background: #fff;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  width: 300px;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-between;
`

export const ControlPanel = styled.div`
  width: 220px;
  display: flex;
  justify-content: space-between;
`

export const UserBlock = styled.div`
  max-width: 280px;
  height: 128px;
  padding: 14px 20px;
  display: flex;
  justify-content: space-between;
  background: transparent;
  border-radius: 10px;
  transition-duration: 100ms;

  > * p {
    padding: 0;
    margin: 0;
  }

  & .info {
    padding: 10px 0 20px 20px;

    &-status {
      display: flex;
      justify-content: space-between;

      p {
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 20px;
        color: ${({ theme }) => theme.palette.grey[500]};
      }
    }

    &-msg {
      display: flex;
      flex-flow: column wrap;
      align-items: space-between;

      p:first-child {
        font-style: normal;
        font-weight: 700;
        font-size: 13px;
        line-height: 25px;
        color: ${({ theme }) => theme.palette.grey[800]};
        margin-bottom: 12px;
      }

      p:nth-child(2n) {
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 20px;
        color: ${({ theme }) => theme.palette.grey[500]};
      }
    }
  }
`

export const UserListScroll = styled.div`
  overflow-y: auto;
  max-height: calc(100vh - 300px);

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.palette.grey[900]};
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.palette.grey[600]};
    border-radius: 20px;
  }
`
