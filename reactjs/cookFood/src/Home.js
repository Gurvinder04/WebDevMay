import React from 'react'
import {Col, Container, Row } from 'react-bootstrap'
import FoodCarousel from './components/Homepage/FoodCarousel'

function Home() {
  return (
    <>
     <Container fluid={true}  className="p-0" style={{"width":"93%"}}>
        <FoodCarousel/>
        <Row className='text-center justify-content-center align-items-center'>
          <Col md={6} className='text-center mt-2'>
            <h1 style={{"font-family": "'Lobster', cursive"}}>Today's Specials</h1>
          </Col>
          <Col md={6}>
            <img src='https://cdn.shopify.com/s/files/1/0551/7462/7487/products/Seafood-Lovers-Pizza-Kit-SeaBear-2-13179-2022-b_800x.jpg?v=1655228575' className='roundImg' />
          </Col>
        </Row>
    </Container>
    </>
    
   
  )
}

export default Home