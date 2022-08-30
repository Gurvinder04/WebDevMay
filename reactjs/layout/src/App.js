import React, { useState } from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Contact from './Contact'
import Home from './Home'
import MovieDetail from './MovieDetail'
import SearchResults from './SearchResults'


function App() {
  const [result,setResult] = useState([])
  const searchResult = ()=>{
      console.log('This is search handler')
      setResult([{
          id:1,
          name:'Batman & Joker'
      }])
  }
  return (
    <Layout >
    <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path='/search' element={<SearchResults result={result}/>}/>
        <Route path ='/:movie_id' element={<MovieDetail/>} />
        <Route path ='/contact' element={<Contact/>} />
    </Routes>
    </Layout>
    
  )
}

export default App