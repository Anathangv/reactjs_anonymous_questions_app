import styled from 'styled-components'

export const Container = styled.header`
  background-color: ${(props) => props.theme['blue-900']};
  display: flex;
  justify-content: center;
  height: 8rem;
  align-items: center;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  form{
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  > button[type='button']{
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
  }

  > button[type='button']:hover{
    background-color: ${(props) => props.theme['blue-600']};
    color: ${(props) => props.theme['gray-100']};
    transition: 0.4s;
  }
`
