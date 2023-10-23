import styled from 'styled-components/macro'

interface IUserBlock {
  activeDialog?: boolean
}

export const Dialogs = styled.div`
  .userSearch {
    margin-bottom: 10px;
  }
`

export const Messenger = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.palette.grey[400]};
  padding: 20px 30px 15px 30px;
  display: flex;
  flex-flow: column nowrap;
`
export const MessagesFullHeight = styled.div`
  height: calc(100% - 108px);
  overflow-y: auto;

  > div {
    margin-bottom: 30px;
  }
`

export const UserList = styled.div`
  padding: 40px 10px 25px;
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
  position: relative;

  &::before {
    content: '';
    display: block;
    height: 2px;
    width: 100%;
    position: absolute;
    top: -15px;
    left: 0;
    background: ${({ theme }) => theme.palette.grey[900]};
  }
`

export const UserBlock = styled.div<IUserBlock>`
  max-width: 280px;
  height: 128px;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  background: transparent;
  border-radius: 10px;
  transition-duration: 100ms;
  height: auto;
  background: ${({ activeDialog }) => (activeDialog ? '#f7f7f7' : 'transparent')};

  &:hover {
    background: ${({ theme }) => theme.palette.primary.main};
    cursor: pointer;

    & .info {
      &-status {
        p {
          color: ${({ theme }) => theme.palette.grey[600]};
        }
      }

      &-msg {
        p:first-child {
          color: #fff;
        }

        p:nth-child(2n) {
          color: ${({ theme }) => theme.palette.grey[900]};
        }
      }
    }
  }

  > * p {
    padding: 0;
    margin: 0;
  }

  & .info {
    padding: 10px 0 0px 20px;

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
  max-height: calc(100vh - 310px);
`
