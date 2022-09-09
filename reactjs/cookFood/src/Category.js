import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FoodCard from './components/Homepage/FoodCard'

function Category ({items}){
    const {cat} = useParams()
    const[category,setCategory] = useState([])
    const[finalfood,setFinalFood] = useState([])
    const fetchCategory = async()=>{
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
        let data = await response.json()
        // console.log(data.meals)
        setCategory(data.meals)

    }
   
    useEffect(()=>{
       fetchCategory()
       
    },[category])
  return (
    <div>
        <h2>Category</h2>
        <div className='shell'>
          <div className ='container'>
          <h2 class="underline">Our Receipes</h2>
          <div className ='row'>
         {
          category != undefined ?
          category.map((food, index) => (
            <FoodCard food={food} key={index} test={cat} />
          ))
          :
          ''
         }
          </div>
          </div>
          
          </div>
       {console.log(cat)}
       {console.log(category)}
    </div>
   
  )
}

export default Category