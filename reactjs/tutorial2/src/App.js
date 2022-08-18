import React,{useState} from 'react'
import {Container,Row,Col,Button,Badge} from 'react-bootstrap'
function App() {

    const[users,setUsers]= useState([])
    const[currentuser,setCurrentUser]=useState({})

    //fetching data in react
    const fetchingData =async()=>{
        console.log('retreiving data...')
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await response.json()
        
        setUsers(data)
    }
    //end of fetching

    const getDetailOfUser = (param)=>{
        console.log('testing.....',param)
        setCurrentUser(param)
    }
  return (
     <Container className='bg-dark text-light p-4' fluid={true}>
       {/* <Row className='justify-content-center'>
         <Col md={3}>
            <h1>Fetch Data</h1>
            <Button onClick={fetchingData}>Get User Data</Button>
         </Col>
         <Col md={9} className='bg-secondary text-dark'>
            <h1>User Details</h1>
            <p><Badge>Phone:</Badge>{currentuser.phone}</p>
            <p><Badge>Email:</Badge>{currentuser.email}</p>
            <p><Badge>Username</Badge>{currentuser.username}</p>
         </Col>
         {console.log(users)}
            {
                users.map((user,index)=>(
                        <div key={index} onClick={()=>getDetailOfUser(user)}>
                            <p>{user.name}</p>
                        </div>
                ))
            }
       </Row> */}
     </Container>
  )
}

export default App