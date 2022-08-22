import {React,useState} from 'react'
import{Button, Container, Form, InputGroup,Row,Col,Badge} from 'react-bootstrap'
function App() {
    const[Name,setName]= useState('')
    const[Age,setAge]= useState({})
    const[Country,setCountry]= useState([])
   
    const getName = async (param)=>{
        console.log(param)
        setName(param)
        let res = await fetch(`https://arkakapi.herokuapp.com/https://nationalize.io/?name=${Name}`)
       let dat = await res.json()
    //    console.log(dat)
       setCountry(dat)
      
    }
           
         
   
   const predict=()=>{
    // let response = await fetch(`https://arkakapi.herokuapp.com/https://api.agify.io/?name=${Name}`)
    // let data = await response.json()
    // console.log(data)
    // setAge(data)

    //  let res = await fetch(`https://arkakapi.herokuapp.com/https://nationalize.io/?name=${Name}`)
    // let dat = await res.json()
    // console.log(dat)
    //  setCountry(dat.country)
//     setName(param)
//     try{
//    let data= await Promise.all([
    
//         fetch(`https://arkakapi.herokuapp.com/https://api.agify.io/?name=${Name}`).then(resp => resp.json()),
//         fetch(`https://arkakapi.herokuapp.com/https://nationalize.io/?name=${Name}`).then(resp => resp.json()),
       
//       ])
//     }catch(error){
//         console.log('erooor')
//       }
   
    
   }


  return (
    <Container className='bg-warning justify-content-center text-center align-items-center'>
     <div className='p-5'>
      <h1><em>Let'S Do Prediction</em></h1>
      <InputGroup className="p-3 w-50 offset-3 ">
            <Form.Control
            onChange={(e)=>getName(e.target.value)}
              placeholder="Your Name"
              aria-label="predict"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <Button className='btn-lg' onClick={predict}>Predict</Button>
          {console.log(Country)}
          <Row className='p-3'>
            <Col md={12}>
            <h1>Is It You</h1>
            {/* <p><Badge className='bg-warning fs-5'>Name:{Name}</Badge></p>
            <p><Badge className='bg-warning fs-5'>Age:{Age.age}</Badge></p>
            <p><Badge className='bg-warning fs-5'>Country:{Country.country_id}</Badge></p> */}
            </Col>
          </Row>
          </div>

    </Container>
  )
}

export default App