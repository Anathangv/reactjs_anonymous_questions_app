import styled, { css } from 'styled-components'

interface IInputPassword {
  hasError: boolean
}

export const InputPasswordContainer = styled.div<IInputPassword>`
  display: inline-block;
  /* flex-direction: column; */

  label{
    margin-bottom: 0.2rem;
  }

  > div{
    position: relative;
    display: flex;
    align-items: center;

    label{
      display: block;
    }

    input{
      width: 15rem;
      height: 3.375rem;
      border: none;
      padding: 0.8rem;
      border-radius: 6px 0px 0px 6px;
      background-color: ${(props) => props.theme['gray-100']};
      color: ${(props) => props.theme['blue-900']};
      letter-spacing: 1rem;
      font-weight: 600;
      font-size: 1.5rem;
      text-transform: uppercase;
      font-family: monospace;

      ${({ hasError }) =>
    hasError ?
      css`background-color: ${(props) => props.theme['red-100']};
          border: 1px solid ${(props) => props.theme['red-600']}`
      :
      css`background-color: ${(props) => props.theme['gray-100']};
          border: 1px solid ${(props) => props.theme['orange-200']}`}
    }

    input::placeholder{
      letter-spacing: 0rem;
      text-transform: none;
      font-size: 1rem;
      font-weight: 400;
      font-family: 'Roboto',sans-serif;
    }

    button{
      border: none;
      background: none;
      position: absolute;
      right: 0.5rem;
      color: ${(props) => props.theme['gray-200']};
      cursor: pointer;
      transition: 0.4s;
    }

    button:hover{
      color: ${(props) => props.theme['gray-900']};
    }
  }
`
