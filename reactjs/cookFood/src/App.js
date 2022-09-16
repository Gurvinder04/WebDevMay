import React, { useEffect, useState } from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Category from './Category'
import Layout from './components/Layout/Layout'
import Home from './Home'
import ReceipeDetail from './ReceipeDetail'



function App() {
  const [result, setResult] = useState([])
  const [searchItem, setsearchItem] = useState('')

  const searchInput = (e)=>{
    if(searchItem == ''){
      setsearchItem(e.target.value)
    }
    else{
      setsearchItem('b')
    }
    console.log(searchItem)
  
  // let search = e.target.value
  //  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
  //   .then(res=>res.json())
  //   .then(data=>{
  //     setResult(data.meals)
  //     console.log(result)
  //   })
  }
  return (
   <Layout>
   <Routes>
    <Route path='/' element={<Home search={searchItem}/>} />
    <Route path='/:mid' element ={<ReceipeDetail/>} />
    <Route path='category/:cat' element ={<Category/>} />
    
   </Routes>
   </Layout>
  )
}

export default App