import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import FoodCard from './components/Homepage/FoodCard'
import FoodCarousel from './components/Homepage/FoodCarousel'

function Home({result,searchItem}) {
  const [foodItems, setfoodItems] = useState([])
  const [searchReceipe, setSearchReceipe] = useState([])
  const history = useNavigate()

  const fetchData = async()=> {
    let response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=m')
    let data = await response.json()
    setfoodItems(data.meals)
  }

//   const findReceipe = (param)=>{
//     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${param !==''? param : 'a'}`)
//     .then(res=>res.json())
//     .then(data=>{
//       setSearchReceipe(data.meals)
//       console.log(searchReceipe)
//     })
//     .catch(err=>console.error(err))
 

//     console.log(param)
// }
  useEffect(()=>{
       fetchData()
    
  },[foodItems])

  return (
  <>
    <Container fluid={true} className="p-0" style={{ "width": "93%" }}>
      <FoodCarousel />
      <Row className='m-5'>
        <Col md={6} className='text-center'>
          <h1 style={{ "font-family": "'Lobster', cursive", "font-size": "4.5rem", "color": "red" }}>Today's Specials</h1>
          <p><strong>2 SLICES OF CHEESE PIZZA WITH A DRINK $4.60</strong><br></br>+taxes(toppings are extra)<br></br>Please see menu</p>
          <p><strong>1 SLICE OF CHEESE PIZZA WITH A SMALL<br></br>HOUSE SALAD & A DRINK $6.50</strong><br></br>+taxes(Toppings are extra)</p>
          <p><strong>AVAILABLE MONDAY-SATURDAY 11AM-3PM<br></br>DINE IN OR CARRY OUT ONLY</strong></p>
          <h1 style={{ "font-family": "'Pacifico', cursive", "font-size": "2.5rem", "color": "red" }}>limited time offer</h1>
          <Button className='bg-danger text-light specialbtn'>ALL SPECIALS</Button>
        </Col>
        <Col md={6}>
          <img src='https://cdn.shopify.com/s/files/1/0551/7462/7487/products/Seafood-Lovers-Pizza-Kit-SeaBear-2-13179-2022-b_800x.jpg?v=1655228575' className='roundImg' />
        </Col>
        </Row>
        <div className='shell'>
          <div className ='container'>
          <h2 class="underline">Our Receipes</h2>
          <div className ='row'>
          {
            foodItems != undefined ?
              foodItems.map((food, index) => (
                <FoodCard food={food} key={index}  />
              ))
              :
              ''
          }
          {/* {
             searchReceipe.length ==0?
             (
              foodItems != undefined ?
              foodItems.map((food, index) => (
                <FoodCard food={food} key={index}  />
                
              ))
              :
              ''
             )
             :
             searchReceipe !=undefined?
             searchReceipe.map((receipe,index)=>(
               <FoodCard receipe={receipe} key={index} test={foodItems}/>
             ))
             :
             'vdiya'
            } */}
          
          </div>
          </div>
          
          </div>
        {
          //  console.log(foodItems)
          console.log(searchItem)
         
        }
    </Container>
    </>
  )
}

export default Home