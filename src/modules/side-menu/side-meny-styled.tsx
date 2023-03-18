import styled from 'styled-components/macro'

export const FeedBack = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;

  p {
    font-weight: 700;
    font-size: 12px;
    line-height: 20px;
    color: ${({ theme }) => theme.palette.grey[500]};
    margin-left: -30px;
  }
`

export const AvaBtns = styled.div`
  width: 226px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  svg {
    cursor: pointer;

    &:hover {
      fill: ${({ theme }) => theme.palette.grey[800]};
    }
  }
`

export const BigAvaBlock = styled.div`
  margin: 0 auto;
  width: fit-content;
`

export const UserInfo = styled.div`
  p.userName {
    font-weight: 700;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    color: ${({ theme }) => theme.palette.grey[700]};
    margin: 40px 0 5px;
  }

  p.userEmail {
    font-weight: 700;
    font-size: 13px;
    line-height: 25px;
    text-align: center;
    color: ${({ theme }) => theme.palette.grey[500]};
    margin: 0 0 45px 0;
  }
`

export const DashBoardFuncs = styled.div`
  & .squares {
    width: 240px;
    height: auto;
    display: flex;
    flex-flow: row wrap;

    & .square {
      width: 115px;
      height: 100px;
      border: 2px solid ${({ theme }) => theme.palette.grey[900]};
      transition-duration: 100ms;

      &-labels {
        display: flex;
        flex-flow: column wrap;
        align-items: center;

        svg {
          fill: ${({ theme }) => theme.palette.grey[600]};
        }

        p {
          margin: 0;
          margin-top: 10px;
        }
      }

      &:hover {
        cursor: pointer;
        background: #fff;
        transform: scale(1.1);
        border: 2px solid transparent;
        box-shadow: 0px 0px 5px 3px #eeeeee;
        border-radius: 20px;

        svg {
          fill: ${({ theme }) => theme.palette.primary.main};
        }

        div p {
          color: ${({ theme }) => theme.palette.grey[700]};
          font-weight: 700;
        }
      }

      &:active {
        transform: scale(1);
        background: #f8f8f8;
      }

      div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
          font-weight: 500;
          font-size: 12px;
          line-height: 20px;
          text-align: center;
          color: ${({ theme }) => theme.palette.grey[500]};
        }
      }
    }

    .square:nth-child(1) {
      border-top-left-radius: 15px;
    }

    .square:nth-child(2) {
      border-top-right-radius: 15px;
    }
  }

  & .longSquare {
    width: calc(100% - 10px);
    height: 80px;
    border: 2px solid ${({ theme }) => theme.palette.grey[900]};
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    margin-bottom: 30px;
    transition-duration: 100ms;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      cursor: pointer;
      background: #fff;
      transform: scale(1.1);
      border: 2px solid transparent;
      box-shadow: 0px 0px 5px 3px #eeeeee;
      border-radius: 20px;

      svg {
        fill: ${({ theme }) => theme.palette.primary.main};
      }

      div p {
        color: ${({ theme }) => theme.palette.grey[700]};
        font-weight: 700;
      }
    }

    &:active {
      transform: scale(1);
      background: #f8f8f8;
    }

    &-labels {
      display: flex;
      flex-flow: column wrap;
      align-items: center;

      svg {
        fill: ${({ theme }) => theme.palette.grey[600]};
      }

      p {
        margin: 0;
        margin-top: 10px;
        font-weight: 500;
        font-size: 12px;
        line-height: 20px;
        text-align: center;
        color: ${({ theme }) => theme.palette.grey[500]};
      }
    }
  }
`
