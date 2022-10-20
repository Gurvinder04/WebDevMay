import React from 'react'
import { Container, Row } from 'react-bootstrap'

function About() {
  return (
   <Container fluid={true} className='bg-dark'>
    <h1 className='text-light text-center about-heading'>ABOUT<span> ME</span></h1>
    <Row className='text-light'>
        <h2>PERSONAL INFO</h2>
    </Row>
   </Container>
  )
}

export default About