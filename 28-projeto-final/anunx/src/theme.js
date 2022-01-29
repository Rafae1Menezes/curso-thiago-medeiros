import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#FF6D00',
    },
    error: {
      main: red.A400,
    },
    background: {
       default: '#efefef'
    }
  },
});

export default theme;
