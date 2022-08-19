import {React,useState,apiKey} from 'react'
import {Container,Row, Col,InputGroup,Form,Button, Table } from 'react-bootstrap'


function App() {
    const[cryptodata,setCyrptoData] = useState([])
    const[currentcoin,setCurrentCoin] = useState()
    
   
    const fetchData = async()=>{
        console.log('retreiving data...')
     fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=46cb6a30-7b16-428c-833a-0f1a4642c3dc&sort=market_cap&start=1&limit=10&cryptocurrency_type=tokens&convert=EUR`,{
          method: 'GET',    
            headers: {
                'Content-Type': 'application/json'
            },
            //body: JSON.stringify()
            mode:'no-cors'
          })
          .then(response =>response.json())
          .then(data => {
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
