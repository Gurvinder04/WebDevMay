import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {FaTwitter,FaLinkedin,FaInstagram} from 'react-icons/fa'

function Header() {
  return (
    <>
   <Navbar collapseOnSelect expand="lg">
      <Container className='text-light'>
        <Navbar.Brand href="#home"><img
              src="	https://images.squarespace-cdn.com/content/v1/5dfa2bfbdaf82940e4afd01f/1584582142266-ZH5X1F9OWE5KJMKW72NO/Logo.png"
              style={{"width": "9rem"}}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Home">MENU</Nav.Link>
            <Nav.Link href="#pricing">CATERING MENU</Nav.Link>
            <Nav.Link href="#pricing">CONTACT</Nav.Link>
            <Nav.Link href="#pricing">HIRING</Nav.Link>
           
          </Nav>
          <Nav className='d-flex flex-row'>
            <Link to={'/social'}><FaTwitter fill='black' className="display-6   p-1 rounded-1 mx-1"/></Link>
            <Link to={'/social'}><FaLinkedin fill='black' className="display-6  border-0 p-1 rounded-1 me-1"/></Link>
            <Link to={'/social'}><FaInstagram fill='white' className="display-6 bg-instagram border-0 p-1 rounded-1"/></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}

export default Header