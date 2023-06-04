import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Header } from './components/Header'
import { EventTitle } from './components/EventTitle'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

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
 - react-router-dom
*/

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <Header />
      <EventTitle title='fixed title for while - OK' />
      */}
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
