import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import mealsService from '../services/meals-service'
import Header from "./partials/header";

const MealDetails = () => {
  const history = useHistory()
  const [meal, setMeal] = useState({})
  const {idMeal} = useParams();

  useEffect(() => {
    findMealById()
  }, [])

  const findMealById = () => {
    mealsService.findMealById(idMeal)
    .then((meal) => setMeal(meal.meals[0]))
  }

  const showBriefInfo = (meal) => {
    return (
      <ul className="briefInfo">
        {meal.strArea && <li>Area: {meal.strArea}</li>}
        {meal.strCategory && <li>Category: {meal.strCategory}</li>}
        {meal.strYoutube &&
          <li>
            <a href={`${meal.strYoutube}`}>YouTube Tutorial</a>
          </li>
        }
      </ul>
    )
  }

  const listAllIngredients = (meal) => {
    return (
      <ul className="ingredients">
        {meal.strIngredient1 !== "" && <li>{meal.strIngredient1}, {meal.strMeasure1}</li>}
        {meal.strIngredient2 !== "" && <li>{meal.strIngredient2}, {meal.strMeasure2}</li>}
        {meal.strIngredient3 !== "" && <li>{meal.strIngredient3}, {meal.strMeasure3}</li>}
        {meal.strIngredient4 !== "" && <li>{meal.strIngredient4}, {meal.strMeasure4}</li>}
        {meal.strIngredient5 !== "" && <li>{meal.strIngredient5}, {meal.strMeasure5}</li>}
        {meal.strIngredient6 !== "" && <li>{meal.strIngredient6}, {meal.strMeasure6}</li>}
        {meal.strIngredient7 !== "" && <li>{meal.strIngredient7}, {meal.strMeasure7}</li>}
        {meal.strIngredient8 !== "" && <li>{meal.strIngredient8}, {meal.strMeasure8}</li>}
        {meal.strIngredient9 !== "" && <li>{meal.strIngredient9}, {meal.strMeasure9}</li>}
        {meal.strIngredient10 !== "" && <li>{meal.strIngredient10}, {meal.strMeasure10}</li>}
        {meal.strIngredient11 !== "" && <li>{meal.strIngredient11}, {meal.strMeasure11}</li>}
        {meal.strIngredient12 !== "" && <li>{meal.strIngredient12}, {meal.strMeasure12}</li>}
        {meal.strIngredient13 !== "" && <li>{meal.strIngredient13}, {meal.strMeasure13}</li>}
        {meal.strIngredient14 !== "" && <li>{meal.strIngredient14}, {meal.strMeasure14}</li>}
        {meal.strIngredient15 !== "" && <li>{meal.strIngredient15}, {meal.strMeasure15}</li>}
        {meal.strIngredient16 !== "" && <li>{meal.strIngredient16}, {meal.strMeasure16}</li>}
        {meal.strIngredient17 !== "" && <li>{meal.strIngredient17}, {meal.strMeasure17}</li>}
        {meal.strIngredient18 !== "" && <li>{meal.strIngredient18}, {meal.strMeasure18}</li>}
        {meal.strIngredient19 !== "" && <li>{meal.strIngredient19}, {meal.strMeasure19}</li>}
        {meal.strIngredient20 !== "" && <li>{meal.strIngredient20}, {meal.strMeasure20}</li>}
      </ul>
    )
  }

  const showInstructions = (meal) => {
    return (
      <ol className="instructions">
        {
          meal.strInstructions && meal.strInstructions.split(".")
            .map((step)=>{
              return(
                step &&
                  <>
                    <li>{step}.</li>
                  </>
              )
          })
        }
      </ol>
    )
  }

  return (
    <>
      <Header/>
      <div className="container">
        <button className="btn btn-primary" onClick={()=>{history.goBack()}}>Back</button>
        <h1>{meal.strMeal}</h1>
        <img className="mealThumb" src={meal.strMealThumb} width={500}/>

        {showBriefInfo(meal)}

        <h2>Ingredients</h2>
        {listAllIngredients(meal)}

        <h2>Instructions</h2>
        {showInstructions(meal)}

      </div>
    </>
  )
}

export default MealDetails