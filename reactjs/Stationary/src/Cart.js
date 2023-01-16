import React from 'react'
import { Container } from 'react-bootstrap'
import CartTable from './Components/CartTable'
import { useCartContext } from './Context/CartContext.js'

function Cart() {
    const {cart} = useCartContext()
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
{console.log('cart is ',cart)}
</Container>
    
  )
}

export default Cart