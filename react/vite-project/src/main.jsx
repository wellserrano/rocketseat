//React
import React from 'react'
import ReactDOM from 'react-dom/client';

//Route
import { Routes } from './routes';

//Design
import { ThemeProvider } from 'styled-components'
import GlobalStyles  from './styles/global'
import theme from './styles/theme';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
)
