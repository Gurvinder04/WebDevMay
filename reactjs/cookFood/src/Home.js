import React from 'react'
import Carousel from './components/Homepage/Carousel'
import {Container, Row } from 'react-bootstrap'

function home() {
  return (
    <>
     <Container  fluid={true} className="p-0">
        <Carousel/>
        <h1>hey</h1>
    </Container>
    </>
   
  )
}

export default home