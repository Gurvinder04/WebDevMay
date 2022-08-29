import React from 'react'
import { Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

// https://image.tmdb.org/t/p/w500/8cXbitsS6dWQ5gfMTZdorpAAzEH.jpg

function MovieCard({movie}) {
  return (
  //   <ul className='movies p-4'>
  //     <li  className='' data-toggle='modal' data-target='#moviedatail'>
  //   <Card  className='movie rounded-0 border-0'>
  //   <Card.Img variant="top" className='movie__figure movie__poster' src="https://www.teahub.io/photos/full/367-3671559_qismat-punjabi-movie-poster.jpg"/> 
  //   <Card.Body>
  //      <span class="movie__vote">4.5</span>
  //     <Card.Title className='movie__title text-warning'>{movie.title}</Card.Title>
  //   </Card.Body>
  // </Card>
  // </ul>
  // </li>
  
  


  <li key={movie.id} id="movie1" data-toggle="modal" data-target="#moviedetail">
  <div className="movie">
    <figure className="movie__figure">
    <Link to={`/${movie.id}`}><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="movie__poster"/></Link>
      <figcaption><span className="movie__vote">{movie.vote_average}</span></figcaption>
      <h2 className="movie__title">{movie.original_title}</h2>
    </figure>
  </div>
</li>
  )
}

export default MovieCard