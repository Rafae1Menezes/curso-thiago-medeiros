import React from 'react'
import Header from './Header'

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
         <Header titulo="HELLO WORLD" subtitulo="outro texto" />
      </>
   )
}

export default App
