import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './Home'
import Layout from './Components/Layout'

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