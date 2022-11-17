//React
import React from 'react'
import ReactDOM from 'react-dom/client';

//Pages
// import { Details } from './pages/Details'
// import { SignIn } from './pages/SignIn'
// import { SignUp } from './pages/SignUp'
import { Home } from './pages/Home';

//Design
import { ThemeProvider } from 'styled-components'
import GlobalStyles  from './styles/global'
import theme from './styles/theme';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Home />
    </ThemeProvider>
  </React.StrictMode>
)
