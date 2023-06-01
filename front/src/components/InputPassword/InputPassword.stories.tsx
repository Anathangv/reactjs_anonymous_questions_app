import { ThemeProvider } from 'styled-components'
import { IInputPassword, InputPassword } from './index'
import { defaultTheme } from '../../styles/themes/default'
import { GlobalStyle } from '../../styles/global'
import { Meta, StoryObj } from '@storybook/react'

export default{
  title: 'Components/InputPassword',
  component: InputPassword,
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={defaultTheme}>
          <Story/>
          <GlobalStyle />
        </ThemeProvider>
      )
    }
  ]
} as Meta<IInputPassword>

export const Default:StoryObj<IInputPassword> = {
  args: {
    label: 'Entrar',
    isPasswordVisible: false,
    hasError: false
  }
}
