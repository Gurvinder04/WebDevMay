import React from 'react'
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function header() {
  return (
    <Navbar collapseOnSelect expand="lg"   variant="dark">
      <Container>
        <Navbar.Brand href="#home">ShoPIfy</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
          <Link to={'/sign'} className="nav-link text-decoration-none">SignUp</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default header