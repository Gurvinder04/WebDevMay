import React, { createContext, useReducer, useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './Home'
import Sign from './Sign'
import Layout from './Components/Layout'
import Header from './Components/Header'

import { initialstate,reducer } from './reducer/UseReducer'
export const UserContext = createContext()



function App() {
  const[state,dispatch] = useReducer(reducer,initialstate)
  
  return (
   
      <UserContext.Provider value={{state,dispatch}}>
         <Layout>
         <Header />
         <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/sign' element={<Sign/>} />
         
         </Routes>
         </Layout>
      
        </UserContext.Provider>       
   
    
  )
}

export default App