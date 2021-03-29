import React, {useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import mealsService from '../services/meals-service'

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
  )
}

export default MealDetails