import { useRef } from "react"
import { Button } from "react-bootstrap"

export default function Contact({MyFunction}){
    const inputRef = useRef()
    const printValue =(e)=>{
       console.log(inputRef.current.value)
    }
    return(
        <>
        <h1>contact</h1>
        <input type="text" ref={inputRef} onChange={printValue}/>
        <Button onClick={printValue}>Print Input</Button>
        {
            MyFunction()
        }
        </>
    )
}