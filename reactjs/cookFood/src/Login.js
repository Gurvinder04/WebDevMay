import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Login() {
     const [user,setUser] = useState({
        email:"",password:""
     })
     let name, value;
    const LoginData =(e)=>{
            // console.log(e.target.name,e.target.value)
            name = e.target.name
            value = e.target.value
            setUser({ ...user, [name]: value})
            console.log(user)
        }

        const LoginVerify= async()=>{
            console.log('hello')
            const {email, password } = user
            if (email && password) {
                let data = await fetch('/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({email, password})
                })
                let res = await data.json()
                console.log(res)
            }
            else{
                console.log('invalid input')
            }
        }
  return (
    <Container className='justify-content-center'>
            <Form onSubmit={(e)=>{
                e.preventDefault()
            }}>
                <Form.Group className="mb-3">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" className='w-25' name='email' value={user.email} onChange={LoginData} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" className='w-25' name='password'  value={user.password} onChange={LoginData}  />
                </Form.Group>
                <Button variant="primary" type="button" onClick={LoginVerify} >
                    LOG IN
                </Button>
                <p>or</p>
                <Button variant="primary" type="button">
                <Link to={'/signup'} className="nav-link text-decoration-none">SIGN UP</Link>
                </Button>
            </Form>
        </Container>
  )
}

export default Login