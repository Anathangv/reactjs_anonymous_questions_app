import { CreateEditPresentationModal } from '../../pages/Home/components/CreateEditEventModal'
import { Container } from './styles'
/*
TODO
 - partial border, upper part with orange color
*/

export function Header(){

  return(
    <Container>
      <h1>Easeask</h1>

      <CreateEditPresentationModal />
    </Container>
  )
}
