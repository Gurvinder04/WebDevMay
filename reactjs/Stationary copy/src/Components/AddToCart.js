import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext.js'
import CardAmount from './CardAmount.js'

function AddToCart({product,amount}) {
    const {addToCart} = useCartContext()
  return (
  <div>
        <Link to={'/cart'} onClick={()=>addToCart(amount,product)}>
        <Button>ADD TO CART</Button>
        </Link>
   {/* {console.log('addcart data',product)} */}
  </div>
    
  )
}

export default AddToCart