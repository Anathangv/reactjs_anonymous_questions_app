import { ThemeProvider } from 'styled-components'
import { IModalDefaultProps, ModalDefault } from './index'
import { defaultTheme } from '../../styles/themes/default'
import { GlobalStyle } from '../../styles/global'
import { Meta, StoryObj } from '@storybook/react'

export default{
  title: 'Components/ModalDefault',
  component: ModalDefault,
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
} as Meta<IModalDefaultProps>

export const Default:StoryObj<IModalDefaultProps> = {
  args: {
    isOpen: true,
    title: 'Test Modal Title',
    children: <div><span>{'modal content is placed here'}</span></div>
  }
}
