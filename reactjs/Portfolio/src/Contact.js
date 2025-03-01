import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { RiMailOpenFill } from 'react-icons/ri'
import { BsGithub } from 'react-icons/bs'
import { FiSend } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function contact() {
    return (
        <Container fluid={true} className='bg-dark text-light'>
            <h1 className='text-light text-center about-heading'>GET IN<span className='span1'> TOUCH</span></h1>
            <Row className='getIn m-5'>
                <Col md={3} style={{'paddingTop': '50px' }} className='contactCol'>
                    <h2 className='typing-demo '>DON'T BE SHY !</h2>
                    <p className='contactPara'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                    <RiMailOpenFill className='mail'></RiMailOpenFill><h6>MAIL ME</h6>
                    <p className='contactPara'>kaurgurvinder19304@gmail.com</p>
                    <a href ="https://github.com/Gurvinder04" ><BsGithub className='mail'></BsGithub><h6>GITHUB</h6></a>
                    <p></p>

                </Col>
                <Col md={4} style={{ 'paddingTop': '50px'}}>
                    <Form  action="https://formspree.io/f/xwkjvnlg" method="POST">
                        <Row>
                            <Col>
                                <Form.Control placeholder="Your name" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Your email" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Your subject" />
                            </Col>
                            <Form.Control as="textarea" placeholder="Your message" />


                        </Row>
                    </Form>
                    <Button className='about'><Link to={''} className='aboutQuery'>send message</Link><FiSend className='arrow'></FiSend></Button>

                </Col>
            </Row>
        </Container>
    )

}

export default contact