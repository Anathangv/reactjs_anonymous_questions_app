import { Meta, StoryObj } from '@storybook/react'
import { EventTitle, IEventTitleProps } from './index'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'
import { GlobalStyle } from '../../styles/global'

/*
TODO:
 - is it possible to use themeprovider and globalstyle generically
*/

export default{
  title: 'Components/EventTitle',
  component: EventTitle,
  args: {
    title: 'First front-end convention of 2023'
  },
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={defaultTheme}>
          <div style={{ 'marginTop': '1rem' }}>
            <Story/>
          </div>
          <GlobalStyle />
        </ThemeProvider>
      )
    }
  ]
} as Meta<IEventTitleProps>

export const Default: StoryObj<IEventTitleProps> = {}

export const ShortTitle: StoryObj<IEventTitleProps> = {
  args: {
    title: 'Convention of 2023',
  }
}

export const LongTitle: StoryObj<IEventTitleProps> = {
  args: {
    title: 'First National Convention of React, Storybook and Typescript of 2023',
  }
}
