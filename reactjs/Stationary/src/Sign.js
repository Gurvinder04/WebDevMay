import React, { useState } from 'react'
import { Button, Form, Row ,Col} from 'react-bootstrap'



function Sign() {
   const[User,setUser] = useState({
    firstname:'',
    lastname:'',
    email:'',
    password:''
   })
let name,value
    // const getData=(e)=>{
    //    name=e.target.name
    //    value=e.target.value
    //    setUser({...User, [name]:value})
    //    console.log(User)
    // }
    // const DBData= async()=>{
    //     console.log('helooooooo')
    //     const { firstname,lastname, email,password} = User
    //     if(firstname && lastname && email && password){
    //         let data = await fetch('/sign',{
    //             method:'POST',
    //             headers:{
    //                 'Content-Type':'application/json'
    //             },
    //             body:JSON.stringify({firstname,lastname, email,password})
    //         })
           
    //         let res = await data.json()
    //         console.log(res)  
    //     }
    //     else{
    //         console.log('INVALID INPUT')
    //     }

    // }


    const LoginData=(e)=>{
      name=e.target.name
      value=e.target.value
      setUser({...User, [name]:value})
      console.log(User)
   }
   const LoginVerify= async()=>{
       console.log('helooooooo')
       const {email,password} = User
       if(email && password){
           let data = await fetch('/login',{
               method:'POST',
               headers:{
                   'Content-Type':'application/json'
               },
               body:JSON.stringify({email,password})
           })
          
           let res = await data.json()
           console.log(res)  
       }
       else{
           console.log('INVALID INPUT')
       }

   }
  return (
  //   <Form action='POST' onSubmit={(e)=>{
  //     e.preventDefault()
  //   }}>
  //   <Row className="mb-3">
  //   <Form.Group as={Col}>
  //       <Form.Label>FirstName</Form.Label>
  //       <Form.Control type="text" placeholder="Enter Firstname" name='firstname' value={User.firstname} onChange={getData} />
  //     </Form.Group>
  //     <Form.Group as={Col}>
  //       <Form.Label>LastName</Form.Label>
  //       <Form.Control type="text" placeholder="Enter LastName" name='lastname'  value={User.lastname} onChange={getData}/>
  //     </Form.Group>
  //     </Row>
  //     <Row className="mb-3">
  //     <Form.Group as={Col}>
  //       <Form.Label>Email</Form.Label>
  //       <Form.Control type="email" placeholder="Enter email" name='email'  value={User.email} onChange={getData}/>
  //     </Form.Group>

  //     <Form.Group as={Col}>
  //       <Form.Label>Password</Form.Label>
  //       <Form.Control type="password" placeholder="Password" name='password'  value={User.password} onChange={getData}/>
  //     </Form.Group>
  //   </Row>

  //   <Form.Group className="mb-3" id="formGridCheckbox">
  //     <Form.Check type="checkbox" label="Check me out" />
  //   </Form.Group>

  //   <Button variant="primary" type="submit" onClick={DBData}>
  //     Submit
  //   </Button>
  // </Form>



  <Form action='POST' onSubmit={(e)=>{
    e.preventDefault()
  }}>
    <Row className="mb-3">
    <Form.Group as={Col}>
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" name='email'  value={User.email} onChange={LoginData}/>
    </Form.Group>

    <Form.Group as={Col}>
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" name='password'  value={User.password} onChange={LoginData}/>
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit" onClick={LoginVerify}>
   login
  </Button>
</Form>





  )
}

export default Sign