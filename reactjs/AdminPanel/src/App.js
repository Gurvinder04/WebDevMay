import React,{useReducer,useState} from 'react'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import {Nav,Navbar,Container,Form,Button} from 'react-bootstrap'
import AddProduct from './AddProduct'
import Login from './Login'
import { initialstate,reducer } from './reducer/UseReducer'

function App() {
    const[state,dispatch]= useReducer(reducer,initialstate)
    
       
    
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
          <Nav className="me-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            </Nav>  
      </Container>
    </Navbar> 

    
    <Routes>
    <Route path='/login' element={<Login/>} />
    <Route path='/add' element={<AddProduct/>} />
    </Routes>
    </>
    
    
  )
}

export default App