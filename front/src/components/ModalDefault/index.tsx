import * as Dialog from '@radix-ui/react-dialog'
import { ButtonCloseModal, Content, Overlay } from './styles'
import { X } from '@phosphor-icons/react'

interface IModalDefaultProps {
  isOpen: boolean
  title: string
  hasCloseModalOption: boolean
  children: React.ReactNode
}

export function ModalDefault({
  isOpen,
  title,
  hasCloseModalOption,
  children }: IModalDefaultProps){

  return(
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Overlay />

        <Content>
          <Dialog.Title>{title}</Dialog.Title>

          {
            hasCloseModalOption &&
          <ButtonCloseModal asChild>
            <X />
          </ButtonCloseModal>
          }

          <>
            {children}
          </>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
