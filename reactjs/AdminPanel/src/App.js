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
import AllCustomer from './AllCustomer'
import { initialstate,reducer } from './reducer/UseReducer'


function App() {
    const[state,dispatch]= useReducer(reducer,initialstate)
    
       
    
  return (

  
    <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/allcustomer' element={<AllCustomer/>} />
    <Route path='/addproduct' element={<AddProduct/>} />
    <Route path='/productinfo' element={<ProductInfo/>} />
    <Route path='/editproduct/:id' element={<EditProduct/>} />
    </Routes>
    
    
    
  )
}

export default App