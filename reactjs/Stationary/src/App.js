import React, { createContext, useReducer, useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import 'animate.css'
import Home from './Home'
import ProductDetail from './ProductDetail'
import AddToCart from './AddToCart'
import Sign from './Sign'
import Layout from './Components/Layout'
import Header from './Components/Header'


import { initialstate,reducer } from './reducer/UseReducer'
import CartTable from './Components/CartTable'
export const UserContext = createContext()



function App() {
  const[state,dispatch] = useReducer(reducer,initialstate)
  
  return (
   
      <UserContext.Provider value={{state,dispatch}}>
         <Layout>
         <Header />
         <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/detail/:id' element={<ProductDetail/>} />
         <Route path='/carttable' element={<CartTable/>} />
         <Route path='/sign' element={<Sign/>} />
         
         </Routes>
         </Layout>
      
        </UserContext.Provider>       
   
    
  )
}

export default App