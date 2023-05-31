import * as zod from 'zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle }  from '@phosphor-icons/react'
import { ModalDefault } from '../ModalDefault'
import { InputPassword } from '../InputPassword'
import { Container, ContentContainer, DividerContainer, LogInContainer } from './styles'
/*
TODO
 - partial border, upper part with orange color
*/

const loginFormDataSchema = zod.object({
  password: zod.string().min(6, { message: 'Necessário informar campo com 6 digitos' }).max(6)
})

type LoginFormData = zod.infer<typeof loginFormDataSchema>


export function Header(){

  const[isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)

  const { register, handleSubmit, formState } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormDataSchema)
  })

  async function handleLogin(login: LoginFormData){
    console.log('teste',login)
  }

  function handleChangePasswordVisibity(){
    console.log(isPasswordVisible)
    setIsPasswordVisible(currentValue => !currentValue)
  }

  console.log('formState', formState)

  return(
    <Container>
      <h1>this is a header</h1>

      <ModalDefault
        isOpen={true}
        hasCloseModalOption={false}
        title='O que deseja?'>

        <ContentContainer>
          <form onSubmit={handleSubmit(handleLogin)} action=''>

            <LogInContainer>
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
            </LogInContainer>
          </form>

          <DividerContainer>
            <hr/>
            <span>ou</span>
            <hr/>
          </DividerContainer>

          <button type="button">
            Nova Sala
          </button>
        </ContentContainer>
      </ModalDefault>
    </Container>
  )
}
