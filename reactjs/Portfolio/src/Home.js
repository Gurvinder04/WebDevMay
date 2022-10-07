import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Home() {
  return (
   <Container fluid={true} className='bg-dark' style={{ "height": "800px" }}>
    <Row className='justify-content-center align-items-center text-center partition'>
      <Col md={6}>
      {/* <p className='text-light'>Hello world</p> */}
      <img src='https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-712513.jpg&fm=jpg' style={{"width":"600px" ,"height": "600px" }}/>
      </Col>
      <Col md={6}>
        <h1 className='name'>-I'M GURVINDER KAUR.</h1>
        <h1 className='info'>WEB DESIGNER</h1>
      <p className='text-light'>I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
      </Col>
    </Row>
    
   </Container>
  )
}

export default Home