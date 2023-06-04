import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { CheckCircle } from '@phosphor-icons/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputPassword } from './components/InputPassword'
import { DividerContainer, InputPasswordContainer, LoginContainer } from './styles'
import { useState } from 'react'

const loginFormDataSchema = zod.object({
  password: zod.string().min(6, { message: 'Necessário informar campo com 6 digitos' }).max(6)
})

type LoginFormData = zod.infer<typeof loginFormDataSchema>

export function Login(){

  const[isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)

  const { register, handleSubmit, formState } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormDataSchema)
  })

  async function handleLogin(login: LoginFormData){
    console.log('teste',login)
  }

  function handleChangePasswordVisibity(){
    setIsPasswordVisible(currentValue => !currentValue)
  }

  return (
    <LoginContainer>
      <h1>Escolha sua opção:</h1>

      <div>
        <form
          onSubmit={handleSubmit(handleLogin)}
          action=''>

          <InputPasswordContainer>
            <InputPassword
              hasError={!!formState.errors.password}
              isPasswordVisible={isPasswordVisible}
              label='Entrar'
              {...register('password')}
              changePassordVisibity={handleChangePasswordVisibity}
            />

            <button type="submit">
              <CheckCircle size={32} />
            </button>
          </InputPasswordContainer>
        </form>

        <DividerContainer>
          <hr/>
          <span>ou</span>
          <hr/>
        </DividerContainer>

        <button type="button">
            Nova Sala
        </button>
      </div>
    </LoginContainer>
  )
}
