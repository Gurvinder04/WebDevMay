import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext.js'
import CardAmount from './CardAmount.js'

function AddToCart({product,amount,cartUser}) {
    const {addToCart} = useCartContext()
    // const [amount,setamount] = useState(1)
    // const setIncrease=()=>{
    //   amount <product.quantity ? setamount(amount+1):setamount(product.quantity)
    //  }
 
    //  const setDecrease=()=>{
    //    amount > 1 ? setamount(amount-1):setamount(1)
    //  }
  return (
  <div>
       {/* <CardAmount amount={amount} setIncrease={setIncrease} setDecrease={setDecrease}/> */}
        <Link to={'/cart'} onClick={()=>addToCart(amount,product,cartUser)}>
        <Button>ADD TO CART</Button>
        </Link>
        {console.log('Addcart vala ',cartUser)}
   {/* {console.log('addcart data',product)} */}
  </div>
    
  )
}

export default AddToCart