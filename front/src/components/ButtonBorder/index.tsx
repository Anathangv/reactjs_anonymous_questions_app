import { StyledButton } from './styles'

interface IButtonBorder {
  label: string
}

export function ButtonBorder({ label }: IButtonBorder){
  return(
    <StyledButton type="button">
      {label}
    </StyledButton>
  )
}
