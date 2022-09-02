import React, { useState } from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './Home'
import ReceipeDetail from './ReceipeDetail'



function App() {
  return (
   <Layout>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/:idMeal' element={<ReceipeDetail/>} />
   </Routes>
   </Layout>
  )
}

export default App