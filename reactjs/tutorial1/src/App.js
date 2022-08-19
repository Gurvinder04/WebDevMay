//rfced to create function template
import React, { useState } from 'react'
import {Container, Row,Col, Button,InputGroup,Form} from 'react-bootstrap'

function App() {
  const[count,setCount] = useState(0)
  const[username,setUsername]=useState('none')
  const[show,setShow]=useState(false)
  const IncreaseNumber =(e)=>{
    console.log('+')
    // setCount(5)  update state value heir,it will print 5 no matter how many times u clicked
    if(count <10){
    setCount(count+1)
    }
    else{
      alert('Your have reached the limit')
    }
  }
  const DecreaseNumber =(e)=>{
    console.log('-')
    if(count !=0){
    setCount(count-1)
    }
    else{
      alert('Not possible to decrease')
    }
  }


  const handleChange = (e)=>{
    console.log(e.target.value)
    setUsername(e.target.value)
  
  }
  return (
    <Container fluid={false}>
      <Row className="justify-content-center bg-success text-center align-items-center">
        <Col md={6} className="p-5 bg-warning">
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          onChange={handleChange}
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
        <Button size='lg' onClick={()=>setShow(!show)} className="m-2">Display Username</Button>
        <Button size='lg' onClick={IncreaseNumber} variant='light'>INCREASE NUMBER+</Button>
        </Col>
        <Col md={6}>
        <Button size='lg' onClick={DecreaseNumber} variant='light'>DECREASE NUMBER-</Button>
        </Col>
      </Row>
      <Row className='justify-content-center text-center'>
        <Col md={10} className="p-5 bg-primary ">
           <h1>{count}</h1>
           <h1>{show?username:''}</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default App