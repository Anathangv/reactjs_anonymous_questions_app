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

export const LogInContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;

    label{
      margin-bottom: 0.2rem;
    }
  }

  button[type='submit']{
      height: 3.375rem;
      width: 3.375rem;
      line-height: 0;
      border: none;
      border-radius: 0px 6px 6px 0px;
      background: ${(props) => props.theme['orange-200']};
      color: ${(props) => props.theme['blue-200']};
      transition: 0.4s;

    svg{
      width: 3rem;
      height: 3rem;
    }
  }

  button[type='submit']:hover{
    color: ${(props) => props.theme['blue-900']};
    background: ${(props) => props.theme['orange-400']};
  }
`

export const DividerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  hr{
    flex: 1;
    border-color: ${(props) => props.theme['gray-100']};
  }

  span{
    margin: 0.5rem;
    line-height: 0;
  }
`
