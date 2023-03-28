import styled from 'styled-components/macro'

export const InputBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding-top: 20px;

  &::before {
    content: '';
    display: block;
    height: 2px;
    width: 95%;
    background: #edeff2;
    position: absolute;
    top: 11px;
    left: 0;
  }

  .btns {
    display: flex;
    flex-flow: row nowrap;

    svg {
      cursor: pointer;
      margin-right: 15px;

      &:hover {
        fill: ${({ theme }) => theme.palette.grey[800]};
      }
    }
  }

  .textfield {
    max-width: 650px;
    width: 100%;
  }

  .send {
    svg {
      cursor: pointer;
    }
  }

  .send:active {
    svg {
      fill: ${({ theme }) => theme.palette.primary.main};
      transform: translateX(2px);
    }
  }
`
