import React, { useEffect } from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { BsTruck, BsFillGiftFill, BsChatDots, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import {FaRegHeart} from 'react-icons/fa'
import AddToCart from './AddToCart'
//import {uploads}  from '../../../AdminPanel/src/uploads'

function CardLayout({product}) {
    useEffect(()=>{

    },[product])
  return (
    <Card style={{ width: '16rem',height:'50vh' }} className='card'>
    {/* <Card.Img variant="top" src={`../AdminPanel/src/uploads/${product.image}`} /> */}
   <div className='content'>
   <div className='front'>
    {/* <Link to={`/product/${product._id}`}><Card.Img variant="top" src='https://wallpapers.com/images/hd/cute-colorful-confetti-stars-rxuh1k7oq89g2b1i.jpg' style={{ width: '18rem',height:'35vh' }} className='profile'/></Link> */}
    <Link to={`/product/${product._id}`}><Card.Img variant="top" src={`uploads/${product.image}`} style={{ width: '18rem',height:'35vh' }} className='profile'/></Link>
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
      {/* <Button variant="success" className='cart-button'>Add to Cart</Button> */}
      <AddToCart  product ={product}/>
      <FaRegHeart className='faregheart social-icon'></FaRegHeart>
      </div>
    </Card.Body>
    </div>
    { console.log('image v',product.image)}
  </Card>

  
  )
}

export default CardLayout