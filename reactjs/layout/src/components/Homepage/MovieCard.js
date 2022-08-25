import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

function MovieCard({movie}) {
  return (
    
    <Col md ={3} className={"p-2"}>
    <Card style={{"width":"20rem"}} className={'main main-hover '}>
    <Card.Img variant="top" src="https://image.tmdb.org/t/p/w500/8cXbitsS6dWQ5gfMTZdorpAAzEH.jpg" style={{"height":"30vh"}}/>
    <Card.Body>
      <Card.Title className='title'>{movie.title}</Card.Title>
      <Card.Text className='overview'>
        {movie.overview}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
        Popularity:{movie.popularity}
      </small>
    </Card.Footer>
  </Card>
  </Col>
  )
}

export default MovieCard