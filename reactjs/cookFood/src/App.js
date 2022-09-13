import React, { useEffect, useState } from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Category from './Category'
import Layout from './components/Layout/Layout'
import Home from './Home'
import ReceipeDetail from './ReceipeDetail'



function App() {
  const [foodItems, setfoodItems] = useState([])
  const [searchItem, setsearchItem] = useState()

  const fetchData = async()=> {
    let response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
    let data = await response.json()
    setfoodItems(data.meals)
  }
  const searchInput = (e)=>{
    if(searchInput !== ''){
      setsearchItem(e.target.value)
    }
    else{
      fetchData()
    }
  }
  return (
   <Layout>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/:mid' element ={<ReceipeDetail/>} />
    <Route path='category/:cat' element ={<Category result={foodItems}/>} />
    
   </Routes>
   </Layout>
  )
}

export default App