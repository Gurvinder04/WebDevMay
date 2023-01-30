import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import {FaArrowRight} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Home() {
  return (

   <Container fluid={true} className='bg-dark' style={{ "height": "800px" }}>
    <Row className='justify-content-between align-items-center partition'>
      <Col md={6} className=''>
        <div className='color-block d-none d-lg-block'></div>
      {/* <p className='text-light'>Hello world</p> */}
      {/* <img src='https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80' style={{"width":"550px" ,"height":"750px","borderRadius":"30px","marginLeft":"54px"}}/> */}
      <img src='https://img.freepik.com/free-psd/3d-female-character-working-laptop-while-sitting-chair_23-2148938889.jpg' className='profile-img' style={{"width":"550px" ,"height":"650px","borderRadius":"30px","marginLeft":"54px"}}/>
      </Col>
      <Col md={6} className="col1">
        <h1 className='name typing-demo '>- I'M GURVINDER KAUR.</h1>
        <h1 className='info' data-aos="fade-up"  data-aos-offset="50" data-aos-easing="ease-in-sine" >WEB DESIGNER</h1>
      <p className='text-light fs-5' data-aos="fade-up"  data-aos-offset="50" data-aos-easing="ease-in-sine" data-aos-duration="600">I'm a web designer & front‑end developer focuse on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
      <Button className='about' style={{marginTop:'93px'}}><Link to={'/about'}>MORE ABOUT ME</Link><FaArrowRight className='arrow'></FaArrowRight></Button>
      </Col>
     
    </Row>
    
    
   </Container>
  )
}

export default Home