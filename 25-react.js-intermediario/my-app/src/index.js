import React from 'react';
import ReactDOM from 'react-dom';

import { createTheme} from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core'
import { lightBlue, orange } from '@material-ui/core/colors';

import App from './App';
import './index.css'




const theme = createTheme({
  palette: {
    primary: {
      main: lightBlue[900]
    },
    secondary: {
      main: orange[900]
    }
  }
})



ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

