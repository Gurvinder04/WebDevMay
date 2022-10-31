import React, { useState } from 'react'
import {BrowserRouter} from 'react-router-dom'
import Header from './Header'

function Layout({children}) {
 
  return (
    <BrowserRouter>
   
    {children}
    </BrowserRouter>
    
  )
}

export default Layout