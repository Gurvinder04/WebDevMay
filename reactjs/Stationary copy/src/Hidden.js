import React, { useEffect } from 'react'

function Hidden() {
 const fetchHidden =async()=>{
    let data = await fetch('/hidden')
    let res = await data.json()
    if(res !== undefined){
        console.log('Hurrryyyyy')
    }
    }


    useEffect(()=>{
        //fetchHidden()
    },[])
  return (
    <div>Hidden</div>
  )
}

export default Hidden