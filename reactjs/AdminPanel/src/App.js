import React,{createContext, useReducer,useState} from 'react'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import {Nav,Navbar,Container,Form,Button} from 'react-bootstrap'
import AddProduct from './AddProduct'
import Login from './Login'
import ProductInfo from './ProductInfo'
import EditProduct from './EditProduct'
import Layout from './Component/Layout'
import Header from './Component/Header'
import Home from './Home'
import { initialstate,reducer } from './reducer/UseReducer'
export const UserContext = createContext()

function App() {
    const[state,dispatch]= useReducer(reducer,initialstate)
    
       
    
  return (
    <>
       {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
          <Nav className="me-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            </Nav>  
      </Container>
    </Navbar> */}


<UserContext.Provider value={{state,dispatch}}>

  <Header />
    <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/addproduct' element={<AddProduct/>} />
    <Route path='/productinfo' element={<ProductInfo/>} />
    <Route path='/editproduct/:id' element={<EditProduct/>} />
    </Routes>
    
    </UserContext.Provider>
    
    </>
    
    
  )
}

export default App