import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

function Home() {
  return (
   <Container fluid={true} className='bg-dark' style={{ "height": "800px" }}>
    <Row className='justify-content-center align-items-center partition'>
      <Col md={6}>
      {/* <p className='text-light'>Hello world</p> */}
      <img src='https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80' style={{"width":"550px" ,"height":"750px","borderRadius":"30px"}}/>
      </Col>
      <Col md={6}>
        <h1 className='name animate__animated animate__fadeInDown'>- I'M GURVINDER KAUR.</h1>
        <h1 className='info'>WEB DESIGNER</h1>
      <p className='text-light fs-5'>I'm a Tunisian based web designer & front‑end developer focused on crafting clean<br></br> & user‑friendly experiences, I am passionate about building excellent software that<br></br> improves the lives of those around me.</p>
      <Button className='about'>MORE ABOUT ME</Button>
      </Col>
     
    </Row>
    
    
   </Container>
  )
}

export default Home