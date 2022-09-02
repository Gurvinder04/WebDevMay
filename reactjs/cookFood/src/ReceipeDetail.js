import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ReceipeDetail() {
    const{mid} = useParams()
    const[receipe,setreceipe] = useState({})
    useEffect(()=>{
        fetch(`www.themealdb.com/api/json/v1/1/lookup.php?i=${mid}`)
        .then(response=>response.json())
        .then(data=>{
            setreceipe(data)
        })
    },[])
  return (
    <div>ReceipeDetail
     {
        console.log(receipe)
    }

    </div>
   
  )
}

export default ReceipeDetail