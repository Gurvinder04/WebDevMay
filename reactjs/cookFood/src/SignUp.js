import React, { useEffect, useRef, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function SignUp() {
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
        console.log('hello')
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
            <div class="login-wrap">
                <div class="login-html">
                    <input id="tab-1" type="radio" name="tab" className="sign-in" checked/><label for="tab-1" class="tab">Sign In</label>
                        <input id="tab-2" type="radio" name="tab" className="sign-up"/><label for="tab-2" class="tab">Sign Up</label>
                            <div class="login-form">
                                <div class="sign-in-htm">
                                    <div class="group">
                                        <label className='label'>Email</label>
                                        <input type="email" className="input" name='email' value={user.email} onChange={LoginData}/>
                                    </div>
                                    <div class="group">
                                        <label for="pass" class="label">Password</label>
                                        <input id="pass" type="password" class="input" data-type="password" name='password' value={user.password} onChange={LoginData}/>
                                    </div>
                                    <div class="group">
                                        <input id="check" type="checkbox" class="check" checked/>
                                            <label for="check"><span class="icon"></span> Keep me Signed in</label>
                                    </div>
                                    <div class="group">
                                        <input type="submit" class="button" value="Sign In" onClick={LoginVerify}/>
                                    </div>
                                    <div class="hr"></div>
                                    <div class="foot-lnk">
                                        <a href="#forgot">Forgot Password?</a>
                                    </div>
                                </div>
                                <div class="sign-up-htm">
                                    <div class="group">
                                        <label for="user" class="label">Username</label>
                                        <input id="user" type="text" class="input" name='name' value={user.name} onChange={AddUser} />
                                    </div>
                                    <div class="group">
                                        <label for="pass" class="label">Email Address</label>
                                        <input id="pass" type="text" class="input" name='email' value={user.email} onChange={AddUser}/>
                                    </div>
                                    <div class="group">
                                        <label for="pass" class="label">Password</label>
                                        <input id="pass" type="password" class="input" data-type="password" name='password' value={user.password} onChange={AddUser}/>
                                    </div>
                                    {/* <div class="group">
                                        <label for="pass" class="label">Repeat Password</label>
                                        <input id="pass" type="password" class="input" data-type="password"/>
                                    </div> */}
                                   
                                    <div class="group">
                                        <input type="submit" class="button" value="Sign Up" onClick={PostData} />
                                    </div>
                                    <div class="hr"></div>
                                    <div class="foot-lnk">
                                        <label for="tab-1">Already Member?</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </>
            )
}

            export default SignUp