import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import ChildComponent from './ChildComponent'
import {Database} from './context/index'
function App() {
    const[count,setCount] = useState(0)
  const myStr = "Hello World"
  const Numbers = [1, 2, 3, 4, 5]
  const myObj = {
    name: "John Doe",
  }
  const isUserLoggedIn = true
  const EventHandler =()=>{
    console.log('button clicked')
  }
  const users = [
    {
      id:1,
      name:"John Doe",
    },
    {
      id:2,
      name:"Jane Doe",
    }
  ]
  useEffect(() => {
    
  }, [])
  return (
    <Database.Provider value={[myStr,Numbers,myObj,isUserLoggedIn,EventHandler,users,setCount,count]}>
      <div className="container-fluid bg-dark text-light p-4">
      <h1>App.js</h1>
      <ChildComponent/>
      </div>
    </Database.Provider>
  )
}
export default App