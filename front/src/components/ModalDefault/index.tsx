import * as Dialog from '@radix-ui/react-dialog'
import { X } from '@phosphor-icons/react'
import { ButtonCloseModal, Content, Overlay } from './styles'

export interface IModalDefaultProps {
  isOpen: boolean
  title: string
  children: React.ReactNode
}

export function ModalDefault({
  isOpen,
  title,
  children }: IModalDefaultProps){

  return(
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Overlay />

        <Content>
          <Dialog.Title>{title}</Dialog.Title>

          <ButtonCloseModal asChild>
            <X />
          </ButtonCloseModal>

          {children}
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
