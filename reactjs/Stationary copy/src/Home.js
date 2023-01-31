import React, { useEffect, useState } from 'react'


import { Button, Card, Carousel, Col, Container, Dropdown, DropdownButton, Form, InputGroup, Row, SplitButton } from 'react-bootstrap'
import { BsTruck, BsFillGiftFill, BsChatDots, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { MdPayment } from 'react-icons/md'
import {FaArrowCircleRight, FaPlus, FaRegHeart} from 'react-icons/fa'
import Countdown from 'react-countdown';
import { Animated } from "react-animated-css";
import {Link} from 'react-router-dom'
import CardLayout from './Components/CardLayout'
import { useProductContext } from './Context/ProductContext.js'
import { useFilterContext } from './Context/FilterContext'
import Dummy from './Dummy'


function Home() {
  const [Items, setItems] = useState([])
  const {isLoading,feature,products} = useProductContext()
  const {filters:{category},searchValue} = useFilterContext()
  console.log('All products r here...',products)
  // const fetchData = async () => {
  //   let response = await fetch('http://localhost:4000/product')
  //   let data = await response.json()
  //   setItems(data)
  //   console.log('Data showing', data)
  //   console.log('Items showing', Items)
  //   console.log('productname', data[0].productname)
  // }

  useEffect(() => {
    // fetchData()
    
  }, [])
  return (
    <>
    
       {/* <div className='body-divide container-fluid'></div> */}
       <div className='carousel_div'>
       <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          // src="https://images.unsplash.com/photo-1631173716529-fd1696a807b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3RhdGlvbmVyeXxlbnwwfHwwfHw%3D&w=1000&q=80"
          src="https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?cs=srgb&dl=pexels-huseyn-kamaladdin-667838.jpg&fm=jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h1 className='h1Size animate__animated animate__jackInTheBox'><em><span className='red'>C</span><span className='green'>om</span><span className='black'>P</span><span className='yellow'>le<span className='blue'>te</span></span><span className='red'> Y</span><span className='yellow'>OU</span><span className='blue'>R</span><span className='orange'> B</span><span className='green'>ag</span></em></h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          // src="https://media.istockphoto.com/id/1333039392/photo/frame-of-shcool-supplies-and-keyboard-on-white-background-back-to-school-distance-learning.jpg?s=170667a&w=0&k=20&c=fv-lcP_ayvq-KdeHK3Y7PIC69xjIUUbep3j3qxs3824="
          src="https://wallpapercave.com/wp/wp3222116.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        {/* <h1 className='h1Size animate__animated animate__jackInTheBox'><em><span className='red'>C</span><span className='green'>om</span><span className='black'>P</span><span className='yellow'>le<span className='blue'>te</span></span><span className='red'> Y</span><span className='yellow'>OU</span><span className='blue'>R</span><span className='orange'> B</span><span className='green'>ag</span></em></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          // src="https://media.istockphoto.com/id/1264689237/photo/school-or-office-supplies-border-on-blackboard-background-copy-space.jpg?s=612x612&w=0&k=20&c=PDl6EgQzOhc5RLC9ylAlZd28HgJ2J8fkAgyuo3eqHIc="
          src="https://png.pngtree.com/thumb_back/fw800/background/20210415/pngtree-school-background-with-accessories-image_624094.jpg"
         alt="Third slide"
        />

        <Carousel.Caption>
        {/* <h1 className='h1Size animate__animated animate__jackInTheBox'><em><span className='red'>C</span><span className='green'>om</span><span className='black'>P</span><span className='yellow'>le<span className='blue'>te</span></span><span className='red'> Y</span><span className='yellow'>OU</span><span className='blue'>R</span><span className='orange'> B</span><span className='green'>ag</span></em></h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img
          className="d-block w-100"
          // src="https://images.unsplash.com/photo-1631173716529-fd1696a807b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3RhdGlvbmVyeXxlbnwwfHwwfHw%3D&w=1000&q=80"
          src="https://media.istockphoto.com/id/1252593916/photo/school-supplies-on-blue-background.jpg?s=612x612&w=0&k=20&c=UaSf3atg2K8VYXxey6isZ0OKKspd3zvARkLAe5zIuSw="
          alt="Forth slide"
        />
        <Carousel.Caption>
        {/* <h1 className='h1Size animate__animated animate__jackInTheBox'><em><span className='red'>C</span><span className='green'>om</span><span className='black'>P</span><span className='yellow'>le<span className='blue'>te</span></span><span className='red'> Y</span><span className='yellow'>OU</span><span className='blue'>R</span><span className='orange'> B</span><span className='green'>ag</span></em></h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
    </div>
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

      <div className='container cont2 d-flex mt-5' data-aos="zoom-in" data-aos-offset="200">
        
        <Col className='office-desk'>
          <img src='https://cdn.shopify.com/s/files/1/0905/2012/files/station-h1.jpg?v=1631239898' className='animate__animated animate__flipInX animate__delay-1s'></img>
          <div className='top-left'>
            <p>Sale Up To 15% Off</p>
            <h2>Home Office Desks</h2>
            <Link to={'/product'} ><Button className='shop-now' name='category' value='Office Stationary' onClick={searchValue}>Shop Now</Button></Link>
          </div>
        </Col>


        <Col className='office-desk cont2'>
          <img src='https://cdn.shopify.com/s/files/1/0905/2012/files/station-h2.jpg?v=1631239898' className='media-img'></img>
          <div className='top-left'>
            <p>All Page Types</p>
            <h2>Notebooks</h2>
           <Link to={'/product'} ><Button className='shop-now' name='category' value='Notebooks' onClick={searchValue}>Shop Now</Button></Link> 
          </div>
        </Col>

        <Col className='office-desk cont2'>
          <div className='office-desk cont2'>
            <img src='https://cdn.shopify.com/s/files/1/0905/2012/files/station-h3.jpg?v=1631239898' className='media-img'></img>
            <div className='top-left'>
              <p>Office / Home</p>
              <h2>Metal Pens</h2>
             <Link to={'/product'} ><Button className='shop-now' name='category' value='Pens&Pencils' onClick={searchValue}>Shop Now</Button></Link> 
            </div>
          </div>
          <br></br>
          <div className='office-desk cont2'>
            <img src='https://cdn.shopify.com/s/files/1/0905/2012/files/station-h4.jpg?v=1631239898' className='media-img'></img>
            <div className='top-left'>
              <p>Office Adhesive</p>
              <h2>Tape</h2>
             <Link to={'/produt'}><Button className='shop-now' name='category' value='Stuffs' onClick={searchValue}>Shop Now</Button></Link> 
            </div>
          </div>
        </Col>
      </div>

      <div className='container-fluid deal  text-center' data-aos="flip-up">
        <h2 style={{fontFamily:"'Ultra', serif",paddingTop:"40px",fontSize:'55px'}}>Open Up To A New<br></br> Experience.</h2>
        <h6 className=''>Deal of The Day</h6>
        <h2><Countdown date={Date.parse('2023-01-27') + 10000} className='count' /></h2>
       
        
        <Button className='shop-now' style={{backgroundColor:'#e84f69',marginBottom:'20px'}}>View all deals</Button>
        {/* <Row className='d-flex'>
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
        </Row> */}

       </div>
      <div className='row overflow-Row'>
     <div className='col d-flex m-5 text-center'>

  {           
          feature.length != 0 ?
          feature.map((product,index) => (
          <CardLayout product={product} key={index} />
          //<Dummy product={product} key={index} />
      
          ))
          :
          <div>.......Loading</div>

      }
      </div>
      </div>

      <div className='d-flex  tech extraMargin' data-aos="fade-up" data-aos-offset="350">
        <Col>
        <img src='https://cdn.shopify.com/s/files/1/0905/2012/files/station-h6.jpg?v=1632208549' className='media-img'></img>
        </Col>
        <Col className='find-more'>
        <h2 style={{fontFamily:" 'Secular One', sans-serif",fontSize:'45px'}}>The Stationary<br></br>Company</h2>
        <hr style={{color:'#8bc34a'}}></hr>
        <p className='find-description'>Our office supplies will help you organize your workspace from all kinds of desk essentials to top quality staplers, calculators and organizers.</p>
        <button className='find-button'>Find out more<FaArrowCircleRight className='Arrow'></FaArrowCircleRight></button>
        </Col>

      </div>

      <div className='text-center m-5'>
       <h3 style={{fontFamily:" 'Secular One', sans-serif",fontSize:'35px'}} className='extraMargin'>From Our Blog</h3>
       <Row className='d-flex text-center blog-flex mediaflex' data-aos="fade-right" data-aos-offset="450">
       <Col>
       <img src='https://demo74.leotheme.com/prestashop/leo_stationero_demo/img/leoblog/b/1/25/574_322/b-blog-2.jpg' className='blog-img media-img'></img>
       <div className='d-flex text-center blog-parts mt-4'>
        <p>DEMO DEMO</p>
        <p>SUB CATEGORY</p>
        <p style={{color:'gray'}}>12 DEC 2022</p>
       </div>
       <h5>Esterbrook X Accutron Fountain Pen Review</h5>
       <button className='read-button'>Read More<FaPlus className='readArrow'></FaPlus></button>
       </Col>
       <Col>
       <img src='https://demo74.leotheme.com/prestashop/leo_stationero_demo/img/leoblog/b/1/24/574_322/b-blog-1.jpg' className='blog-img media-img'></img>
       <div className='d-flex text-center blog-parts mt-4'>
        <p>DEMO DEMO</p>
        <p>SUB CATEGORY</p>
        <p style={{color:'gray'}}>12 DEC 2022</p>
       </div>
       <h5>Review: Yoobi X Marvel HB Pencils</h5>
       <button  className='read-button'>Read More<FaPlus className='readArrow'></FaPlus></button>
       </Col>
       <Col>
       <img src='https://demo74.leotheme.com/prestashop/leo_stationero_demo/img/leoblog/b/1/23/574_322/b-blog-7.jpg' className='blog-img media-img'></img>
       <div className='d-flex text-center blog-parts mt-4'>
        <p>DEMO DEMO</p>
        <p>SUB CATEGORY</p>
        <p style={{color:'gray'}}>12 DEC 2022</p>
       </div>
       <h5>State Of The Art: Gelatin Printmaking, Gelli Prints</h5>
       <button  className='read-button'>Read More<FaPlus className='readArrow'></FaPlus></button>
       </Col>
       </Row>

      </div>

      
    
      


  
     


      








    </>
  )
}

export default Home