import React from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Contact from './Contact'
import Home from './Home'

function App() {
  return (
    <Layout>
    <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path ='/contact' element={<Contact/>} />
    </Routes>
    </Layout>
    
  )
}

export default App