import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Home from './Home';
import Layout from './Components/Layout';
import Header from './Components/Header';


function App() {
  return (
   <Layout>
    <Routes>
    <Route path='/' element={<Home/>} />
    </Routes>
    </Layout>
    
  )
}

export default App