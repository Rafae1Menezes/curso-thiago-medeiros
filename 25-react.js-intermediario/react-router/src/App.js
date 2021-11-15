import React from 'react'
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from "react-router-dom"

import Users from './pages/Users'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
    
  )
}

export default App;
