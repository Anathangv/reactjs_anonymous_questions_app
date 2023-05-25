import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme['blue-900']};
  width: 100%;
  max-width: 45rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: -2rem;
  padding: 0rem 1.5rem 0rem;
  /* border: 1px solid red; */

  h3{
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 3.5rem;
    color: ${(props) => props.theme.orange};
  }
`
