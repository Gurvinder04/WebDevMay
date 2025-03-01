import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { BsFillTrashFill } from 'react-icons/bs'
import { useAuthContext } from '../Context/AuthContext.js'
import { useCartContext } from '../Context/CartContext.js'


function CartTable({cartItems}) {
  const {loggedUser} =useAuthContext()
  //const{removeItem}=useCartContext()
  const removeItem= async (id)=>{
    //e.preventDefault();
      
      console.log('removing process start',id)
      let loggedId = loggedUser
      console.log('delete vala user',loggedId)
      let data = await fetch('/cart',{
          method:'DELETE',
          headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify({id,loggedId})
      })
     
      let res = await data.json()
      console.log('hey new usercart is',res) 
  }
 
  return (
    <>
        <tbody>
          <tr>
            <td><img src='https://cdn.shopify.com/s/files/1/0642/6745/2656/collections/Week29_Notebooks_Collections_Agenzio.jpg?v=1663845494&width=1500' style={{width:'100px',height:'100px'}}></img></td>
            <td><h5>{cartItems.price}</h5></td>
            <td>{cartItems.productname}</td>
            <td>{cartItems.quantity}</td>
            <td>{(cartItems.price)*(cartItems.quantity)}</td>
            <td><BsFillTrashFill onClick={()=>removeItem(cartItems._id)}></BsFillTrashFill></td>

          </tr>
        </tbody>
      {console.log('cartitems are',cartItems)}
   
</>
    
)
}



export default CartTable