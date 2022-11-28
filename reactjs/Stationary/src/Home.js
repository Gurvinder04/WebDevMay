import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Dropdown, DropdownButton, Form, InputGroup, Row, SplitButton } from 'react-bootstrap'
import { BsTruck, BsFillGiftFill, BsChatDots, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { MdPayment } from 'react-icons/md'
import {FaRegHeart} from 'react-icons/fa'
import Countdown from 'react-countdown';
import { Animated } from "react-animated-css";
import {Link} from 'react-router-dom'


function Home() {
  const [Items, setItems] = useState([])
  const fetchData = async () => {
    let response = await fetch('http://localhost:4000/product')
    let data = await response.json()
    setItems(data)
    console.log('Data showing', data)
    console.log('Items showing', Items)
    console.log('productname', data[0].productname)
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
       <div className='body-divide container-fluid'></div>
        <Container>
        <Row className='justify-content-center text-center mt-4'>
          <Col className='d-flex fast-delivery'>
            <div>
              <BsTruck className='fasearch'></BsTruck>
              <h6>Fast Delivery</h6>
              <p>For All Orders Over $120</p>
            </div>
            <div className="vl"></div>
          </Col>

          <Col className='d-flex fast-delivery'>
            <div>
              <MdPayment className='fasearch'></MdPayment>
              <h6>Safe Payments</h6>
              <p>100 % Secure Payment</p>
            </div>
            <div className="vl"></div>
          </Col>
          <Col className='d-flex fast-delivery'>
            <div>
              <BsFillGiftFill className='fasearch'></BsFillGiftFill>
              <h6>Discount Coupons</h6>
              <p>Enjoy Huge Promotions</p>
            </div>
            <div className="vl"></div>
          </Col>
          <Col className='d-flex fast-delivery'>
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
        <Col className='office-desk animate__animated animate__jackInTheBox'>
          <img src='https://cdn.shopify.com/s/files/1/0905/2012/files/station-h1.jpg?v=1631239898' className='animate__animated animate__flipInX animate__delay-1s'></img>
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
        <Countdown date={Date.parse('2022-12-21 01:02:03') + 10000} className='count' />
        <p> days,hours, seconds</p>
        <Button className='shop-now'>View all deals</Button>
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
      <Row className='m-5'>
      {
        Items.length != 0 ?
          Items.map((product, index) => (
            
            <Col md={3} className='p-4'>
            <Card style={{ width: '18rem',height:'55vh' }}>
              {/* <Card.Img variant="top" src={`../AdminPanel/src/uploads/${product.image}`} /> */}
             <Link to={`detail/${product._id}`}><Card.Img variant="top" src='https://i.pinimg.com/736x/e5/19/27/e51927451af0eb0b2f89d300943c84f6--muji-study-muji-stationary.jpg' style={{ width: '18rem',height:'30vh' }} /></Link>
              <Card.Body>
                <Card.Title>{product.productname}</Card.Title>
                <div class="description-prod text-center">
                            <BsStarFill fill='#fd7e14'></BsStarFill>
                            <BsStarFill fill='#fd7e14'></BsStarFill>
                            <BsStarFill fill='#fd7e14'></BsStarFill>
                            <BsStarFill fill='#fd7e14'></BsStarFill>
                            <BsStarHalf fill='#fd7e14'></BsStarHalf>
                        </div>
                <Card.Text className='text-center'>
                €{product.price}
                </Card.Text>
                <Button variant="success">Add to Cart</Button>
                <FaRegHeart className='faregheart'></FaRegHeart>
              </Card.Body>
            </Card>
            </Col>
            

          ))
          :
          'uffff ik hor dikat'

      }

      <h2 className='text-center text-success mt-5'>Shop By Category</h2>
      <div className='d-flex fast-delivery'>
      <Col md={2}>
        <img src='https://www.howjoyful.com/wp-content/uploads/2021/01/the-best-notebooks-for-designers.jpg.webp' className='shop-cat'></img>
        <p className='text-center'>Notebooks</p>
      </Col>
      <Col md={2}>
      <img src='https://www.100directions.com/wp-content/uploads/2020/03/organizing-pens-pencils-feature-jen-goode-768x1024.jpg' className='shop-cat'></img>
      <p className='text-center'>Pen & Pencils</p>
      </Col>
      <Col md={2}>
      <img src='https://www.northeaststationery.co.uk/wp-content/uploads/2016/10/office-1084x473.jpg' className='shop-cat'></img>
      <p className='text-center'>Office Stationary</p>
      </Col>
      <Col md={2}>
      <img src='https://www.creativeboom.com/uploads/articles/82/8213a5686b6f2ba1d10aecd7c223928d159e1886_810.jpg' className='shop-cat'></img>
      <p className='text-center'>Cover Stuff</p>
      </Col>
      <Col md={2}>
      <img src='https://i.pinimg.com/736x/e5/19/27/e51927451af0eb0b2f89d300943c84f6--muji-study-muji-stationary.jpg' className='shop-cat'></img>
      <p className='text-center'>Notebooks</p>
      </Col>
      </div>
      </Row>








    </>
  )
}

export default Home