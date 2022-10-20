import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function About() {
  return (
    <Container fluid={true} className='bg-dark'>
      <h1 className='text-light text-center about-heading'>ABOUT<span> ME</span></h1>
      <Row className='text-light'>
        <h2>PERSONAL INFOS</h2>
        <Col>
          First Name: Steve<br></br>
          Age: 27 Years<br></br>
          Freelance: Available<br></br>
          Phone: +21621184010<br></br>
          Skype: steve.milner
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}

export default About