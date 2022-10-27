import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import {FaArrowRight} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Home() {
  return (
   <Container fluid={true} className='bg-dark' style={{ "height": "800px" }}>
    <Row className='justify-content-center align-items-center partition'>
      <Col md={6}>
        <div className='color-block d-none d-lg-block'></div>
      {/* <p className='text-light'>Hello world</p> */}
      <img src='https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80' style={{"width":"550px" ,"height":"750px","borderRadius":"30px","marginLeft":"54px"}}/>
      
      </Col>
      <Col md={6}>
        <h1 className='name typing-demo '>- I'M GURVINDER KAUR.</h1>
        <h1 className='info'>WEB DESIGNER</h1>
      <p className='text-light fs-5'>I'm a Tunisian based web designer & front‑end developer focused<br></br> on crafting clean & user‑friendly experiences, I am passionate<br></br> about building excellent software that improves the lives of those<br></br> around me.</p>
      <Button className='about'><Link to={'/about'}>MORE ABOUT ME</Link><FaArrowRight className='arrow'></FaArrowRight></Button>
      </Col>
     
    </Row>
    
    
   </Container>
  )
}

export default Home