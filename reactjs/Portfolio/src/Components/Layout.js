import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Header from './Header'

function Layout({children}) {
  return (
    <BrowserRouter>
    <Header/>
    {children}
    </BrowserRouter>
    
  )
}

export default Layout