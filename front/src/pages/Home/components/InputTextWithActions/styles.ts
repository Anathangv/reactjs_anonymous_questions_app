import styled from 'styled-components'

export const InputTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  label{
    margin-bottom: 5rem;
  }

  > div{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;


    input[type='text']{
      width: 100%;
      border: none;
      border-radius: 6px;
      padding: 0.8rem 4.5rem 0.8rem 0.8rem;
      background-color: ${({ theme }) => theme['gray-100']};
      color: ${({ theme }) => theme['gray-900']};
      font-size: 1.5rem;
      font-weight: 600;

      &:focus{
        background-color: ${({ theme }) => theme['gray-200']};
      }

      &:focus + div > button {
        color: ${({ theme }) => theme['gray-100']};

        &:hover{
        color: ${({ theme }) => theme['gray-900']};
        }

        &.delete:hover{
        color: ${({ theme }) => theme['red-600']};
        }
      }
    }
  }
`


export const ActionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0.5rem;
  gap: 0.5rem;

  button{
    background: none;
    border: none;
    background: none;
    color: ${({ theme }) => theme['gray-200']};
    transition: 0.4s;
    line-height: 0;
    cursor: pointer;

    &:hover{
      color: ${({ theme }) => theme['gray-900']};
    }

    svg{
      line-height: 0;
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  button.delete{
    &:hover{
      color: ${({ theme }) => theme['red-600']};
    }
  }
`
