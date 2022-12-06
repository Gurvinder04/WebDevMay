import React, { useEffect } from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { BsTruck, BsFillGiftFill, BsChatDots, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import {FaRegHeart} from 'react-icons/fa'

function CardLayout({ product}) {
    useEffect(()=>{

    },[product])
  return (
    <Col md={3} className='pt-3'>
    <Card style={{ width: '16rem',height:'50vh' }} className='card'>
    {/* <Card.Img variant="top" src={`../AdminPanel/src/uploads/${product.image}`} /> */}
   <div className='content'>
   <div className='front'>
    <Link to={`detail/${product._id}`}><Card.Img variant="top" src='https://i.pinimg.com/736x/e5/19/27/e51927451af0eb0b2f89d300943c84f6--muji-study-muji-stationary.jpg' style={{ width: '18rem',height:'35vh' }} className='profile'/></Link>
    </div>
    <Card.Body>
      <Card.Title>{product.productname}</Card.Title>
      <div className='back1 from-right'>
        <h5>{product.productname}</h5>
        <p>€{product.price}</p>
      <div className="description-prod">
                  <BsStarFill fill='#fd7e14'></BsStarFill>
                  <BsStarFill fill='#fd7e14'></BsStarFill>
                  <BsStarFill fill='#fd7e14'></BsStarFill>
                  <BsStarFill fill='#fd7e14'></BsStarFill>
                  <BsStarHalf fill='#fd7e14'></BsStarHalf>
              </div>
       {/* <Card.Text className='text-center'>
      €{product.price}
      </Card.Text> */}
      <Button variant="success" className='cart-button'>Add to Cart</Button>
      <FaRegHeart className='faregheart social-icon'></FaRegHeart>
      </div>
    </Card.Body>
    </div>
  </Card>
  </Col>
  )
}

export default CardLayout