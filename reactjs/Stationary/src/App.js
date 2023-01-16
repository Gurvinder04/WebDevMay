import React, { createContext, useEffect, useReducer, useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import 'animate.css'
import Home from './Home'
import ProductDetail from './ProductDetail'
import Category from './Category'
import AddToCart from './Components/AddToCart'
import Sign from './Sign'
import Layout from './Components/Layout'
import Header from './Components/Header'


import { initialstate,reducer } from './reducer/UseReducer.js'
import CartTable from './Components/CartTable'
import Cart from './Cart'
import Products from './Products'
import ContactPage from './ContactPage'
import Blog from './Blog'
import Aos from 'aos'
import 'aos/dist/aos.css'
export const UserContext = createContext()



function App() {
  const[state,dispatch] = useReducer(reducer,initialstate)
  useEffect(() => {
    
    Aos.init({
      offset:300,
      duration:1000
    })
  }, [])
  
  return (
   
      <UserContext.Provider value={{state,dispatch}}>
         <Layout>
         <Header />
         <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/product/:id' element={<ProductDetail/>} />
         <Route path ='/detail/:cat' element={<Category/>} />
         <Route path ='/product' element={<Products/>} />
         <Route path='/cart' element={<Cart/>} />
         <Route path='/sign' element={<Sign/>} />
         <Route path='/blog' element={<Blog/>} />
         <Route path='/contact' element={<ContactPage/>} />
         
         </Routes>
         </Layout>
      
        </UserContext.Provider>       
   
    
  )
}

export default App