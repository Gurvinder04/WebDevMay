import React, { useEffect, useRef, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function SignUp() {
    const [show, setShow] = useState(true)
    const inputRef = useRef()
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    // useEffect(()=>{
    //     fetch('/register', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({name:"gurvinder",email:"gurvinder@microsoft.com",password:"gurvinder123"})
    //     })
    //     .then(res=>{
    //         console.log("rgistered")
    //     })
    // },[])

    let name, value;
    const AddUser = (e) => {
        // console.log(e.target.name,e.target.value)
        name = e.target.name
        value = e.target.value
        setUser({ ...user, [name]: value })
        console.log(user)
    }
    const PostData = async () => {
        console.log('hello......')
        const { name, email, password } = user
        if (name && email && password) {
            let data = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            })
            let res = await data.json()
            console.log(res)
        }
        else {
            console.log('invalid input')
        }
       
   
    }
    const LoginData = (e) => {
        // console.log(e.target.name,e.target.value)
        name = e.target.name
        value = e.target.value
        setUser({ ...user, [name]: value })
        console.log(user)
    }

    const LoginVerify = async () => {
        console.log('hello')
        const { email, password } = user
        if (email && password) {
            let data = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
            let res = await data.json()
            console.log(res)
        }
        else {
            console.log('invalid input')
        }
    }
    const toggleForm = () => {
        setShow(!show)
       
    }
    return (
        // <Container className='justify-content-center'>
        //     <Form onSubmit={(e)=>{
        //         e.preventDefault()
        //     }}>
        //         <Form.Group className="mb-3">
        //             <Form.Label>Name</Form.Label>
        //             <Form.Control type="text" className='w-25' name='name' value={user.name} onChange={AddUser} />
        //             <Form.Label>E-mail</Form.Label>
        //             <Form.Control type="email" className='w-25' name='email' value={user.email} onChange={AddUser} />
        //         </Form.Group>

        //         <Form.Group className="mb-3">
        //             <Form.Label>Password</Form.Label>
        //             <Form.Control type="password" className='w-25' name='password' value={user.password} onChange={AddUser} />
        //         </Form.Group>
        //         <Form.Group className="mb-3">
        //             <Form.Check type="checkbox" label="I agree to all terms and conditions" />
        //         </Form.Group>
        //         <Button variant="primary" type="button" onClick={PostData}>
        //             Sign Up
        //         </Button>
        //         <p>or</p>
        //         <Button variant="primary" type="button" onClick={PostData}>
        //         <Link to={'/login'} className="nav-link text-decoration-none">LOGIN</Link>
        //         </Button>
        //     </Form>
        // </Container>
        <>
            <section>
                <div className={`container  ${show ? "active" : " "} `}>
                    <div className='user signinBx'>
                        <div className="imgBx"><img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg" alt="" /></div>
                        <div className="formBx">
                            <form action="POST" onSubmit={(e) => {
                                e.preventDefault()
                               
                            }}>
                                <h2>Sign In</h2>
                                <input type="email" name='email' value={user.email} onChange={LoginData} placeholder="Email" />
                                <input type="password" name='password' value={user.password} onChange={LoginData} placeholder="Password" />
                                <input type="submit" onClick={LoginVerify} value="Login" />
                                <p className="signup">
                                    Don't have an account ?
                                    <a href="#" onClick={toggleForm}>Sign Up.</a>
                                </p>
                            </form>
                        </div>
                    </div>
                    <div className="user signupBx">
                        <div className="formBx">
                            <form onSubmit={(e) => {
                                e.preventDefault()
                            }}>
                                <h2>Create an account</h2>
                                <input type="text" name='name' value={user.name} onChange={AddUser} placeholder="Username" />
                                <input type="email" name='email' value={user.email} onChange={AddUser} placeholder="Email Address" />
                                <input type="password" name='password' value={user.password} onChange={AddUser} placeholder="Create Password" />

                                <input type="submit" name="" value="Sign Up" onClick={PostData} />
                                <p className="signup">
                                    Already have an account ?
                                    <a href="#" onClick={toggleForm} >Sign in.</a>
                                </p>
                            </form>
                        </div>
                        <div className="imgBx"><img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img2.jpg" alt="" /></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp