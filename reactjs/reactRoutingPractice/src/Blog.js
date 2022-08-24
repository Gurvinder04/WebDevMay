import React from 'react'
import { useParams } from 'react-router-dom'

export default function Blog() {
    const {pid} = useParams()
  return (
    <div>
   {pid == 1 &&<h1>Laugh</h1>}
   {pid == 2 &&<h1>Discrimination</h1>}
   {pid == 3 &&<h1>World</h1>}
    </div>
  )
}

