import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ReceipeDetail() {
  const { mid } = useParams()
  const [receipe, setreceipe] = useState([])
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mid}`)
      .then(response => response.json())
      .then(data => {
        setreceipe(data.meals[0])
      })
  }, [mid])
  return (
    <>
      <div className='recipe-card'>
        <div style={{ "background": "url(https://d2gk7xgygi98cy.cloudfront.net/6267-3-large.jpg)", "backgroundSize": "cover", "height": "150px" }}></div>
        <div className="recipe-card__body">
          <h1 className="recipe-card__heading">{receipe.strMeal}</h1>
          <h2 className="recipe-card__subhead">Crunchy around the edges, softer in the center, these oatmeal cookies feature the nutty taste and nubbly texture of oats. </h2>

          <ul className="recipe-card__nav">
            <li>
              <h3 className="active">Ingredients</h3>
            </li>
            <li>
              <h3>Method</h3>
            </li>
          </ul>



          <ul className="recipe-card__ingredients">
            <li>&frac14; cup unsalted butter</li>
            <li>&frac14; cup vegetable shortening</li>
            <li>&frac12; cup light brown sugar</li>
            <li>&frac14; cup granulated sugar</li>
            <li>1 teaspoon vanilla extract</li>
            <li>1 &frac14; teaspoons ground cinnamon</li>
            <li>&#8539; teaspoon ground nutmeg</li>
            <li>1/2 teaspoon salt</li>
            <li>1 teaspoon cider or white vinegar*</li>
            <li>1 large egg</li>
            <li>&frac12; teaspoon baking soda</li>
            <li>&frac34; cup All-Purpose Flour</li>
            <li>1 &frac12; cups rolled oats</li>
            <li>1 cup golden raisins, optional</li>
          </ul>
        </div>

      </div>
      {
        
       
        
      }

    </>

  )
}

export default ReceipeDetail