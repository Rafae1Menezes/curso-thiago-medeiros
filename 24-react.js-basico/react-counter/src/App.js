import React, { useState } from 'react'

import Albums from './Albums'
import Counter from './Counter'
import Users from './Users'

const pages = {
  albums: {
    text: 'Álbuns',
    componet: Albums
  },
  counter: {
    text: 'Contador',
    componet: Counter
  },
  users: {
    text: 'Usuários',
    componet: Users
  }
}

function App() {

  const [page, setPage] = useState()

  const handleOnChangePage = newPage => {
    setPage(newPage)
  }

  const Page = pages[page]?.componet
  const namePages = Object.keys(pages)


  return (
    <>
    
      {
        namePages.map( name => 
          <button onClick={() => handleOnChangePage(name)}>{pages[name].text}</button>  
        )
      }
      
     { Page && <Page />}

    </>
  )
}

export default App
