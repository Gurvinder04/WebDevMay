import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Dummy({product}) {
    useEffect(()=>{

    },[product])
  return (
    <div className="product-card">
    <div className="product-img img-one"></div>
    <div className="product-text">
      <h3 className='product-text-duplicate'>{product.productname}</h3>
      <p>{product.price}</p>
    </div>
    <div className="product-cart">
      <button type="submit" className='btnclr'>Add to cart</button>
    </div>
  </div>
  )
}

export default Dummy