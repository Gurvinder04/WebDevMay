import React, { useContext, useEffect, useReducer, useState } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from './App.js'
import { useAuthContext } from './Context/AuthContext.js'
import { BASE_URL } from './Helpers/Base-url.js'
import { home } from './Home'
import { reducer } from './reducer/UseReducer.js'
import { useCookies } from 'react-cookie'
import { ToastContainer, toast } from 'react-toastify';

function Sign() {
  const { authUser, validateCheck } = useAuthContext()
  const [cookies, setCookie] = useCookies(['access_token'])
  const [found, setfound] = useState(false)
  const navigate = useNavigate();
  const [show, setShow] = useState(false)
  const notify = () => toast.success('🦄 Wow so easy!', {
    position: "top-center",
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

  //const{state,dispatch} = useContext(UserContext)
  const [User, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  })
  const [LoginUser, setLoginUser] = useState({
    email: '',
    password: ''
  })
  let name, value
  const getData = (e) => {
    name = e.target.name
    value = e.target.value
    setUser({ ...User, [name]: value })
    console.log(User)

  }
  const DBData = async () => {
    console.log('helooooooo')
    const { firstname, lastname, email, password } = User
    if (firstname && lastname && email && password) {
      let data = await fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstname, lastname, email, password })
      })

      let res = await data.json()
      console.log(res)
      notify()
    }
    else {
      console.log('INVALID INPUT')
    }

  }


  const LoginData = (e) => {
    name = e.target.name
    value = e.target.value
    setLoginUser({ ...LoginUser, [name]: value })
    console.log(value);


  }
  const LoginVerify = async () => {
    console.log('helooooooo login')
    const { email, password } = LoginUser
    if (email && password) {
      let data = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      })

      let res = await data.json()
      //console.log('hey user with id', res)
      if (res._id === null) {
        //window.alert("Exist no account ");
        setfound(true)
      }
      else {
        localStorage.setItem('trytoken', JSON.stringify(res.tokens))
        setCookie('access_token', res.tokens)
        //console.log('cookie is',cookies)
        //validateCheck()
        authUser(res)
        console.log('user signside', res)
        //window.alert("successfully logged in")
        navigate('/')

      }
    }

    else {
      console.log('INVALID INPUT')
    }

  }

  const toggleForm = () => {
    setShow(!show)
    setfound(false)


  }

  useEffect(() => {

  }, [])
  return (
    <>
      <section className='body-divide container-fluid'>
        <div className={`container  ${show ? "active" : " "} `}>
          <div className='user signinBx'>
            <div className="imgBx"><img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg" alt="" /></div>
            <div className="formBx">
              <form action="POST" id="myForm" onSubmit={(e) => {
                e.preventDefault();
                setLoginUser({
                  email: '',
                  password: ''
                })
              }}>
                <h2>Sign In</h2>
                {found ? (
                  <p className="text-danger sign_message" >
                    The email and password you entered is not registered. Try making new account!
                  </p>
                ) : (
                  ""
                )}
                <input type="email" name='email' value={LoginUser.email} onChange={LoginData} placeholder="Email Address" />
                <input type="password" name='password' value={LoginUser.password} onChange={LoginData} placeholder=" Password" />
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
                setUser({
                  firstname: '',
                  lastname: '',
                  email: '',
                  password: ''
                })
              }}>
                <h2>Create an account</h2>
                <input type="text" name='firstname' value={User.firstname} onChange={getData} placeholder="firstname" />
                <input type="text" name='lastname' value={User.lastname} onChange={getData} placeholder="lastname" />
                <input type="email" name='email' value={User.email} onChange={getData} placeholder="Email Address" />
                <input type="password" name='password' value={User.password} onChange={getData} placeholder=" Password" />

                <input type="submit" name="" value="Sign Up" onClick={DBData} />
                <ToastContainer
                  position="top-center"
                  autoClose={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  theme="light"
                />
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



































      {/* <Form action='POST' onSubmit={(e)=>{
      e.preventDefault()
      
    }}>
    <Row className="mb-3">
    <Form.Group as={Col}>
        <Form.Label>FirstName</Form.Label>
        <Form.Control type="text" placeholder="Enter Firstname" name='firstname' value={User.firstname} onChange={getData} />
      </Form.Group>
      <Form.Group as={Col}>
        <Form.Label>LastName</Form.Label>
        <Form.Control type="text" placeholder="Enter LastName" name='lastname'  value={User.lastname} onChange={getData}/>
      </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col}>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email'  value={User.email} onChange={getData}/>
      </Form.Group>

      <Form.Group as={Col}>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password'  value={User.password} onChange={getData}/>
      </Form.Group>
    </Row>

    <Form.Group className="mb-3" id="formGridCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>

    <Button variant="primary" type="submit" onClick={DBData}>
      Submit
    </Button>
  </Form>


  <Form method='post' >
    <Row className="mb-3">
    <Form.Group as={Col}>
      <Form.Label>Email</Form.Label>
      <Form.Control type="email"  name='email'  value={LoginUser.email} onChange={LoginData} placeholder="Enter email"/>
    </Form.Group>

    <Form.Group as={Col}>
      <Form.Label>Password</Form.Label>
      <Form.Control type="text" name='password'  value={LoginUser.password} onChange={LoginData}  placeholder="Password"/>
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit" onClick={LoginVerify}>
   login
  </Button>
</Form> */}

    </>

  )
}

export default Sign