import React from 'react'
import {Navbar,Container, Nav} from 'react-bootstrap'
import{BsFillHouseFill,BsFillPersonFill,BsFillBriefcaseFill,BsChatSquareDotsFill,BsCardChecklist} from 'react-icons/bs'
import { Link } from 'react-router-dom'
function Header() {
  return (
    < div className='bottom-bar'>
    <Navbar collapseOnSelect expand="lg"  variant="dark">
    <Container>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto vertical">
          <Nav.Link><BsFillHouseFill className="icon"></BsFillHouseFill><p>HOME</p></Nav.Link>
          <Nav.Link><BsFillPersonFill className="icon"></BsFillPersonFill><p>ABOUT</p></Nav.Link>
          <Nav.Link><BsFillBriefcaseFill className="icon"></BsFillBriefcaseFill><p>PORTFOLIO</p></Nav.Link>
          <Nav.Link><BsChatSquareDotsFill className="icon"></BsChatSquareDotsFill><p>CONTACT</p></Nav.Link>
          <Nav.Link><BsCardChecklist className="icon"></BsCardChecklist><p>BLOG</p></Nav.Link>
         
        </Nav>
        <Nav>
        </Nav>
      </Navbar.Collapse>
    </Container>
    
    </Navbar>
    </div>
    
  )
}

export default Header