import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'


function ReceipeDetail() {
  const { mid } = useParams()
  const [receipe, setreceipe] = useState([])
  const [ingredients, setIngredients] = useState([])
  const [measures, setMeasures] = useState([])
  const [showmethod, setShowMethod] = useState(false)
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mid}`)
      .then(response => response.json())
      .then(data => {
        setreceipe(data.meals[0])
        let ingredients = []
        let measures = []
        Object.keys(data.meals[0])
          .filter(check => check.includes("Ingredient"))
          .map((obj, key) => {
            ingredients.push(data.meals[0][obj])
            //     console.log(data.meals[0][obj],'ingredientsssssss')

          })
        Object.keys(data.meals[0])
          .filter(check => check.includes("Measure"))
          .map((obj, key) => {
            measures.push(data.meals[0][obj])
            //     console.log(data.meals[0][obj],'ingredientsssssss')

          })
        setIngredients(ingredients.filter(item => item !== '' && item !== null)) // prvious state '',item1,item2,
        setMeasures(measures.filter(item => item !== '')) // prvious state '',item1,item2,
      })

  }, [mid])

  //   const names = Object.keys(receipe)
  //   .filter((key) => key.includes("Ingredient"))
  //   .reduce((obj, key) => {
  //       return Object.assign(obj, {
  //         [key]: receipe[key]
  //       });
  // }, {});


  const Toggle1 = () => {
    setShowMethod()
  }
  const Toggle2 = () => {
    setShowMethod(true)
  }

  return (
<>
      {/* <div className='recipe-card'>
        <div><img src={`${receipe.strMealThumb}`} style={{ backgroundSize: "cover", height: "430px", width: "-webkit-fill-available" }} /></div>
        <div className="recipe-card__body">
          <h1 className="recipe-card__heading">{receipe.strMeal}</h1>
          <h2 className="recipe-card__subhead"></h2>
          <ul className="recipe-card__nav">
            <li>
              <h3 className="" onClick={Toggle1}>Ingredients</h3>
              {showmethod ? null
                :
                <ul className="recipe-card__ingredients">
                  {/*
                Object.keys(receipe)
                  .filter(check => check.includes("Ingredient"))
                  .map((obj, key) => {
                    console.log(receipe[obj])
                    setIngredients(receipe[obj]);
                  })
            } 
                    ingredients.map((ingred, index) => (
                      <li key={index}>{measures[index]} {ingred}</li>

                    ))
                  }
                </ul>
              }
            </li>
            <li>
              <h3 onClick={Toggle2}>Method</h3>
              {showmethod ? <p>{receipe.strInstructions}</p> : null}
            </li>
          </ul>
          {console.log(ingredients,)}
          {console.log(measures, 'vdiyaaa')}
        </div>
      </div> */}

<Container fluid={true}>
   <Row>
   <Col className='m-5 text-center'>
   <h1 className='heading text-center'>{receipe.strMeal}</h1>
   <p className='text-center'><em>Category:</em>{receipe.strCategory}</p>
   <p className='text-center'><em>Area:</em>{receipe.strArea}</p>
   <h6 className='ingredient'><b>INGREDIENTS</b></h6>
   <ul>
    {
      ingredients.map((ingred, index) => (
        <li key={index}>{measures[index]} {ingred}</li>

      ))
    }
    
   </ul>
   <h6 className='ingredient'>Method:</h6><p>{receipe.strInstructions}</p>
   </Col>

   <Col>
   <img src={`${receipe.strMealThumb}`} style={{ backgroundSize: "cover", height: "589px", width: "681px",float:"right",marginTop:"20px" }} />
   </Col>
   </Row>
</Container>
   
</>
  )
}

export default ReceipeDetail