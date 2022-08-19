import {React,useState,apiKey} from 'react'
import {Container,Row, Col,InputGroup,Form,Button, Table } from 'react-bootstrap'


function App() {
    const[cryptodata,setCyrptoData] = useState([])
    const[currentcoin,setCurrentCoin] = useState()
    
   
    const fetchData = ()=>{
        console.log('retreiving data...')
           fetch('./data')
          .then((response)=>response.json())
          .then(data=>{
            console.log(data)
          })
    }
    const getName =(param)=>{
        console.log(param)
        console.log(cryptodata)
        // if(param ==(cryptodata.data.name)){
        // setCurrentCoin(param)
        // }
        // else{
        //     console.log('erorr')
        // }
    }
    const getPrice =(e)=>{
        console.log(e.target)
        setCurrentCoin(e.target.value)
    }
  return (
    <Container className='bg-dark text-light p-5 justify-content-center'>
        <Row>
            <Col>
            <InputGroup className="mb-3">
            <Form.Control
            onChange={(e)=>getName(e.target.value)}
            placeholder="Coinname"
            aria-label="coinname"
            aria-describedby="basic-addon1"
            />
            </InputGroup>
            <Button onClick={fetchData}>CALCULATE</Button>
            <h1>{cryptodata}</h1>
            </Col>
        </Row>
        <Table striped bordered hover className='text-light text-center'>
        <thead>
        <tr>
          <th>Coin Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
      {/* {
        cryptodata.map(currentcoin,index=>(
            <tr key={index}>{cryptodata.data.name}</tr>
        ))
      } */}
      </tbody>
      </Table>
    </Container>
  )
}

export default App
