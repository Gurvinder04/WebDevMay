import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

function ContactPage() {
  return (
    <>
    <div style={{height:"351px"}}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.7381074881096!2d5.174221715691771!3d50.81749077952773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c11733b01d3019%3A0x2a93ef0ccdc5466d!2sSint-Truiden!5e0!3m2!1sen!2sbe!4v1673258634287!5m2!1sen!2sbe"
     style={{width:"100%",
      height:"100%",
      border:"0"}}
      allowfullscreen=""
       loading="fast"
        >
         </iframe>
         </div>

    <Container className='text-center mt-5'>
             <h2>CONTACT US</h2>
        <div className='pt-3'>
            <form action='https://formspree.io/f/maykrpwn' method='POST'>
              {/* <Row className='justify-content-center'>
                <Col md={2}>
                 <input type='text' name='name' className='contactInput' placeholder='Your Name' required autoComplete='off'/>
                </Col>
                <Col md={2}>
                <input type='email' name='email' className='contactInput' placeholder='Your email' required autoComplete='off'/>
                
                </Col>
              </Row> */}
               <Row className='justify-content-center'>
        <Col md={2}>
          <Form.Control placeholder="First name" className='contactFormControl' />
        </Col>
        <Col md={2}>
          <Form.Control placeholder="Last name" className='contactFormControl' />
        </Col>
        </Row>

        <Row className='justify-content-center'>
        <Form.Control as="textarea" placeholder='Your message' rows={2} cols={10} className='contactForrmControl mt-4' />
      </Row>
      
                
                {/* <textarea rows='4' cols='40'name='textarea'   placeholder='Your query' required autoComplete='off'/><br/> */}
                <Button className='bg-success mb-3'>Send</Button>
            </form>
        </div>

    </Container>
    </>
  )
}

export default ContactPage