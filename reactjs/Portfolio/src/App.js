import React, { useEffect } from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import 'animate.css'
import Home from './Home';
import About from './About';
import Contact from './Contact'
import Blog from './Blog'
import Layout from './Components/Layout';
import Header from './Components/Header';
import Projects from './Projects';
import Aos from 'aos'
import 'aos/dist/aos.css'


function App() {

  useEffect(()=>{
      Aos.init()
  },[])
  return (
   <Layout>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/projects' element={<Projects/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/blog' element={<Blog/>} />
    </Routes>
    </Layout>
    
  )
}

export default App