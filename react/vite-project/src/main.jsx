//React
import React from 'react'
import ReactDOM from 'react-dom/client'

//Pages
import { Details } from './pages/Details'
import { SignIn } from './pages/SignIn'

//Design
import { ThemeProvider } from 'styled-components'
import GlobalStyles  from './styles/global'
import theme from './styles/theme';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <SignIn />
    </ThemeProvider>
  </React.StrictMode>
)
