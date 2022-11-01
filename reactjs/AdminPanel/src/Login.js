import React, {useState} from 'react'
import {Form,Button,Navigate} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import {addproduct} from './AddProduct'

function Login() {
    const navigate = useNavigate();
    const[User,setUser] = useState({
        email:'',
        password:''
       })
       
    let name,value
    const LoginData = (e)=>{
        name=e.target.name
        value=e.target.value
       setUser({...User, [name]:value})
       console.log(User)
    }

    const SubmitData = ()=>{
     return navigate('/addproduct')
        
    }
  return (
    <>
    <Form action='POST' onSubmit={(e)=>{
      e.preventDefault()
      navigate('/addproduct')
    }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email'  value={User.email} onChange={LoginData} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password'  value={User.password} onChange={LoginData}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={SubmitData}>
        Submit
      </Button>
    </Form>
    
    
    </>
  )
}

export default Login