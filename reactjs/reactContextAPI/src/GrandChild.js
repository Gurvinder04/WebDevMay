import React ,{useContext}from 'react'
import { Button } from 'react-bootstrap'
import {Database} from './context/index'

function GrandChild() {
    const[myStr,Numbers,myObj,isUserLoggedIn,EventHandler,users,setCount,count]= useContext(Database)
  return (
    <div>
        <h3>GrandChild</h3>
    {
        console.log(myStr,Numbers,myObj,isUserLoggedIn,EventHandler(),users)
    }
    <h1>{count}</h1>
    <Button onClick={()=>setCount(count+1)}>Increase</Button>
    <Button onClick={()=>setCount(count-1)}>Decrease</Button>
    </div>
  )
}

export default GrandChild