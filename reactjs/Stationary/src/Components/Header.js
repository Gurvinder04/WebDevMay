import React, { useContext } from 'react'
import { Col, Container, Dropdown, DropdownButton, Form, InputGroup, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import { FaRegHeart, FaSearch, FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {UserContext} from '../App'
import { useFilterContext } from '../Context/FilterContext'


function Header() {
  const { state, dispatch } = useContext(UserContext)
  const {filters:{text},searchValue} = useFilterContext()
  const RenderMenu = () => {
    if (state) {
      return (
        <>
           <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container>
             
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/">Notebooks</Nav.Link>
                  <Nav.Link href="/">Pens & Pencil</Nav.Link>
                  <Nav.Link href="/">Office Stationary</Nav.Link>
                  <Nav.Item><Link to={'/allproduct'}>All Products</Link></Nav.Item>
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
        <Navbar collapseOnSelect expand="lg" variant="dark" className="justify-content-center">
        <Container>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/">Notebooks</Nav.Link>
                  <Nav.Link href="/">Pens & Pencil</Nav.Link>
                  <Nav.Link href="/">Office Stationary</Nav.Link>
                  <Nav.Link href="/allproduct">All Products</Nav.Link>
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
         <Row className='stationero mt-5 text-center'>
           <Col className='mt-5'>
          <h2 className='heading'><span className='stat'>S</span>tati<span className='onero'>Onero</span></h2>
          </Col>
     
      <Col className='mt-4 searchbar'>
        <Form onSubmit={(e)=>e.preventdefault()}>
      <InputGroup className="mt-2 form-style">
        <Form.Control aria-label="Text input with dropdown button" name='text' value={text} onChange={searchValue} >
          </Form.Control>
        
        <DropdownButton
          variant=""
          title="All Categories"
          id="input-group-dropdown-2"
          align="end"
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
        <FaSearch className='fasearch'></FaSearch>
       
      </InputGroup>
      </Form>
      </Col> 
      <Col className='mt-5'>
      <FaRegHeart className='fasearch'></FaRegHeart>
       <FaShoppingCart className='fasearch'></FaShoppingCart>
       
      </Col>
      
       
      
    </Row>         
    <RenderMenu />
    {console.log('searchinggg',text)}
    </>
  )
}
export default Header