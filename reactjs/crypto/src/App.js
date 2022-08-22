import { React, useState } from 'react'
import { Container, Row, Col, InputGroup, Form, Button, Table } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'


function App() {
  const [cryptodata, setCyrptoData] = useState([])
  const [currentcoin, setCurrentCoin] = useState('')
  const [findCoin,setFindCoin] = useState([])

  // const fetchData = ()=>{
  //     console.log('cryptooooo data...')
  //        fetch('http://arkakapi.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=46cb6a30-7b16-428c-833a-0f1a4642c3dc&sort=market_cap&start=1&limit=10&cryptocurrency_type=tokens&convert=EUR')
  //       .then((response)=>response.json())
  //       .then(data=>{
  //         console.log(data)
  //         setCyrptoData(data)
  //       })


  const fetchData = () => {

    const findCoin = cryptodata.filter(coin=>coin.name==currentcoin)
   setFindCoin(findCoin)
   //setFindCoin(...findcoin)
   

  }


  const getName = async (param) => {
    setCurrentCoin(param)
  
    console.log('cryptoooo data...')
    let response = await fetch('https://arkakapi.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=46cb6a30-7b16-428c-833a-0f1a4642c3dc&sort=market_cap&start=1&limit=10&cryptocurrency_type=tokens&convert=EUR')
    let data = await response.json()

    setCyrptoData(data.data)
  }

  return (
    <Container className='bg-dark text-light p-5 justify-content-center'>
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <Form.Control
              onChange={(e) => getName(e.target.value)}
              placeholder="Coinname"
              aria-label="coinname"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <Button onClick={fetchData}>CALCULATE</Button>
      

        {console.log(cryptodata)}
        {console.log(findCoin)}
        </Col>
      </Row>
      <Table striped bordered hover className='text-light text-center bg-dark'>
        <thead>
          <tr>
            {/* {  console.log(cryptodata)} */}
            <th>Coin Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
              {
                findCoin.map(item=>(
                  <tr className='text-light bg-light'>
                  <td>{item.name}</td>
                  <td>{item.quote.EUR.price}</td>
                  </tr>
                 
                ))
              }
         

          
        </tbody>
      </Table>

    </Container>
  )
}

export default App
