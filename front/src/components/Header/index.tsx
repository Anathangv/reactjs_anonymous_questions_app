import { ButtonCloseModal, Container, Content, ContentContainer, DividerContainer, InputPassword, LogInContainer, Overlay } from './styles'
import * as Dialog from '@radix-ui/react-dialog'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle, Eye, EyeClosed, X } from '@phosphor-icons/react'
import { useState } from 'react'
/*
TODO
 - partial border, upper part with orange color
*/

const loginFormDataSchema = zod.object({
  password: zod.string()
})

type LoginFormData = zod.infer<typeof loginFormDataSchema>


export function Header(){

  const[isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)

  const { register, handleSubmit } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormDataSchema)
  })

  async function handleLogin(login: LoginFormData){
    console.log('teste',login)
  }

  function handleChangePasswordVisibity(){
    setIsPasswordVisible(currentValue => !currentValue)
  }

  return(
    <Container>
      <h1>this is a header</h1>

      <Dialog.Root open={true}>
        <Dialog.Portal>
          <Overlay />

          <Content>
            <Dialog.Title>O que deseja?</Dialog.Title>

            <ButtonCloseModal asChild>
              <X />
            </ButtonCloseModal>

            <ContentContainer>
              <form onSubmit={handleSubmit(handleLogin)} action=''>
                <LogInContainer>
                  <div>
                    <label>
                      Entrar na palestra
                    </label>
                    <InputPassword>
                      <input
                        type={isPasswordVisible ? 'text' : 'password' }
                        placeholder='Senha'
                        required
                        maxLength={6}
                        {...register('password')}
                      />
                      <button type='button' onClick={handleChangePasswordVisibity}>
                        {
                          isPasswordVisible
                            ? <Eye size={32} />
                            : <EyeClosed size={32} />
                        }
                      </button>
                    </InputPassword>
                  </div>
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
                  Criar Nova Palestra
              </button>
            </ContentContainer>
          </Content>
        </Dialog.Portal>
      </Dialog.Root>
    </Container>
  )
}
