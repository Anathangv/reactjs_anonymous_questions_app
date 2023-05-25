import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'
import { X } from '@phosphor-icons/react'

export const Container = styled.header`
  background-color: ${(props) => props.theme['blue-900']};
  display: flex;
  justify-content: center;
  height: 8rem;
  align-items: center;
`

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`

export const ButtonCloseModal = styled(X)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  cursor: pointer;
`

export const Content = styled(Dialog.Content)`
  min-width: 33rem;
  border-radius: 6px;
  padding: 1.5rem 1.5rem 3rem 1.5rem;
  background-color: ${(props) => props.theme.orange};

  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  form{
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  > button[type='button']{
    border: 1px solid ${(props) => props.theme['blue-600']};
    background: none;
    height: 3.375rem;
    padding: 0.8rem;
    width: 18.375rem;
    border-radius: 6px;
    color: ${(props) => props.theme['blue-900']};
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
  }

  > button[type='button']:hover{
    background-color: ${(props) => props.theme['blue-600']};
    color: ${(props) => props.theme['gray-100']};
    transition: 0.4s;
  }
`

export const InputPassword = styled.div`
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
    border-radius: 6px;
    background-color: ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['blue-900']};
    letter-spacing: 1rem;
    font-weight: 600;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-family: monospace;
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
`

export const LogInContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  gap: 0.3rem;

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
      border: 0;
      background: none;
      color: ${(props) => props.theme['gray-200']};
      transition: 0.4s;

    svg{
      width: 3rem;
      height: 3rem;
    }
  }

  button[type='submit']:hover{
    color: ${(props) => props.theme['green-300']};
  }
`

// export const DividerContainer = styled.div`
//   border: 1px solid black;
//   flex-direction: column;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `

