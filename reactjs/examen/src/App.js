import React from 'react'
import {Container,Row} from 'react-bootstrap'
import { BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Homepage from './Homepage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path ='/' element={<Homepage/>} />
    </Routes>
    </BrowserRouter>
    
  //  <Container>
  //   <Row>
  //   <Link to={'/homepage'}>HOME</Link>
  //   </Row>
  //  </Container>
  )
}

export default App