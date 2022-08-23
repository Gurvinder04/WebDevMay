import { Button } from 'react-bootstrap'
import React, { useEffect, useRef, useState } from 'react'

export default function Blog() {
    const[posts,setPosts] = useState([])
    const getAllPosts = async ()=>{
        let response = await fetch('https://jsonplaceholder.typicode.com/posts')
        let posts = await response.json()
        setPosts(posts)
    }
  
    const buttonRef = useRef()
    const inputRef = useRef()
    useEffect(()=>{
         getAllPosts()   //run code automatic
         console.log(buttonRef.current)
         console.log(inputRef.current.value)
    },[])
  return (
    <div>
        <Button onClick ={getAllPosts} ref={buttonRef}>Get and Print post</Button>
        <input type="text" ref={inputRef} defaultValue='Search u wanna search'/>
        {
            posts.map((post,index)=>(
                
                <a href={`/blog/${post.id}`} key={post.id} className='d-block'>{post.title}</a>
            ))
            
        }
    </div>
  )
}
