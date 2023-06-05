import styled from 'styled-components'

export const StyledButton = styled.button`

  border: 1px solid ${(props) => props.theme['blue-600']};
  background: none;
  height: 3.375rem;
  padding: 0.8rem;
  width: 18.375rem;
  border-radius: 6px;
  color: ${(props) => props.theme['blue-600']};
  font-weight: 700;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover{
    background-color: ${(props) => props.theme['blue-600']};
    color: ${(props) => props.theme['gray-100']};
    transition: 0.4s;
  }
`
