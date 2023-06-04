import styled from 'styled-components'

export const InputTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  > div{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    label{
      margin-bottom: 0.3rem;
    }

    input[type='text']{
      width: 100%;
      border: none;
      border-radius: 6px;
      padding: 0.8rem 2.5rem 0.8rem 0.8rem;
      background-color: ${({ theme }) => theme['gray-100']};
      color: ${({ theme }) => theme['gray-900']};
      font-size: 1.5rem;
      font-weight: 600;

      &:focus{
        background-color: ${({ theme }) => theme['gray-200']};
      }

      &:focus + button {
        color: ${({ theme }) => theme['gray-100']};
      }
    }


    button{
      position: absolute;
      right: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background: none;
      border: none;
      color: ${({ theme }) => theme['gray-200']};
      transition: 0.4s;
      cursor: pointer;

      svg{
        line-height: 0;
        width: 1.5rem;
        height: 1.5rem;
      }
    }

    button:hover{
      color: ${({ theme }) => theme['gray-900']};
    }
  }
`
