import styled from 'styled-components/macro'

export const MessangerTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: 30px;

  &::before {
    content: '';
    display: block;
    height: 2px;
    width: 100%;
    background: #edeff2;
    position: absolute;
    top: 53px;
    left: 0;
  }

  .btn {
    svg {
      cursor: pointer;

      &:hover {
        fill: ${({ theme }) => theme.palette.grey[800]};
      }
    }
  }

  .userName {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .indicator {
      width: 10px;
      height: 10px;
      background: #29cc39;
      border: 2px solid #ffffff;
      border-radius: 50%;
      margin-right: 10px;
    }

    p {
      color: ${({ theme }) => theme.palette.grey[800]};
      font-weight: 700;
      font-size: 13px;
    }
  }
`
