import React, { useEffect, useRef, useState } from 'react'
import { Button, ButtonGroup, CardGroup, Container, Form, InputGroup, Row } from 'react-bootstrap'
import CarouselComponents from './components/Homepage/CarouselComponents'
import MovieCard from './components/Homepage/MovieCard'

//https://api.themoviedb.org/3/movie/popular?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US&page=1
//https://api.themoviedb.org/3/movie/616037?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US
function Home() {
  const[movies,setMovies] = useState([])
  const[page,setPage]     = useState(1)
  const[searchResults ,setSearchResults] = useState([])
 // const inputRef = useRef(null)
  const nextPage =()=>setPage(page+1)
  const prevPage =()=>{
    if(page <=1){
      return
    }
    else{
      setPage(page-1)
    }
  }

  const findMovie = (param)=>{
  
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US&query=${param !==''? param : 'a'}&page=${page}&include_adult=false`)
      .then(res=>res.json())
      .then(data=>{
        setSearchResults(data.results)
      })
 
      console.log(param)
  }
  const fetchMovies = async()=>{
       let response  = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US&page=${page}`)
      let data = await response.json()
      setMovies(data.results)
      }
    useEffect(()=>{
         fetchMovies()
    },[page,movies])
  return (
    <>
    <Container fluid={true} className="p-0">
        <CarouselComponents/>
        {/* {
          console.log(page,"page number")
        } */}
        
         </Container>
         <Row className='justify-content-center p-5 bg-dark'>
         <InputGroup className="mb-3 w-25">
        <Form.Control onChange={(e)=>findMovie(e.target.value)}
          placeholder="search movie"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="success" id="button-addon2">Search</Button>
       
      </InputGroup>
         </Row>
         <ul className="movies p-4  bg-dark">
        {

          searchResults.length ==0?
          (
            movies !=undefined?
          movies.map((movie,index)=>(
            <MovieCard movie={movie} key={index} test={movies}/>
          ))
          :
          'kidaa'
          )
          :
          searchResults !=undefined?
          searchResults.map((movie,index)=>(
            <MovieCard movie={movie} key={index} test={movies}/>
          ))
          :
          'vdiya'
         }
      </ul>

        {/* <ul className="movies p-4  bg-dark">
        {
           searchResults!=='' && result !==undefined?
           searchResults.map((movie, index) => (
            <MovieCard movie={movie} key={index} test={'this is a test props data'} />
          ))
          :
          (
            movies !=undefined?
          movies.map((movie,index)=>(
            <MovieCard movie={movie} key={index} test={movies}/>
          ))
          :
          'kidaa'
          )
         }
      </ul> */}
      
      <div className='pagination bg-dark justify-content-center d-flex pb-2'>
      <ButtonGroup aria-label="Basic example">
      <Button variant="primary"  onClick={()=>{
        prevPage()
        findMovie()
      }} className='rounded-0'>Previous</Button>
      <Button variant="primary"  onClick={()=>{
        nextPage()
        findMovie()
      }} className='rounded-0'>Next</Button>
    </ButtonGroup>
      </div>
        </>
  )
}

export default Home