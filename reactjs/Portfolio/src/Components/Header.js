import React from 'react'
import {Navbar,Container, Nav} from 'react-bootstrap'
import{BsFillHouseFill,BsFillPersonFill,BsFillBriefcaseFill,BsChatSquareDotsFill,BsCardChecklist} from 'react-icons/bs'
function Header() {
  return (
    < div className='bottom-bar'>
    <Navbar collapseOnSelect expand="lg"  variant="dark">
    <Container>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto vertical">
          <Nav.Link><BsFillHouseFill className="icon"></BsFillHouseFill></Nav.Link>
          <Nav.Link><BsFillPersonFill className="icon"></BsFillPersonFill></Nav.Link>
          <Nav.Link><BsFillBriefcaseFill className="icon"></BsFillBriefcaseFill></Nav.Link>
          <Nav.Link><BsChatSquareDotsFill className="icon"></BsChatSquareDotsFill></Nav.Link>
          <Nav.Link><BsCardChecklist className="icon" ></BsCardChecklist></Nav.Link>
         
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