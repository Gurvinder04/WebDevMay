import React from 'react'
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Blog() {
  return (
    <>
     <Container fluid={true} className='bg-dark'>
    <h1 className='text-light text-center about-heading'>MY<span className='span1'> BLOG</span></h1>
    
    
     <div className='row m-5' data-aos='slide-left' data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
      <div className='col mb-5'>
      <Card style={{ width: '18rem',backgroundColor:'transparent'  }}>
      <Card.Img variant="top" src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/26d46869-bad3-4702-ba05-4053a7cb6473/smashing-logo-avatar-opt.png" />
      <Card.Body>
        <a href='https://www.smashingmagazine.com/2021/06/useful-frontend-boilerplates-starter-kits/'><Card.Title>Useful Front-End Boilerplates And Starter Kits</Card.Title></a> 
      </Card.Body>
    </Card>
      </div>

      <div className='col mb-5'>
      <Card style={{ width: '18rem',backgroundColor:'transparent'  }}>
      <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/good-health-concept-two-signposts-words-life-under-blue-sky-front-summer-meadow-144414039.jpg" />
      <Card.Body>
       <a href='https://www.jennibradleymd.com/post/optimizing-your-immune-system' ><Card.Title>Optimizing Your Immune System</Card.Title></a> 
      </Card.Body>
    </Card>
      </div>

      <div className='col mb-5'>
      <Card style={{ width: '18rem',backgroundColor:'transparent'  }}>
      <Card.Img variant="top" src="https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_1080/MTkzMTkyMDYyNDU0MTQ2OTc5/quote-on-success.webp" />
      <Card.Body>
        <a href='https://parade.com/living/success-quotes'><Card.Title>You Accomplish Your Dreams—You’ve Got This!</Card.Title></a> 
      </Card.Body>
    </Card>
      </div>

      <div className='col mb-5'>
      <Card style={{ width: '18rem',backgroundColor:'transparent' }}>
      <Card.Img variant="top" src="http://woxlab.com/wp-content/uploads/2022/05/PythonTools-Blockchain.jpeg" />
      <Card.Body>
       <a href='https://learnpython.com/blog/python-for-data-science-track-of-the-season/'> <Card.Title>Python Track of the Season: Python for Data Science</Card.Title></a> 
      </Card.Body>
    </Card>
      </div>
    
     </div>



  </Container>
   
  </>
  )
}

export default Blog