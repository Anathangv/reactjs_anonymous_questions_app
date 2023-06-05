import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`
export const ButtonCloseModal = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: 0.4s;
  color: ${(props) => props.theme['gray-100']};

  &:hover{
    color: ${(props) => props.theme['gray-900']};
  }
`
export const Content = styled(Dialog.Content)`
  width: 100%;
  max-width: 54rem;
  border-radius: 6px;
  padding: 1.5rem 1.5rem 1.5rem 1.5rem;
  background-color: ${(props) => props.theme.orange};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
