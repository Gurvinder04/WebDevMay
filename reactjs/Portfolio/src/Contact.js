import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'

function contact() {
    return (
        <Container fluid={true} className='bg-dark text-light'>
            <h1 className='text-light text-center about-heading'>GET IN<span className='span1'> TOUCH</span></h1>
            <Row>
                <Col className='text-center'>
                <h2>DON'T BE SHY !</h2>
                
                </Col>
                <Col>
                    <Form>
                        <Form.Group className="mb-3 w-25" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text"  />
                        </Form.Group>
                        <Form.Group className="mb-3 w-25" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlTextarea1">
                            
                            <Form.Control as="textarea" rows={3} placeholder="Your message"  />
                        </Form.Group>
                    </Form>
                    
                </Col>
            </Row>
        </Container>
    )

}

export default contact