import React from 'react'
import { Badge, Button, Col, Container, Row } from 'react-bootstrap'
import { CircularProgressbar } from 'react-circular-progressbar';

function About() {
  return (
    <>
    <Container fluid={true} className='bg-dark'>
      <h1 className='text-light text-center about-heading'>ABOUT<span className='span1'> ME</span></h1>
      <Row className='text-light'>
        <Col>
        <h2 className='text-center personal'>PERSONAL INFOS</h2>
        <div className='bio d-flex'>
          <div>
           <p><span  className='span2'>First Name :</span> Gurvinder</p>
           <p><span  className='span2'>Last Name :</span> Kaur</p>
           <p><span  className='span2'>Age :</span> 27 Years</p>
           <p><span  className='span2'>Nationality :</span> Indian</p>
           <p><span  className='span2'>Freelance :</span> Available</p>
          </div>
          <div>
           <p><span  className='span2'>Address :</span> Sint-truiden</p>
           <p><span  className='span2'>Phone :</span> +21621184010 </p>
           <p><span  className='span2'>Email :</span> kaurgurvinder868@gmail.com</p>
           <p><span  className='span2'>Languages :</span> English,Dutch</p>
           <p><span  className='span2'>Skype :</span> kaur.guru</p>
          </div>
           </div>
           <Button className='cv about'>DOWNLOAD CV</Button>
        </Col>
        <Col></Col>
        
      </Row>
      <hr></hr>
      <Row className='justify-content-center'>
        <h1 className='text-decoration-underline text-light text-center m-5'>MY SKILLS</h1>
        <Col md={3} style={{ 'width':'10rem',margin:'27px'}}>
        <CircularProgressbar value={90} text={`90%`} />
        <p className='text-light text-center'>HTML</p>
        </Col>
        <Col md={3} style={{ 'width':'10rem',margin:'27px'}}>
        <CircularProgressbar value={66} text={`66%`} />
        <p className='text-light text-center'>CSS</p>
        </Col>
        <Col md={3} style={{ 'width':'10rem',margin:'27px'}}>
        <CircularProgressbar value={50} text={`50%`} />
        <p className='text-light text-center'>JAVASCRIPT</p>
        </Col>
        <Col md={3} style={{ 'width':'10rem',margin:'27px'}}>
        <CircularProgressbar value={30} text={`30%`} />
        <p className='text-light text-center'>REACT</p>
        </Col>  
      </Row>
      <Row className='justify-content-center'>
        <Col md={3} style={{ 'width':'10rem',margin:'27px'}}>
        <CircularProgressbar value={50} text={`50%`} />
        <p className='text-light text-center'>NODEJS</p>
        </Col>
        <Col md={3} style={{ 'width':'10rem',margin:'27px'}}>
        <CircularProgressbar value={66} text={`66%`} />
        <p className='text-light text-center'>MONGODB</p>
        </Col>
        <Col md={3} style={{ 'width':'10rem',margin:'27px'}}>
        <CircularProgressbar value={30} text={`30%`} />
        <p className='text-light text-center'>PHP</p>
        </Col>
        <Col md={3} style={{ 'width':'10rem',margin:'27px'}}>
        <CircularProgressbar value={40} text={`40%`} />
        <p className='text-light text-center'>expressjs</p>
        </Col>  
      </Row> 
    </Container>
     
    <h1 className=' text-center m-5 text-decoration-underline'>EXPERIENCE & EDUCATION</h1>
      <div className='v1 d-flex'></div>
      <div>frdgfd</div>
      <div className=''>fthgtrh</div>

     </>
  )
}

export default About