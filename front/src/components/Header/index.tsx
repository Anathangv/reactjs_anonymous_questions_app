import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ModalDefault } from '../ModalDefault'
import { Container, ContentContainer } from './styles'
/*
TODO
 - partial border, upper part with orange color
*/

const loginFormDataSchema = zod.object({
  password: zod.string().min(6, { message: 'Necessário informar campo com 6 digitos' }).max(6)
})

type LoginFormData = zod.infer<typeof loginFormDataSchema>


export function Header(){

  const { register, handleSubmit, formState } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormDataSchema)
  })

  async function handleLogin(login: LoginFormData){
    console.log('working...',login)
  }

  return(
    <Container>
      <h1>Easeask</h1>

      <ModalDefault
        isOpen={false}
        title='O que deseja?'>

        <ContentContainer>
          <form onSubmit={handleSubmit(handleLogin)} action=''>
          </form>
        </ContentContainer>
      </ModalDefault>
    </Container>
  )
}
