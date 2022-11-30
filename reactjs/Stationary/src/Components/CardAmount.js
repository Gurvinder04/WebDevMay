import React from 'react'
import { Button } from 'react-bootstrap'
import { BsDash, BsFileMinus, BsPlus } from 'react-icons/bs'

function CardAmount({amount,setIncrease,setDecrease}) {
  return (
    <div className='cart-button'>
        <div className='amount-toggle'>
            <Button  onClick={()=>setDecrease()}>
            <BsDash></BsDash>
            </Button>
            <div className='amount-style'>{amount}</div>
            <Button onClick={()=>setIncrease()}>
            <BsPlus ></BsPlus>
            </Button>
           
            {/* {console.log(amount)} */}

        </div>


    </div>
  )
}

export default CardAmount