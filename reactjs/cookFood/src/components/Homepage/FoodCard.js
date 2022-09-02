import React, { useEffect } from 'react'
import { Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

function FoodCard({ food,index,foodItems }) {
    useEffect(() => {

    }, [foodItems])
    return (
        <>
        {/* <Col>
            <img src={food.strMealThumb} className='image' />
            <div className="content-box">
                <h4 className="name">{food.strMeal}</h4>
                <p>A burguer typically considered a sandwich, consisting of one or more cooked patties-usually placed inside a sliced bread roll or bun</p>
                <p>Onion, Lettuce, Tomatoe, Patty, Cheese</p>
                <div className="pricebtn">
                    <h2 className="price">$ 5</h2>
                    <a href="#">Order Now</a>
                </div>
            </div>
        </Col> */}


                    
                    <div class="col-md-3">
                        <div class="wsk-cp-product">
                            <div class="wsk-cp-img">
                                <img src={food.strMealThumb} />
                            </div>
                            <div class="wsk-cp-text">
                                <div class="category">
                                    <span>{food.strCategory}</span>
                                </div>
                                <div class="title-product">
                                    <h3>{food.strMeal}</h3>
                                </div>
                                <div class="description-prod">
                                    <p>{food.strInstructions}</p>
                                </div>
                                <div class="card-footer">
                                    <div class="wcf-left"><span class="price"><a href='/ReceipeDetail'>Read more</a></span></div>
                                    <div class="wcf-right"><a href="#" class="buy-btn"><i class="zmdi zmdi-shopping-basket"></i></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
              
      </>

    )
}

export default FoodCard