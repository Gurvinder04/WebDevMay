import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import CardLayout from './Components/CardLayout'
import { useAuthContext } from './Context/AuthContext'

function Category({Product}) {
  const {loggedin} = useAuthContext()
    const {cat} = useParams()
    const[CategoryProduct,setCategoryProduct] = useState([])
   
    const fetchCategory = async()=>{
        let response = await fetch(`http://localhost:4000/detail/${cat}`)
        let data = await response.json()
        console.log(data)
        setCategoryProduct(data)

    }
    
    useEffect(()=>{
        fetchCategory()
    })
  return (
    <>
     <Row className='m-5 text-center'>
      {
        CategoryProduct.length != 0 ?
        CategoryProduct.map((product, index) => (
          <CardLayout product={product} key={index} />
          ))
          :
          'uffff ik hor dikat'

      }
      </Row>
      {console.log('category vala user',loggedin)}
    {/* {console.log('category is',cat)}
    {console.log('category data',CategoryProduct)} */}
    </>
  )
}

export default Category