import React, { createContext, useReducer, useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import 'animate.css'
import Home from './Home'
import ProductDetail from './ProductDetail'
import Category from './Category'
import AddToCart from './Components/AddToCart'
import Sign from './Sign'
import Layout from './Components/Layout'
import Header from './Components/Header'


import { initialstate,reducer } from './reducer/UseReducer'
import CartTable from './Components/CartTable'
import Cart from './Cart'
import Products from './Products'
export const UserContext = createContext()



function App() {
  const[state,dispatch] = useReducer(reducer,initialstate)
  
  return (
   
      <UserContext.Provider value={{state,dispatch}}>
         <Layout>
         <Header />
         <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/product/:id' element={<ProductDetail/>} />
         <Route path ='/detail/:cat' element={<Category/>} />
         <Route path ='/allproduct' element={<Products/>} />
         <Route path='/cart' element={<Cart/>} />
         <Route path='/sign' element={<Sign/>} />
         
         </Routes>
         </Layout>
      
        </UserContext.Provider>       
   
    
  )
}

export default App