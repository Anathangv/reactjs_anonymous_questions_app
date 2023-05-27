import { Container } from './styles'

export interface IEventTitleProps{
  title: string
}

export function EventTitle({ title }: IEventTitleProps){
  return(
    <Container>
      <h3>{title}</h3>
    </Container>
  )
}
