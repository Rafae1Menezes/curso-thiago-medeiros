import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'
import TemplateClean from './templates/Clean'
import Home from './pages/Home'
import CustomersList from './pages/customers/List'
import CustomersRegister from './pages/customers/Register'
import CustomersEdit from './pages/customers/Edit'
import Login from './pages/Login'
import NotFoundPage from './pages/NotFoundPage'


const App = () => {
   return (
      <>	
         <Router>
               <Routes>
                  <Route path="/" element={<TemplateDefault> <TemplatePage title="Página Inicial" Component={Home} /> </TemplateDefault>} />
                  <Route path="/customers" element={<TemplateDefault> <TemplatePage title="Lista de Clientes" Component={CustomersList} /> </TemplateDefault>} />
                  <Route path="/customers/add" element={<TemplateDefault> <TemplatePage title="Cadastro de Clientes" Component={CustomersRegister} /> </TemplateDefault>} />
                  <Route path="/customers/edit/:id" element={<TemplateDefault> <TemplatePage title="Editar Cliente" Component={CustomersEdit} /> </TemplateDefault>} />
                  <Route path="*"  element={<TemplateDefault> <TemplatePage title="Error 404" Component={NotFoundPage} /> </TemplateDefault>} />

                  <Route path="/login" element={<TemplateClean title="Acesso Restrito" Component={Login} /> } />
               </Routes>            
         </Router>       
      </>
   )
}

export default App
