import styled from 'styled-components/macro'

export const HeaderContainer = styled.div`
  display: flex;
  padding: 10px 0;
  margin-bottom: 42px;
  justify-content: space-between;
`

export const MessengerTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 340px);
`

export const Menu = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  p {
    font-weight: 700;
    font-size: 13px;
    line-height: 25px;
    color: ${({ theme }) => theme.palette.grey[700]};
    margin: 0;
    border-bottom: 1px solid transparent;

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.palette.primary.main};
      border-bottom: 1px solid ${({ theme }) => theme.palette.primary.main};
    }
  }
`

export const MenuTab = styled.div`
  display: flex;
  width: 120px;
  justify-content: space-between;
  align-items: center;
`
