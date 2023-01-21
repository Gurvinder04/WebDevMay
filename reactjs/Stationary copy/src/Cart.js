import React, { useEffect, useState } from 'react'
import { Button, Container} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import CartTable from './Components/CartTable'
import { useCartContext } from './Context/CartContext.js'
import FormatPrice from './Helpers/FormatPrice'

function Cart() {
    const {cart,clearCart,total_price,shipping_fee} = useCartContext()
    const {cartUser,setcartUser} = useState({})
    const fetchHidden =async()=>{
      let data = await fetch('/hidden')    
      let res = await data.json()
      if(res !== null){
          console.log('Hurrryyyyy',res)
          //setcartUser(res)
      }
      //console.log('achieved user is',cartUser)
      }
  
  
      useEffect(()=>{
        fetchHidden()
      },[])
  return (
    <Container>
      <table className="table" style={{boxShadow:'0px 4px 0px 4px white',tableLayout: 'fixed'}}>
        <thead>
          <tr>
          <th>Image</th>
          <th>Amount</th>
          <th>Product</th>
          <th>Quantity</th>
          <th>Total Amount</th>
          <th>Remove Item</th>
          </tr>
        </thead>
    {
        cart.map((items,index)=>{
          return  <CartTable key={index} cartItems ={items}/>

        })
    
}
</table>
<hr className='cartHR'></hr>
<div className='d-flex shop'>
          <NavLink to ={'/allproduct'}>
          <Button className='bg-primary'>Continue Shopping</Button>
          </NavLink>
          
          <Button className='bg-danger' onClick={clearCart}>Clear Cart</Button>
        </div>

        <div className='pricingBox'>
          <div className='p-3 fst-italic text-uppercase'>
            <h5>Subtotal:</h5> 
            <p>
            <FormatPrice price={total_price} />
           </p>
           <h5>Shipping fee:</h5>
           <p>
            <FormatPrice price={shipping_fee} />
           </p>
           <hr></hr>
           <h5>Total Price:</h5>
           <p>
            <FormatPrice price={shipping_fee+total_price} />
           </p>
           </div>
           <Button className='bg-primary m-2 w-50 fs-5'>PAYMENT</Button>
        </div>
{console.log('cart is ',cart)}
</Container>
    
  )
}

export default Cart