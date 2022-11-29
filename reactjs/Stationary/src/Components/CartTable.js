import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsFillTrashFill } from 'react-icons/bs'

function CartTable() {
  return (
    <Container>
      <table className="table" style={{boxShadow:'0px 4px 0px 4px white',tableLayout: 'fixed'}}>
        <thead>
          <tr>
          <th>Image</th>
          <th>Product</th>
          <th>Quantity</th>
          <th>Amount</th>
          <th>Remove Item</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src='https://cdn.shopify.com/s/files/1/0642/6745/2656/collections/Week29_Notebooks_Collections_Agenzio.jpg?v=1663845494&width=1500' style={{width:'100px',height:'100px'}}></img></td>
            <td><h5>Hello World</h5></td>
            <td>2</td>
            <td>$50000</td>
            <td><BsFillTrashFill></BsFillTrashFill></td>

          </tr>
        </tbody>
      </table>
   
</Container>
    
)
}



export default CartTable