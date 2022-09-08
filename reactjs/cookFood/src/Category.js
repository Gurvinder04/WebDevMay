import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FoodCard from './components/Homepage/FoodCard'

function Category() {
    const {cat} = useParams()
    const[category,setCategory] = useState([])
    const fetchCategory = async()=>{
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
        let data = await response.json()
        console.log(data.meals)
        // setCategory(data.meals)
    }
   
    useEffect(()=>{
       fetchCategory()
       
    },[category])
  return (
    <div>
        <h2>Category</h2>
       {console.log(cat)}
    </div>
   
  )
}

export default Category