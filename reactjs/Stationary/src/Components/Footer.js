import React from 'react'
import { Col, Container } from 'react-bootstrap'
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs'
import { FaFacebookF, FaInstagram, FaLocationArrow, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa'
import { MdAccessTime, MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <Container fluid={true} className='p-0'>
    < div className='footer-bg text-center'>
        <h2 style={{fontFamily:" 'Secular One', sans-serif",fontSize:'35px',paddingTop:'40px'}}>Subscribe And Get 20% Off Your First<br></br> Purchase</h2>
        <div className='form-bg'>
         <form className='d-flex newsletter-form'>
          <input type='email' name='email' placeholder='Your email' className='newsletterform-border'></input>
          <button type='button' className='newsletterbtn-border'>Subscribe<BsFillArrowUpRightCircleFill></BsFillArrowUpRightCircleFill></button>
        </form>
        </div>

        <div className='d-flex m-5'>
            <Col>
            <h4>Stationero</h4>
            <p>We promise we’ll get back to you<br></br>promptly– your gifting needs are always<br></br>on our minds!</p>
            <div className='d-flex fast-delivery'>
                <FaFacebookF></FaFacebookF>
                <FaTwitter></FaTwitter>
                <FaYoutube></FaYoutube>
                <FaInstagram></FaInstagram>
            </div>
            </Col>
            <Col>
             <h5>USEFUL LINKS</h5>
             <ul>
             <li>About Us</li>
             <li>Contact Us</li>
             <li>Delivery Policy</li>
             <li>FAQ'S</li>
             <li>Privacy Policy</li>
             <li>Return Policy</li>
             </ul>
            </Col>
            <Col>
            <h5>SHOP</h5>
            <ul>
            <li>Shop</li>
            <li>Blog</li>
            <li>New Arrivals</li>
            <li>Site Map</li>
            </ul>
            </Col>
            <Col>
            <h5>NEED HELP</h5>
           <p><FaPhoneAlt>(+84)-01234 - 5678</FaPhoneAlt></p>
           <p><MdAccessTime>Monday – Friday: 9:00-20:00<br></br>Saturday: 11:00 – 15:00</MdAccessTime></p>
           <p><MdEmail>demo@demo.com</MdEmail></p>
            </Col>

        </div>
        <hr></hr>
        <div>
            <p>Copyright © 2021 stationero. All Rights Reserved.</p>
        </div>
        
    </div>
    </Container>
  )
}

export default Footer