import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { BsDash, BsFileMinus, BsPlus } from 'react-icons/bs'
import AddToCart from './AddToCart'

function CardAmount({product}) {
  const [amount,setamount] = useState(1)
    const setIncrease=()=>{
      amount <product.quantity ? setamount(amount+1):setamount(product.quantity)
     }
 
     const setDecrease=()=>{
       amount > 1 ? setamount(amount-1):setamount(1)
     }
  return (
     
        <div className='amount-toggle'>
            <Button className='toggle-btn' onClick={()=>setDecrease()}><BsDash></BsDash></Button><p className='amount-style'>{amount}</p>
            <Button className='toggle-btn' onClick={()=>setIncrease()}><BsPlus ></BsPlus></Button>
            <AddToCart  product ={product} amount={amount}/>
            {/* {console.log(amount)} */}
    </div>
   
  )
}

export default CardAmount