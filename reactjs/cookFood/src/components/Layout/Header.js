import React, { useEffect, useRef, useState } from 'react'
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

function Header({Input}) {

  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container className='text-light'>
          <Navbar.Brand href="#home"><img
            // src="	https://images.squarespace-cdn.com/content/v1/5dfa2bfbdaf82940e4afd01f/1584582142266-ZH5X1F9OWE5KJMKW72NO/Logo.png"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Jq3bk3mXllU58cgnNQfiOHeutpNym3CujQ&usqp=CAU"
            style={{ "width": "6rem", "borderRadius": "53px" }}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to={'/'} className="nav-link text-decoration-none">HOME</Link>
              <NavDropdown title="CATEGORY" id="basic-nav-dropdown">
                <Link to={'category/Beef'} className='dropdown-item'>Beef</Link>
                <Link to={'category/Chicken'} className='dropdown-item'>Chicken</Link>
                <Link to={'category/Dessert'} className='dropdown-item'>Dessert</Link>
                <Link to={'category/Lamb'} className='dropdown-item'>Lamb</Link>
                <Link to={'category/Miscellaneous'} className='dropdown-item'>Miscellaneous</Link>
                <Link to={'category/Pasta'} className='dropdown-item'>Pasta</Link>
                <Link to={'category/Pork'} className='dropdown-item'>Pork</Link>
                <Link to={'category/Seafood'} className='dropdown-item'>Seafood</Link>
                <Link to={'category/Side'} className='dropdown-item'>Side</Link>
                <Link to={'category/Starter'} className='dropdown-item'>Starter</Link>
                <Link to={'category/Vegan'} className='dropdown-item'>Vegan</Link>
                <Link to={'category/Breakfast'} className='dropdown-item'>Breakfast</Link>
                <Link to={'category/Goat'} className='dropdown-item'>Goat</Link>
                <NavDropdown.Divider />

              </NavDropdown>
              <Link to={'/contact'} className="nav-link text-decoration-none">BLOG</Link>
              <Link to={'/signup'} className="nav-link text-decoration-none">SIGNUP</Link>
              

            </Nav>
            <Form className="d-flex">
              <Form.Control
                onChange={Input}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              {/* <Button variant="outline-success">Search</Button> */}
            </Form>
            <Nav className='d-flex flex-row'>
              <Link to={'/social'}><FaTwitter fill='black' className="display-6   p-1 rounded-1 mx-1" /></Link>
              <Link to={'/social'}><FaLinkedin fill='black' className="display-6  border-0 p-1 rounded-1 me-1" /></Link>
              <Link to={'/social'}><FaInstagram fill='white' className="display-6 bg-instagram border-0 p-1 rounded-1" /></Link>
            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}

export default Header