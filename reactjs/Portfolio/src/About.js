import React from 'react'
import { Badge, Button, Col, Container, Row } from 'react-bootstrap'
import { CircularProgressbar } from 'react-circular-progressbar';
import {FaGraduationCap,FaBriefcase} from 'react-icons/fa'

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
        <CircularProgressbar value={99} text={`99%`} />
        <p className='text-light text-center'>HTML</p>
        </Col>
        <Col md={3} style={{ 'width':'10rem',margin:'27px'}}>
        <CircularProgressbar value={98} text={`98%`} />
        <p className='text-light text-center'>CSS</p>
        </Col>
        <Col md={3} style={{ 'width':'10rem',margin:'27px'}}>
        <CircularProgressbar value={95} text={`95%`} />
        <p className='text-light text-center'>JAVASCRIPT</p>
        </Col>
        <Col md={3} style={{ 'width':'10rem',margin:'27px'}}>
        <CircularProgressbar value={80} text={`80%`} />
        <p className='text-light text-center'>REACT</p>
        </Col>  
      </Row>
      <Row className='justify-content-center'>
        <Col md={3} style={{ 'width':'10rem',margin:'27px'}}>
        <CircularProgressbar value={85} text={`85%`} />
        <p className='text-light text-center'>NODEJS</p>
        </Col>
        <Col md={3} style={{ 'width':'10rem',margin:'27px'}}>
        <CircularProgressbar value={90} text={`90%`} />
        <p className='text-light text-center'>MONGODB</p>
        </Col>
        <Col md={3} style={{ 'width':'10rem',margin:'27px'}}>
        <CircularProgressbar value={30} text={`30%`} />
        <p className='text-light text-center'>PHP</p>
        </Col>
        <Col md={3} style={{ 'width':'10rem',margin:'27px'}}>
        <CircularProgressbar value={85} text={`85%`} />
        <p className='text-light text-center'>expressjs</p>
        </Col>  
      </Row> 
    </Container>
     
    <h1 className=' text-center m-5 text-decoration-underline'>EXPERIENCE & EDUCATION</h1>
    <div className='d-flex main'>
      <Col className=''>
      <div className='animate__animated animate__flipInX animate__delay-1s backcolor sidechange setmargin1'>
        <Badge className='bg-dark year'>2022</Badge><FaBriefcase></FaBriefcase><br></br>
        <h5 className='web'>PRODUCTIE-<span className='span2'> A&L JEUBIS</span></h5>
       <p className='description'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        </div>
        <hr></hr>
        <div className='animate__animated animate__flipInX animate__delay-3s backcolor fruit'>
        <Badge className='bg-dark year'>2022</Badge><FaBriefcase></FaBriefcase><br></br>
       <h5 className='web'>FRUIT SECTOR-<span className='span2'> A&L JEUBIS</span></h5>
       <p className='description'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        </div>
       
      </Col>
      <div className='v1'></div>
      <Col className='education'>
        <div className='animate__animated animate__flipInX  backcolor'>
        <Badge className='bg-dark year'>2022</Badge><FaGraduationCap></FaGraduationCap><br></br>
        
       <h5 className='web'>WEB DEVELOPER-<span className='span2'> INTEC BRUSSEL</span></h5>
       <p className='description'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        </div>
       
      <div className='animate__animated animate__flipInX animate__delay-2s backcolor setmargin2'>
      <Badge className='bg-dark year'>2016-2020</Badge><FaGraduationCap></FaGraduationCap><br></br>
       <h5 className='web'>BACHELOR IN COMPUTER WETENSCHAPPEN-<span className='span2'> ACE COLLEGE</span></h5>
       <p className='description'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      </div>
      
      <div className='animate__animated animate__flipInX animate__delay-4s backcolor setmargin2'>
       <Badge className='bg-dark year'>2017</Badge><FaGraduationCap></FaGraduationCap><br></br>
       <h5 className='web'>INFOSYS CAMPUS CONNECT 5.0-<span className='span2'> ACE COLLEGE</span></h5>
       <p className='description'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      </div>
      </Col>
    </div>
     

     </>
  )
}

export default About