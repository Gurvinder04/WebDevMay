import React, { useContext } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {UserContext} from '../App'


function Header() {
  const { state, dispatch } = useContext(UserContext)
  const RenderMenu = () => {
    if (state) {
      return (
        <>
        
          <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container>
              <Navbar.Brand href="#home">ShoPIfy</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/">Notebooks</Nav.Link>
                  <Nav.Link href="/">Pens & Pencil</Nav.Link>
                  <Nav.Link href="/">Office Stationary</Nav.Link>
                </Nav>
                <Nav>
                  <Link to={'/'} className="nav-link text-decoration-none">Logout</Link>
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
        <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoPIfy</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/">Notebooks</Nav.Link>
                  <Nav.Link href="/">Pens & Pencil</Nav.Link>
                  <Nav.Link href="/">Office Stationary</Nav.Link>
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

  return (
    <>
    <div className='marquee'>
          <div>25% Off Your First Month Subscription for Chegg Study Packat Chegg</div>
        </div>           
    <RenderMenu />
    </>
  )
}
export default Header