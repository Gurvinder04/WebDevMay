import React from 'react'
import { Carousel, Container } from 'react-bootstrap'

function FoodCarousel() {
  return (
    
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://t4.ftcdn.net/jpg/04/63/69/87/360_F_463698797_QqwDBblKVCcPriiYm6iwG0TQpOQb1WO9.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='carouselcaption'> HunGRy!</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/photos/cheerful-couple-in-pajamas-eating-pizza-at-home-portrait-picture-id1278764873?b=1&k=20&m=1278764873&s=612x612&w=0&h=UzOWCitIuZ1kGou9m5IAcKKpb37UgLJgq9nxDnHTddI="
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3 className='carouselcaption'> HunGRy!</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaperboat.com/wp-content/uploads/2020/08/13/52628/pizza-03.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3 className='carouselcaption'> HunGRy!</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  )
}

export default FoodCarousel