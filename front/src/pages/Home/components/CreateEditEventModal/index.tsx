import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ModalDefault } from '../../../../components/ModalDefault'
import { FormCreateEdit } from './styles'
import { InputText } from '../InputText'
import { InputTextWithActions } from '../InputTextWithActions'

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

        <div>
          <label>
              Tema(s)
          </label>
          <InputTextWithActions
            hasError={false}/>
          <InputTextWithActions
            hasError={false}/>
          <InputTextWithActions
            hasError={false}/>
        </div>

      </FormCreateEdit>
    </ModalDefault>
  )
}
