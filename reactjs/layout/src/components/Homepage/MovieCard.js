import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'

// https://image.tmdb.org/t/p/w500/8cXbitsS6dWQ5gfMTZdorpAAzEH.jpg

function MovieCard({movie}) {
  return (
    <ul className='movies mt-5'>
      <li  className='' data-toggle='modal' data-target='#moviedatail'>
    <Card style={{"width":"15rem"}}  className='movie rounded-0 border-0'>
    <Card.Img variant="top" className='movie__figure movie__poster' src="https://picsum.photos/id/237/200/300" style={{"height":"60vh"}}/> 
    <Card.Body>
       <span class="movie__vote">4.5</span>
      <Card.Title className='movie__title text-success'>{movie.title}</Card.Title>
    </Card.Body>
  </Card>
  </li>
  </ul>

/* <ul class="movies"> 
        <li key={index} id="movie1" data-toggle="modal" data-target="#moviedetail">
        <div class="movie">
          <figure class="movie__figure"><img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg" class="movie__poster"/>
            <figcaption><span class="movie__vote">4.5</span></figcaption>
            <h2 class="movie__title">{movie.title}</h2>
          </figure>
        </div>
      </li>
      </ul> */
  )
}

export default MovieCard