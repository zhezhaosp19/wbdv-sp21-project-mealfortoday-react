import React, {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import mealsService from '../services/meals-service'
import Header from "./partials/header";


const MealDetails = () => {
  const[meal, setMeal] = useState({})
  const {idMeal} = useParams();

  useEffect(() => {
    mealsService.findMovieById(idMeal)
    .then(meal => setMeal(meal))
  })

  return (
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
  )
}

export default MealDetails