import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField'

function App() {
  return (
    <>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Box>


      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </>
  )
}

export default App
