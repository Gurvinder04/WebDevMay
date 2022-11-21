import React, {useContext, useState} from 'react'
import {Form,Button,Navigate, Container} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import {addproduct} from './AddProduct'
import {home} from './Home'
// import {UserContext} from './App'


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
      if(User.email ==='admin@gmail.com' && User.password ==='admin'){
        
         navigate('/home')
      }
      else{
        console.log('wrong')
      }
    
        
    }
  return (
    <Container className='justify-content-center'>
    <Form action='POST' onSubmit={(e)=>{
      e.preventDefault()
      //navigate('/addproduct')
    }} className='loginForm'>
      <h2>ADMIN PANEL</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  name='email'  value={User.email} onChange={LoginData} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  name='password'  value={User.password} onChange={LoginData}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={SubmitData}>
        Submit
      </Button>
    </Form>

    
    
    </Container>
  )
}

export default Login