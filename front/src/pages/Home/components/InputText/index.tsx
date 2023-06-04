
import { X } from '@phosphor-icons/react'
import { InputHTMLAttributes, forwardRef } from 'react'
import { InputTextContainer } from './styles'

export type IInputText = InputHTMLAttributes<HTMLInputElement> & {
  label?: string,
  hasError: boolean,
}

/* eslint-disable react/display-name */
export const InputText = forwardRef<
  HTMLInputElement,
  IInputText
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
        <button type='button' onClick={handleCleanFieldText}>
          {
            true && <X />
          }
        </button>
      </div>
    </InputTextContainer>
  )}
)


