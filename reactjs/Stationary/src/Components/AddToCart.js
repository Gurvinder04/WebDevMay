import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'

function AddToCart({product}) {
    const {AddCart} = useCartContext()
  return (
    <div>
        <Link to={'/cart'} onClick={()=>AddCart(product)}>
        <Button>ADD TO CART</Button>
        </Link>
   {/* {console.log('addcart data',product)} */}
    </div>

    
  )
}

export default AddToCart