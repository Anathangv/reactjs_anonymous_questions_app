import { Eye, EyeClosed } from '@phosphor-icons/react'
import { InputHTMLAttributes, forwardRef } from 'react'
import { InputPasswordContainer } from './styles'

type IInputPassword = InputHTMLAttributes<HTMLInputElement> & {
  label: string,
  isPasswordVisible: boolean,
  hasError: boolean,
  changePassordVisibity: () => void
}

/* eslint-disable react/display-name */
export const InputPassword = forwardRef<
  HTMLInputElement,
  IInputPassword
>(({ label, hasError, isPasswordVisible, changePassordVisibity, ...props }, ref) => {

  function handleChangePasswordVisibity(){
    console.log(isPasswordVisible)
    changePassordVisibity()
  }

  return(
    <InputPasswordContainer hasError={hasError}>
      <label>{ label }</label>
      <div>
        <input
          type={isPasswordVisible ? 'text' : 'password' }
          placeholder='Senha'
          maxLength={6}
          ref={ref}
          {...props}
        />
        <button type='button' onClick={handleChangePasswordVisibity}>
          {
            isPasswordVisible
              ? <Eye size={32} />
              : <EyeClosed size={32} />
          }
        </button>
      </div>
    </InputPasswordContainer>
  )})

