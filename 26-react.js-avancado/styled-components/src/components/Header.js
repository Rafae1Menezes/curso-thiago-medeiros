import styled from "styled-components"

const Caixa = styled.div`
   width: 100px;
   height: 100px;
   background-color: black;
`

const Retangulo = styled.section`
   width: 300px;
   height: 100px;
   background-color: orange;
`

const Header = () => {
   return (
      <>
         <Caixa />
         <Retangulo />
      </>
   )
}

export default Header
