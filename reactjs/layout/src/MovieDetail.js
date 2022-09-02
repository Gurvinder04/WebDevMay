import React, { useEffect, useState } from 'react'
import { Badge, Button, ButtonGroup, Col, Container, Form, InputGroup, ListGroup, Modal, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import MovieCard from './components/Homepage/MovieCard'


//https://api.themoviedb.org/3/movie/616037?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US
//https://api.themoviedb.org/3/movie/616037/videos?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US
function MovieDetail() {
  const { movie_id } = useParams()
  const [moviedetail, setMovieDetail] = useState([])
  const [movietrailer, setMovieTrailer] = useState('')
  const [show, setShow] = useState(false);
  const History = useNavigate()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US`)
      .then(response => response.json())
      .then(data => {
        setMovieDetail(data)
      })

    fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US`)
      .then(response => response.json())
      .then(data => {
        setMovieTrailer(data.results[0].key)
      })

  }, [movie_id])
  return (
    <Container className="bg-dark p-0 m-0" fluid={true}>
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


      <section id="banner" className="clearfix" style={{ 'background': `url(https://image.tmdb.org/t/p/w500${moviedetail.poster_path})` }}>
        <div id="banner_content_wrapper">
          <div id="poster">
            <img src={`https://image.tmdb.org/t/p/w500${moviedetail.poster_path}`} alt="Deadpool Movie Poster" className="featured_image" />
            <img src="https://res.cloudinary.com/dw369yzsh/image/upload/v1470916845/play_button_ngnw1z.png" alt="Play Trailer" onClick={handleShow} className="play_button" />
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Watch Trailer</Modal.Title>
              </Modal.Header>
              <Modal.Body><iframe width={560} height={315} src={`https://www.youtube.com/embed/${movietrailer}`} style={{ "width": "29rem" }} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></Modal.Body>
            </Modal>
          </div>

          <div id="content">
            <h2 className="title">Deadpool</h2>
            <div className="ratings">
              {/* <FontAwesomeIcon icon="fa-solid fa-coffee" size="lg" />
                <FontAwesomeIcon icon="fa-solid fa-coffee" size="lg" />
                <FontAwesomeIcon icon="fa-solid fa-coffee" size="lg" />
                <FontAwesomeIcon icon="fa-solid fa-coffee" size="lg" />
                <FontAwesomeIcon icon="fa-solid fa-coffee" size="lg" /> */}
            </div>

            <p className="description">{moviedetail.overview}</p>

            <p className="info">{moviedetail.popularity}<span>|</span>{moviedetail.runtime}min <span>|</span>
              {
                moviedetail.genres !== undefined ?
                  moviedetail.genres.map((cat, index) => (
                    <li className='d-inline' key={cat.id}>{cat.name},</li>
                  )) :
                  ''
              }
              <span>|</span>{moviedetail.release_date} </p>
          </div>
        </div>
      </section>
      <Row>
        <h1 className='text-light text-center p-5'><em>You May Also Like</em></h1>
        <Row className='justify-content-center p-5 bg-dark'>
          <InputGroup className="mb-3 w-25">
            <Form.Control
              placeholder="search movie"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="success" onClick={()=>History('/')}  id="button-addon2">Search</Button>

          </InputGroup>
        </Row>


      </Row>
      {/* <iframe width={560} height={315} src={`https://www.youtube.com/embed/${movietrailer}`} style={{"width":"29rem"}} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}

    </Container>
  )
}

export default MovieDetail 