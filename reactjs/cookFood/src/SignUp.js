import React, { useRef, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';


function SignUp() {
    const inputRef = useRef()
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })
    const AddUser = (e) => {
        // console.log(e.target.name,e.target.value)
        const {name,value}=e.target
            setUser({
               ...user,
               [name]:value
            })
            console.log(user)
        
        
    }
    return (
        <Container className='justify-content-center'>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" className='w-25' name='name'  onChange={AddUser} />
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" className='w-25' name='email'  onChange={AddUser} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" className='w-25' name='password'  onChange={AddUser} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check type="checkbox" label="I agree to all terms and conditions" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
        </Container>
    )
}

export default SignUp