import { ThemeProvider } from 'styled-components'
import { Header } from '.'
import { defaultTheme } from '../../styles/themes/default'
import { GlobalStyle } from '../../styles/global'
import { Meta, StoryObj } from '@storybook/react'

export default{
  title: 'Components/Header',
  component: Header,
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
} as Meta

export const Default: StoryObj = {}
