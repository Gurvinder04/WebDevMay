import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Home() {
  return (
   <Container fluid={true} className='bg-dark d-flex' style={{ "height": "800px" }}>
    <Row className='justify-content-center align-items-center text-center'>
      <Col md={6}>
      <p className='text-light'>Hello world</p>
      </Col>
      <Col md={6}>
      <p className='text-light'>Hello world</p>
      </Col>
    </Row>
    
   </Container>
  )
}

export default Home