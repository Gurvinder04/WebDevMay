import React, { useEffect, useState } from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Category from './Category'
import Layout from './components/Layout/Layout'
import Home from './Home'
import ReceipeDetail from './ReceipeDetail'



function App() {
 
 
  return (
   <Layout>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/:mid' element ={<ReceipeDetail/>} />
    <Route path='category/:cat' element ={<Category/>} />
    
   </Routes>
   </Layout>
  )
}

export default App