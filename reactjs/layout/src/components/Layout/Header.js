import React from 'react'
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {FaTwitter,FaLinkedin,FaInstagram} from 'react-icons/fa'
function Header() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Blueberry</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to={'/'} className="nav-link text-decoration-none">Homepage</Link>
            <Link to={'/contact'} className="nav-link text-decoration-none">Contact</Link>
            
            <NavDropdown title="Categories" id="collasible-nav-dropdown">
            <Link to={'/movies/aventure'} className="dropdown-item  text-decoration-none">Adventure</Link>
    
              {/* <NavDropdown.Divider /> */}
              <Link to={'/movie/comedy'} className="dropdown-item  text-decoration-none">Comedy</Link>  
            </NavDropdown>
          </Nav>
          <Nav className='d-flex flex-row'>
            <Link to={'/social'}><FaTwitter fill='white' className="display-6 bg-primary  p-1 rounded-1 mx-1"/></Link>
            <Link to={'/social'}><FaLinkedin fill='white' className="display-6 bg-primary border-0 p-1 rounded-1 me-1"/></Link>
            <Link to={'/social'}><FaInstagram fill='white' className="display-6 bg-instagram border-0 p-1 rounded-1"/></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
   
  )
}

export default Header