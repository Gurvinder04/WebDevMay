import React from 'react'
import { Button, Container} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import CartTable from './Components/CartTable'
import { useCartContext } from './Context/CartContext.js'
import FormatPrice from './Helpers/FormatPrice'

function Cart() {
    const {cart,clearCart,total_price,shipping_fee} = useCartContext()
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
{console.log('cart is ',cart)}
</Container>
    
  )
}

export default Cart