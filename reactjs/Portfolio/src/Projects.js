import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <Container fluid={true} className='bg-dark'>
    <h1 className='text-light text-center about-heading'>MY<span className='span1'> PROJECTS</span></h1>
      
      <div className='d-flex m-5 justify-content-center'>
     <div className="cardp m-5">
        <div className="contentp" >
        <a href='https://dishroom.netlify.app/'>
              <h2>DISHROOM</h2>
              <h3>READY TO COOK</h3>  
        </a>  
        </div>
    </div>

    <div className="cardp1 m-5">
        <div className="contentp" >
        <a href='https://cinopa.netlify.app/'>
              <h2>CINOPA</h2>
              <h3>READY TO WATCH</h3>  
        </a>
        </div>
    </div>


    </div>

  </Container>
  )
}

export default Projects