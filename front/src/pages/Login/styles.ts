import styled from 'styled-components'

export const LoginContainer = styled.div`
  width: 33rem;

  background-color: ${(props) => props.theme.orange};
  padding: 2.5rem 1.5rem;
  border: none;
  border-radius: 6px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1{
    margin-bottom: 1.5rem;
  }

  > div{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    > button[type='button']{
      border: 1px solid ${(props) => props.theme['blue-600']};
      background: none;
      height: 3.375rem;
      padding: 0.8rem;
      width: 18.375rem;
      border-radius: 6px;
      color: ${(props) => props.theme['blue-600']};
      font-weight: 700;
      font-size: 1.2rem;
      cursor: pointer;
    }

    > button[type='button']:hover{
      background-color: ${(props) => props.theme['blue-600']};
      color: ${(props) => props.theme['gray-100']};
      transition: 0.4s;
    }
  }
`

export const InputPasswordContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;

    label{
      margin-bottom: 0.2rem;
    }
  }

  button[type='submit']{
      height: 3.375rem;
      width: 3.375rem;
      line-height: 0;
      border: none;
      border-radius: 0px 6px 6px 0px;
      background: ${(props) => props.theme['orange-200']};
      color: ${(props) => props.theme['blue-200']};
      transition: 0.4s;

    svg{
      width: 3rem;
      height: 3rem;
    }
  }

  button[type='submit']:hover{
    color: ${(props) => props.theme['blue-900']};
    background: ${(props) => props.theme['orange-400']};
  }
`


export const DividerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  hr{
    flex: 1;
    border-color: ${(props) => props.theme['gray-100']};
  }

  span{
    margin: 0.5rem;
    line-height: 0;
  }
`
