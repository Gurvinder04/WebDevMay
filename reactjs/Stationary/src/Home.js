import React from 'react'
import { Button, Col, Container, Dropdown, DropdownButton, Form, InputGroup, Row, SplitButton } from 'react-bootstrap'
import {BsTruck,BsFillGiftFill,BsChatDots} from 'react-icons/bs'
import {MdPayment} from 'react-icons/md'
import Countdown from 'react-countdown'

function Home() {
  return (
    <>
    <div className='body-divide container-fluid'></div>
    <Container>
    <Row className='justify-content-center text-center mt-4'>
      <Col className='d-flex'>
      <div>
      <BsTruck className='fasearch'></BsTruck>
      <h6>Fast Delivery</h6>
      <p>For All Orders Over $120</p>
      </div>
      <div className="vl"></div>
      </Col>
      
      <Col  className='d-flex'>
      <div>
      <MdPayment className='fasearch'></MdPayment>
      <h6>Safe Payments</h6>
      <p>100 % Secure Payment</p>
      </div>
      <div className="vl"></div>
      </Col>
      <Col  className='d-flex'>
      <div>
      <BsFillGiftFill className='fasearch'></BsFillGiftFill>
      <h6>Discount Coupons</h6>
      <p>Enjoy Huge Promotions</p>
      </div>
      <div className="vl"></div>
      </Col>
      <Col  className='d-flex'>
      <div>
      <BsChatDots className='fasearch'></BsChatDots>
      <h6>Quality Support</h6>
      <p>Dedicated 24/7 Support</p>
      </div>
      <div className="vl"></div>
      </Col>  
    </Row>
    </Container>
    <hr></hr>
     
     <div className='container cont2 d-flex mt-5'>
      <Col className='office-desk'>
      <img src='https://cdn.shopify.com/s/files/1/0905/2012/files/station-h1.jpg?v=1631239898'></img>
      <div className='top-left'>
          <p>Sale Up To 15% Off</p>
          <h2>Home Office Desks</h2>
          <Button className='shop-now'>Shop Now</Button>
        </div>
      </Col>

      <Col className='office-desk cont2'>
      <img src='https://cdn.shopify.com/s/files/1/0905/2012/files/station-h2.jpg?v=1631239898'></img>
      <div className='top-left'>
          <p>All Page Types</p>
          <h2>Notebooks</h2>
          <Button className='shop-now'>Shop Now</Button>
        </div>
      </Col>

      <Col className='office-desk cont2'>
         <div className='office-desk cont2'>
        <img src='https://cdn.shopify.com/s/files/1/0905/2012/files/station-h3.jpg?v=1631239898'></img>
        <div className='top-left'>
          <p>Office / Home</p>
          <h2>Metal Pens</h2>
          <Button className='shop-now'>Shop Now</Button>
        </div>
        </div>
      <br></br>
      <div className='office-desk cont2'>
        <img src='https://cdn.shopify.com/s/files/1/0905/2012/files/station-h4.jpg?v=1631239898'></img>
        <div className='top-left'>
          <p>Office Adhesive</p>
          <h2>Tape</h2>
          <Button className='shop-now'>Shop Now</Button>
        </div>
        </div>
      </Col>
     </div>

     <div className='container-fluid deal mt-5 text-center'>
      <p className='mt-5'>LIMITED QUANTITES</p>
      <h1 className='mt-5'>Deal of The Day</h1>
      <p>Give thank to the most high</p>
      <Countdown date={Date.now() +1000 + 50000} className="count"></Countdown>
      <button>View all deals</button>
      <Row className='d-flex mt-5'>
        <Col>
        <img src='https://cdn3d.iconscout.com/3d/premium/thumb/notebook-and-pencil-5261879-4403131.png' className='deal-img'></img>
        </Col>
        <Col>
        <img src='https://www.freeiconspng.com/thumbs/book-png/book-png-17.jpg' className='deal-img'></img>
        </Col>
        <Col>
        <img src='https://cdn3d.iconscout.com/3d/premium/thumb/notebook-and-pencil-5261879-4403131.png' className='deal-img'></img>
        </Col>
        <Col>
        <img src='https://www.freeiconspng.com/thumbs/book-png/book-png-17.jpg' className='deal-img'></img>
        </Col>
        <Col>
        <img src='https://cdn3d.iconscout.com/3d/premium/thumb/notebook-and-pencil-5261879-4403131.png' className='deal-img'></img>
        </Col>
        <Col>
        <img src='https://www.freeiconspng.com/thumbs/book-png/book-png-17.jpg' className='deal-img'></img>
        </Col>
      </Row>
      
     </div>





   
   </>
  )
}

export default Home