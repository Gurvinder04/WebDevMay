import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsFillTrashFill } from 'react-icons/bs'
import { useCartContext } from '../Context/CartContext.js'


function CartTable({cartItems}) {
  const{removeItem}=useCartContext()
  return (
    <>
        <tbody>
          <tr>
            <td><img src='https://cdn.shopify.com/s/files/1/0642/6745/2656/collections/Week29_Notebooks_Collections_Agenzio.jpg?v=1663845494&width=1500' style={{width:'100px',height:'100px'}}></img></td>
            <td><h5>{cartItems.price}</h5></td>
            <td>{cartItems.name}</td>
            <td>2</td>
            <td>{cartItems.price*2}</td>
            <td><BsFillTrashFill onClick={()=>removeItem(cartItems.id)}></BsFillTrashFill></td>

          </tr>
        </tbody>
        <div>
          <p>Total Bill:</p>
        </div>
      {console.log(cartItems)}
   
</>
    
)
}



export default CartTable