import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ReceipeDetail() {
  const { mid } = useParams()
  const [receipe, setreceipe] = useState([])
  const[ingred,setIngred] = useState([])
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mid}`)
      .then(response => response.json())
      .then(data => {
        setreceipe(data.meals)
      })
  
  }, [mid])


 
  return (
    <>
      <div className='recipe-card'>
        <div style={{ "background": "url(https://d2gk7xgygi98cy.cloudfront.net/6267-3-large.jpg)", "backgroundSize": "cover", "height": "150px" }}></div>
        <div className="recipe-card__body">
          <h1 className="recipe-card__heading">{receipe.strMeal}</h1>
          <h2 className="recipe-card__subhead">{receipe.strInstructions} </h2>

          <ul className="recipe-card__nav">
            <li>
              <h3 className="active">Ingredients</h3>
            </li>
            <li>
              <h3>Method</h3>
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

          <ul>
          {/* {Object.keys(receipe).map((value, index) => {
        return (
          <div key={index}>
          if(value == )
               <h2>{value}</h2>
            {console.log(index,value)}
             
            <hr />
          </div>
        );
      })} */
        console.log(Object.enteries(receipe))
      }
     
          </ul>
        </div>

      </div>

    </>

  )
}

export default ReceipeDetail