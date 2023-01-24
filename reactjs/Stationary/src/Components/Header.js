import React, { useContext } from 'react'
import { useReducer } from 'react'
import { useEffect } from 'react'
import { Badge,Col, Container, Dropdown, DropdownButton, Form, InputGroup, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import { FaRegHeart, FaSearch, FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {UserContext} from '../App.js'
import { useAuthContext } from '../Context/AuthContext.js'
import { useFilterContext } from '../Context/FilterContext.js'


function Header() {
  const { loggedin} = useAuthContext()
  
  const RenderMenu = () => {
    if (loggedin) {
      return (
        <>
           <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container className='mt-4'>
            <Navbar.Brand className='brandName'>StatiOnerO</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/allproduct">Products</Nav.Link>
                  <Nav.Link href="/">Category</Nav.Link>
                  <Nav.Link href="/blog">Blog</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link href='/cart'><FaShoppingCart className='fs-4'></FaShoppingCart><Badge className='bg-danger cartCount'>1</Badge></Nav.Link>
                  <Link to={'/sign'} className="nav-link text-decoration-none">Logout</Link>
                </Nav>
                </Navbar.Collapse>
                        </Container>
                      </Navbar>
              </>
              )
    }
    else{
      return(
        <>
        <Navbar collapseOnSelect expand="lg" variant="dark" className="justify-content-center">
        <Container className='mt-4'>
        <Navbar.Brand className='brandName'>StatiOnerO</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/allproduct">Products</Nav.Link>
                  <Nav.Link href="/">Category</Nav.Link>
                  <Nav.Link href="/blog">Blog</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                  
            </Nav>
            <Nav>
              <Link to={'/sign'} className="nav-link text-decoration-none">SignUp</Link>
            </Nav>
            </Navbar.Collapse>
                </Container>
              </Navbar>

            </>
          )
     }
}
useEffect(()=>{
     //dispatch({type:"USER"})
},[loggedin])
  return (
    <>  
    <div className='marquee1'>
          <div>25% Off Your First Month Subscription for Chegg Study Packat Chegg</div>
        </div>          
     <RenderMenu />

    </>
  )
}
export default Header