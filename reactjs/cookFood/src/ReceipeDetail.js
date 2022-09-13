import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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


const Toggle1 = ()=>{
       setShowMethod()
}
const Toggle2 = ()=>{
  setShowMethod(true)
}

  return (
    <>
      <div className='recipe-card'>
        {/* <div style={{ "background": "url(https://d2gk7xgygi98cy.cloudfront.net/6267-3-large.jpg)", "backgroundSize": "cover", "height": "150px" }}></div> */}
        <div><img src={`${receipe.strMealThumb}`} style={{ backgroundSize: "cover", height: "430px", width: "-webkit-fill-available" }} /></div>
        <div className="recipe-card__body">
          <h1 className="recipe-card__heading">{receipe.strMeal}</h1>
          <h2 className="recipe-card__subhead"></h2>

          <ul className="recipe-card__nav">
            <li>
              <h3 className="" onClick={Toggle1}>Ingredients</h3>
              {showmethod ?null
              :
              <ul className="recipe-card__ingredients">
              {/*
                Object.keys(receipe)
                  .filter(check => check.includes("Ingredient"))
                  .map((obj, key) => {
                    console.log(receipe[obj])
                    setIngredients(receipe[obj]);
                  })
            } */
                ingredients.map((ingred, index) => (
                  <li key={index}>{measures[index]} {ingred}</li>
  
                ))
              }
            </ul>  
            
            
            }
            </li>
            <li>
              <h3 onClick={Toggle2}>Method</h3>
              { showmethod ? <p>{receipe.strInstructions}</p> : null }
            </li>
          </ul>



          {/* <ul className="recipe-card__ingredients">
            <li>{receipe.strMeasure1} {receipe.strIngredient1}</li>
            <li>{receipe.strMeasure2} {receipe.strIngredient2}</li>
            <li>{receipe.strMeasure3} {receipe.strIngredient3}</li>
            <li>{receipe.strMeasure4} {receipe.strIngredient4}</li>
            <li>{receipe.strMeasure1} {receipe.strIngredient1}</li>
            <li>1 &frac14;{receipe.strIngredient1}</li>
            <li>&#8539; teaspoon ground nutmeg</li>
            <li>1/2 teaspoon salt</li>
            <li>1 teaspoon cider or white vinegar*</li>
            <li>1 large egg</li>
            <li>&frac12; teaspoon baking soda</li>
            <li>&frac34; cup All-Purpose Flour</li>
            <li>1 &frac12; cups rolled oats</li>
            <li>1 cup golden raisins, optional</li>
          </ul> */}

         
          



            {console.log(ingredients,)}
            {console.log(measures,'vdiyaaa')}
        </div>
      </div>
    </>

  )
}

export default ReceipeDetail