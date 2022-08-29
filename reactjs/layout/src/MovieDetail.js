import React, { useEffect, useState } from 'react'
import { Badge, Col, Container, ListGroup, Row } from 'react-bootstrap'
import {useParams} from 'react-router-dom'


function MovieDetail () {
    const {movie_id} = useParams()
    const[moviedetail ,setMovieDetail] = useState([])
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US`)
        .then(response=>response.json())
        .then(data=>{
           
            setMovieDetail(data)
        })
    },[movie_id])
  return (
    <Container className="bg-dark p-0" fluid={true}>
        {/* <div className="p-5 bg-primary text-white rounded-0 movie-img" style={{'background':`url(https://image.tmdb.org/t/p/w500${moviedetail.poster_path})`}}>
         <h1 className='text-center movie-title'>{moviedetail.original_title}</h1>
         
        </div>
      <Row className='p-0 m-0'>
        <Col md={3} className=' p-3'>
         <ListGroup >
          <ListGroup.Item className='bg-none text-light border-0  py-1'><Badge bg="warning" text="dark" className="w-100 rounded-0 text-start">ImDB Score:<p className='bg-white rounded d-inline px-2 py-0'>{Math.floor(moviedetail.vote_average)}</p></Badge></ListGroup.Item>
          <ListGroup.Item className='bg-none text-light border-0 py-1'>
            <Badge bg="warning" className="w-100 rounded-0 text-start" text="dark" >Movie Language:<p className='bg-white rounded d-inline px-2 py-0'>
                {
                     moviedetail.original_language !== undefined ?
                moviedetail.original_language.toUpperCase()
                :
                ''
                } 
                </p></Badge>
                </ListGroup.Item>
          <ListGroup.Item className='bg-none text-light border-0 py-1'>
         <Badge bg="warning" text="dark" className='w-100 rounded-0 text-start'>Category:</Badge>
             <ListGroup>
                {
                 moviedetail.genres !== undefined ?
                 moviedetail.genres.map((cat, index) => (
                 <ListGroup.Item className="rounded-0 py-0" key={cat.id}>{cat.name}</ListGroup.Item>
                )) :
                ''
                }
            </ListGroup>
            </ListGroup.Item>
          <ListGroup.Item className='bg-none text-light border-0 px-2 py-1'><Badge bg="warning" text="dark">Release Date:<p className='bg-white rounded d-inline'>{moviedetail.release_date}</p></Badge></ListGroup.Item>

         </ListGroup>
        </Col>
        <Col md={8} className=''>

        </Col>
      </Row> */}


<section id="banner" class="clearfix"  style={{'background':`url(https://image.tmdb.org/t/p/w500${moviedetail.poster_path})`}}>
		<div id="banner_content_wrapper">
			<div id="poster">
            <img src={`https://image.tmdb.org/t/p/w500${moviedetail.poster_path}`} alt="Deadpool Movie Poster" class="featured_image" />
				<img src={`https://image.tmdb.org/t/p/w500${moviedetail.poster_path}`} alt="Play Trailer" class="play_button" />
			</div>

        <div id="content">
				<h2 class="title">Deadpool</h2>
				<div class="ratings">
                {/* <FontAwesomeIcon icon="fa-solid fa-coffee" size="lg" />
                <FontAwesomeIcon icon="fa-solid fa-coffee" size="lg" />
                <FontAwesomeIcon icon="fa-solid fa-coffee" size="lg" />
                <FontAwesomeIcon icon="fa-solid fa-coffee" size="lg" />
                <FontAwesomeIcon icon="fa-solid fa-coffee" size="lg" /> */}
				</div>

				<p class="description">{moviedetail.overview}</p>

				<p class="info">{moviedetail.popularity}<span>|</span>{moviedetail.runtime}min <span>|</span> Action, Adventure, Comedy <span>|</span>{moviedetail.release_date} </p>
			</div>
            </div>
        </section>
    </Container>
  )
}

export default MovieDetail 