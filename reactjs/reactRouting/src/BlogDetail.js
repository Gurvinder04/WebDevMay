import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function BlogDetail() {
    const {pid} = useParams()
    const[detail,setDetail]=useState([])
    

    const fetchingData = async()=>{
        console.log('guru')
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${pid}`)
        let data = await response.json()
        setDetail(data)
    }
    useEffect(()=>{
         fetchingData()
    },[])
    
  return (
    <div>
        BlogDetail {pid}
            <h1>BODY:{detail.body}</h1>
            <h2>Title:{detail.title}</h2>
            <h3>User:{detail.userId}</h3>
            
    </div>
  )
}

export default BlogDetail