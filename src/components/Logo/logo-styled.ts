import styled from 'styled-components'

export const LogoContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    margin-left: 6px;
    color: ${({ theme }) => theme.palette.grey[800]};
  }
`
