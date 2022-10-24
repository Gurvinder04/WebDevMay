import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import 'animate.css'
import Home from './Home';
import About from './About';
import Layout from './Components/Layout';
import Header from './Components/Header';


function App() {
  return (
   <Layout>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/About' element={<About/>} />
    </Routes>
    </Layout>
    
  )
}

export default App