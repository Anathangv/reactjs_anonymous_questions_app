
import { Eye, EyeClosed, Trash, X } from '@phosphor-icons/react'
import { InputHTMLAttributes, forwardRef } from 'react'
import { ActionContainer, InputTextContainer } from './styles'

export type IInputTextWithActions = InputHTMLAttributes<HTMLInputElement> & {
  label?: string,
  hasError: boolean,
}

/* eslint-disable react/display-name */
export const InputTextWithActions = forwardRef<
  HTMLInputElement,
  IInputTextWithActions
>(({ label, hasError, ...props }, ref) => {

  function handleCleanFieldText(){
    console.log('handleCleanFieldText')
  }

  return(
    <InputTextContainer>
      {
        label && <label>{ label }</label>
      }
      <div>
        <input
          type='text'
          ref={ref}
          {...props}
        />
        <ActionContainer>
          <button
            type='button'
            onClick={handleCleanFieldText}>
            { true && <X /> }
          </button>

          <button
            type='button'
            className='delete'
            onClick={handleCleanFieldText}>
            { true && <Trash size={32} /> }
          </button>
        </ActionContainer>
      </div>
    </InputTextContainer>
  )}
)


