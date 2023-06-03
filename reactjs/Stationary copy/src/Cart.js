import React,{ useEffect, useState } from 'react'
import { Button, Container} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import CartTable from './Components/CartTable'
import { useAuthContext } from './Context/AuthContext'
import { useCartContext } from './Context/CartContext.js'
import { BASE_URL } from './Helpers/Base-url'
import FormatPrice from './Helpers/FormatPrice'

function Cart() {
    const {cart,clearCart,total_price,shipping_fee} = useCartContext()
    const[newCart,setnewCart] = useState([])
    const {loggedCartItems} = useAuthContext()

    const fetchCart = async()=>{
      console.log('entered cartfun')
      let data = await fetch('/cartm')
      let res = await data.json()
      console.log(res)

     setnewCart(res)
      console.log('succeed',newCart)
    }
    // const showCart=()=>{
    //   console.log('showcart is',loggedCart)
    //       setnewCart(loggedCart)
    // }
  
   
      useEffect(()=>{
        fetchCart()
        
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
        newCart.map((items,index)=>{
          return  <CartTable key={index} cartItems ={items}/>

        })
    
}
</table>
<div className='d-flex'>
          <NavLink to ={'/allproduct'}>
          <Button className='bg-primary'>Continue Shopping</Button>
          </NavLink>
          
          <Button className='bg-danger' onClick={clearCart}>Clear Cart</Button>
        </div>

        <div className=''>
           <p>Subtotal:</p>
           <p>
            <FormatPrice price={total_price} />
           </p>
           <p>Shipping fee:</p>
           <p>
            <FormatPrice price={shipping_fee} />
           </p>
           <p>Total Price:</p>
           <p>
            <FormatPrice price={shipping_fee+total_price} />
           </p>
        </div>
{console.log('cart is ',loggedCartItems)}
</Container>
    
  )
}

export default Cart