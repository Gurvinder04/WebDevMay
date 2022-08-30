import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

function App() {
    const[search,setSearch] = useState([])
    const[enteredData1,setEnteredData1] = useState('')
    const[enteredData2,setEnteredData2] = useState('')
    const[result,setResult] = useState([])
    const fetchData =async()=>{
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await response.json()
         setSearch(data)
    }
    useEffect(()=>{
        fetchData()
       
    },[])

    const Result = ()=>{
       if(enteredData1 > enteredData2){
         setResult([1])
       }
       else{
        if(enteredData1 < enteredData2){
            setResult([1])
        }
        else{
            setResult([])
        }
       }
    }
  return (
    <div className='p-5'>
    <input type="text" placeholder="enter alice marks" onChange={(e)=>setEnteredData1(e.target.value)}/>
    <input type="text" placeholder="search bob marks" onChange={(e)=>setEnteredData2(e.target.value)}/>
    <Button onClick={Result}>Result</Button>
    {/* {
    search.filter(val=>{
     if(val.name.toLowerCase().includes(enteredData.toLowerCase())){
        return val
     }
     else{
        if(enteredData == ""){
            return val
        }
        }
    }).map((val,key)=>(
        <li>{val.name}</li>
        
    ))
    } */}

  {
    console.log(result)
  }
    
    </div>  

  )
}

export default App