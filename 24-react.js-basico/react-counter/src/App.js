import React, { useState } from 'react'

import Albums from './pages/Albums'
import Counter from './pages/Counter'
import Users from './pages/Users'
import Template from './templates/Template'


const defaultPage = 'albums'

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

  const [page, setPage] = useState(defaultPage)

  const handleOnChangePage = newPage => {
    setPage(newPage)
  }

  const Page = pages[page]?.componet
  


  return (
      <Template 
        activePage={page}
        pages={pages}
        onChangePage={handleOnChangePage}
        >      

        { Page && <Page />}
      </Template>
  )
}

export default App
