import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ModalDefault } from '../../../../components/ModalDefault'
import { FormCreateEdit, SaveContainer, TopicContainer } from './styles'
import { InputText } from '../InputText'
import { InputTextWithActions } from '../InputTextWithActions'
import { PlusSquare } from '@phosphor-icons/react'
import { ButtonBorder } from '../../../../components/ButtonBorder'

const loginFormDataSchema = zod.object({
  password: zod.string().min(6, { message: 'Necessário informar campo com 6 digitos' }).max(6)
})

type LoginFormData = zod.infer<typeof loginFormDataSchema>


export function CreateEditPresentationModal(){

  const { register, handleSubmit, formState } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormDataSchema)
  })

  async function handleLogin(login: LoginFormData){
    console.log('working...',login)
  }

  return(
    <ModalDefault
      isOpen={true}
      title='Cadastrar Nova Sala de Perguntas'>

      <FormCreateEdit onSubmit={handleSubmit(handleLogin)} action=''>

        <InputText
          label='Titulo do Evento'
          hasError={false}/>

        <TopicContainer>
          <label>
            Tema(s)
          </label>
          <div>
            <InputTextWithActions
              hasError={false}/>
            <InputTextWithActions
              hasError={false}/>
            <InputTextWithActions
              hasError={false}/>
          </div>

          <div>
            <button>
              <PlusSquare size={64}/>
            </button>
          </div>
        </TopicContainer>

        <SaveContainer>
          <ButtonBorder label='SALVAR' />
        </SaveContainer>
      </FormCreateEdit>
    </ModalDefault>
  )
}
