import React from 'react'
import {Navbar,Container, Nav, NavLink, NavDropdown} from 'react-bootstrap'
import{BsFillHouseFill,BsFillPersonFill,BsFillBriefcaseFill,BsChatSquareDotsFill,BsCardChecklist} from 'react-icons/bs'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
      {/*< div className='bottom-bar'>
    <Navbar collapseOnSelect expand="lg"  variant="dark">
    <Container>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto vertical">
        
          <Link to={'/'}><BsFillHouseFill className="icon"></BsFillHouseFill><br></br></Link><br></br>
          <Link to={'about'}><BsFillPersonFill className="icon"></BsFillPersonFill><br></br></Link><br></br>
          <Link to={'portfolio'}><BsFillBriefcaseFill className="icon"></BsFillBriefcaseFill><br></br></Link><br></br>
          <Link to={'contact'}><BsChatSquareDotsFill className="icon"></BsChatSquareDotsFill><br></br></Link><br></br>
          <Link to={'blog'}><BsCardChecklist className="icon"></BsCardChecklist><br></br></Link> <br></br>
     

        </Nav>
      </Navbar.Collapse>
    </Container>
    
    </Navbar>
  </div> */}
    
  
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="/"><BsFillHouseFill className="icon"></BsFillHouseFill></Nav.Link>
          <Nav.Link href="about"><BsFillPersonFill className="icon"></BsFillPersonFill></Nav.Link>
          <Nav.Link href="portfolio"><BsFillBriefcaseFill className="icon"></BsFillBriefcaseFill></Nav.Link>
          <Nav.Link href="contact"><BsChatSquareDotsFill className="icon"></BsChatSquareDotsFill></Nav.Link>
          <Nav.Link href="blog"><BsCardChecklist className="icon"></BsCardChecklist></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  )
}

export default Header