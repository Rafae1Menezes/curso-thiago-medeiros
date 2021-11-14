import React from 'react'

import Header from './Header'
import Content from './Content'
import Card from './Card'
import Cards from './Cards'

import reactImg from './images/react.jpg'
import nodeImg from './images/node.jpg'
import threeImg from './images/three.jpg'

/* 
COMPONETES - Criando e Usando

- Import React
- Função que retorna JSX
    - Sempre tem que ter um elemento pai
    - React fragment
- Exportar Função
-Para usar o component:
    - Importar
    - Usar como tag, exemplo <App />
- COmponentes podem receber propredades (props)
*/

function App() {
   return (
      <>
         <Header titulo="HELLO WORLD" subtitulo="Subtítulo" />
         <Content titulo="Bem-vindo">
            <Cards>
               <Card 
                  imagem={reactImg}
                  titulo="React.JS"
                  texto="Ao contrário da crença popular, o Lorem Ipsum não. Ao contrário da crença popular, o Lorem Ipsum não"
               />
               <Card 
                  imagem={nodeImg}
                  titulo="Node.JS"
                  texto="Ao contrário da crença popular, o Lorem Ipsum não. Ao contrário da crença popular, o Lorem Ipsum não"
               />
               <Card 
                  imagem={threeImg}
                  titulo="Three.JS"
                  texto="Ao contrário da crença popular, o Lorem Ipsum não. Ao contrário da crença popular, o Lorem Ipsum não"
               />
            </Cards>            
         </Content>
      </>
   )
}

export default App
