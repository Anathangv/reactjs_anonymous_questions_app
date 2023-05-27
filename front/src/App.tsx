import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Header } from './components/Header'
import { EventTitle } from './components/EventTitle'

/*
 - eslint
 - vite
 - typescript
 - styled-components
 - radix-ui/react-dialog
 - phosphor-icons
 - react-hook-form
 - zod
 - @hookform/resolvers
*/

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <EventTitle title='fixed title for while - OK' />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
