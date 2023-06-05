import styled from 'styled-components'

export const FormCreateEdit = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
  width: 100%;
  gap: 1.5rem;
`

export const SaveContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`

export const TopicContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  label{
    margin-bottom: 0.2rem;
  }

  > div:nth-child(2){
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  > div:nth-child(3){
    display: flex;
    justify-content: end;
    margin-top: 0.8rem;

    button{
      background: none;
      border: none;
      background: none;
      color: ${({ theme }) => theme['gray-200']};
      transition: 0.4s;
      line-height: 0;
      cursor: pointer;
      margin-right: -0.375rem;
      margin-top: -0.375rem;

      &:hover{
        color: ${({ theme }) => theme['gray-900']};
      }

      svg{
        width: 3rem;
        height: 3rem;
      }
    }
  }
`

