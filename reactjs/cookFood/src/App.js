import React, { useState } from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './Home'



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