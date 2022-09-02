import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ReceipeDetail() {
    const{idMeal} = useParams()
    useEffect(()=>{
        fetch(`www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    },[])
  return (
    <div>ReceipeDetail
     {
        console.log(idMeal)
    }

    </div>
   
  )
}

export default ReceipeDetail