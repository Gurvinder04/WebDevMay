import React from 'react'
import { Button } from 'react-bootstrap'
import { BsDash, BsFileMinus, BsPlus } from 'react-icons/bs'

function CardAmount({amount,setIncrease,setDecrease}) {
  return (
     
        <div className='amount-toggle'>
            <Button className='toggle-btn' onClick={()=>setDecrease()}><BsDash></BsDash></Button><p className='amount-style'>{amount}</p>
            <Button className='toggle-btn' onClick={()=>setIncrease()}><BsPlus ></BsPlus></Button>
           
            {/* {console.log(amount)} */}
    </div>
  )
}

export default CardAmount