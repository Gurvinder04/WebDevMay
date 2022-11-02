import React, { useState } from 'react'
import { Button, Form,Col,Row } from 'react-bootstrap'

function AddProduct() {
  const[Sample,setsample]=useState({
    productname:'',
    description:'',
    rate:''
  })
  let name,value;
  const Data=(e)=>{
    console.log('entered data')
    name=e.target.name
    value=e.target.value
    setsample({...Sample,[name]:value})
    console.log(Sample)
  }

  const SubmitData = async()=>{
    const{productname,description,rate} = Sample
    if(productname && description && rate){
      let data = await fetch('/product',{
          method:'POST',
          headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify({productname,description,rate})
      })
     
      let res = await data.json()
      console.log('hey',res) 
      if(res.status === 400 || res === null){
       window.alert("Invalid details")
      }
      else{
       //dispatch({type:"USER",payload:true})
       window.alert("successfully logged in")
      
      } 
  }
  
  else{
      console.log('INVALID INPUT')
  }

  }
  return (
    <>
     <Form action='POST' onSubmit={(e)=>{
      e.preventDefault()
      
    }}>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" name='productname' value={Sample.productname} onChange={Data} />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" name='description' value={Sample.description} onChange={Data} />
        </Form.Group>
      </Row>

      {/* <Form.Group as={Col}>
          <Form.Label>Category</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option></option>
            <option>Pens&Pencils</option>
            <option>Notebooks</option>
            <option>Office Stationary</option>
            <option>Covers</option>
            <option>Stuffs</option>
          </Form.Select>
        </Form.Group> */}

      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control type='number' name='rate' value={Sample.rate} onChange={Data}/>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={SubmitData}>
        Submit
      </Button>
    </Form>
    
    </>
  )
}

export default AddProduct