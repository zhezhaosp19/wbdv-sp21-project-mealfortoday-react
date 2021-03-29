import React, {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import mealsService from '../services/meals-service'
import Header from "./partials/header";


const MealDetails = () => {
  const[meal, setMeal] = useState({})
  const {idMeal} = useParams();

  useEffect(() => {
    findMealById()
  }, [])

  const findMealById = () => {
    mealsService.findMealById(idMeal)
    .then((meal) => setMeal(meal))
  }

  return (
<<<<<<< HEAD:src/components/details_meal.js
      <>
        <Header/>
        <div className="container-fluid  mt-5">
          <h1>{meal.strMeal}</h1>

          <img src={meal.strMealThumb}/>
          <h2>Meal:</h2>
          <p>
            {meal.strInstructions}
          </p>
          <h2>strTags:</h2>
          <ul className="list-group">
            {
              meal.strTags && meal.strTags.split(",").map(tag =>
                  <li className="list-group-item">
                    {tag}
                  </li>)
            }
          </ul>
          {JSON.stringify(meal)}
        </div>
      </>
=======
      <div className="container-fluid">
        <h1>{idMeal}</h1>

        <img src={meal.strMealThumb}/>
        <p>
          {meal.strInstructions}
        </p>
        <ul className="list-group">
          {
            meal.strTags && meal.strTags.split(",").map(tag =>
                <li className="list-group-item">
                  {tag}
                </li>)
          }
        </ul>
        {JSON.stringify(meal)}
      </div>
>>>>>>> 41426260c798b36ed47867ee17870026920e6e4b:src/components/meal_details.js
  )
}

export default MealDetails