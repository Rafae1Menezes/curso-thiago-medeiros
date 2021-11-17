import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'
import Home from './pages/Home'
import CustomersList from './pages/customers/List'
import CustomersRegister from './pages/customers/Register.js'
import CustomersEdit from './pages/customers/Edit.js'


const App = () => {
   return (
      <>	
       <Router>
         <TemplateDefault>            
               
               <Routes>
                  <Route path="/" element={<TemplatePage title="Página Inicial" Component={Home} />} />
                  <Route path="/customers" element={<TemplatePage title="Lista de Clientes" Component={CustomersList} />} />
                  <Route path="/customers/add" element={<TemplatePage title="Cadastro de Clientes" Component={CustomersRegister} />} />
                  <Route path="/customers/edit/:id" element={<TemplatePage title="Editar Cliente" Component={CustomersEdit} />} />
               </Routes>
            
         </TemplateDefault> 
         </Router>       
      </>
   )
}

export default App
