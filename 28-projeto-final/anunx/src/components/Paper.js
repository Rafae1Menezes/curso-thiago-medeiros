import { Paper as PaperMui} from "@mui/material"
import { styled } from '@mui/material/styles'

const MyPaper = styled(PaperMui)(({ theme }) => ({
   marginBottom: theme.spacing(2),
   padding: '18px',
}))

const Paper = ({ children, spaceBottom, sx }) => {

   return (
      <MyPaper sx={sx}  elevation={1}>
         { children }
      </MyPaper>
   )
}

export default Paper