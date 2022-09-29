import React, { useEffect, useState } from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Category from './Category'
import Layout from './components/Layout/Layout'
import Home from './Home'
import ReceipeDetail from './ReceipeDetail'



function App() {
  const [result, setResult] = useState([])
  const [searchItem, setsearchItem] = useState('')

  const Input = (e)=>{
      console.log(e.target.value)

  // let search = e.target.value
  //  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchItem}`)
  //   .then(res=>res.json())
  //   .then(data=>{
  //     setResult(data.meals)
  //     console.log(result)
  //   })
}
  return (
   <Layout>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/:mid' element ={<ReceipeDetail/>} />
    <Route path='category/:cat' element ={<Category/>} />
    
   </Routes>
   </Layout>
  )
}

export default App