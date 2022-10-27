import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Blog() {
  return (
    <Container fluid={true} className='bg-dark'>
    <h1 className='text-light text-center about-heading'>MY<span className='span1'> BLOG</span></h1>
    <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://slimhamdi.net/tunis/dark/img/blog/blog-post-1.jpg" />
      <Card.Body>
        <Card.Title><Link to={''} className='Acard'>How to Own Your Audience by Creating an Email List</Link></Card.Title>
        <Card.Text className=''>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...
        </Card.Text>
        
      </Card.Body>
    </Card>
        </Col>
    </Row>
  </Container>
  )
}

export default Blog