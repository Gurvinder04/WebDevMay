import React ,{useContext}from 'react'
import { Button } from 'react-bootstrap'
import Database from './context/index'

function GrandChild() {
    // const[myStr,Numbers,myObj,isUserLoggedIn,EventHandler,users,setCount,count]= useContext(Database)
    const MyContext = useContext(Database)
    return (
    <div>
        <h3>GrandChild</h3>
    {
        // console.log(myStr,Numbers,myObj,isUserLoggedIn,EventHandler(),users)
        console.log(MyContext.mystr)
    }
      <h1>{MyContext.count}</h1>
    <Button onClick={()=>MyContext.setCount(MyContext.count+1)}>Increase</Button>
    <Button onClick={()=>MyContext.setCount(MyContext.count-1)}>Decrease</Button>
    </div>
  )
}

export default GrandChild