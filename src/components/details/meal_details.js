import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import Header from "../partials/header";
import SearchCard from "../search/search_card"
import mealsService from '../../services/meals-service'
import ReviewCard from "./review_card"
import Footer from "../partials/footer";
import "./meal_details.css"
import showBriefInfo from "./showBriefInfo"
import listAllIngredients from "./listAllIngredients"
import showInstructions from "./showInstructions"
import displaySimilarDishes from "./displaySimilarDishes"
import reviews from "./reviews"

const MealDetails = () => {
  const history = useHistory()
  const [meal, setMeal] = useState({})
  const {idMeal, searchTitle} = useParams();
  const [results, setResults] = useState({meals:[]})
  const [similarDishesCount, setSimilarDishesCount] = useState(0)

  useEffect(() => {
    findMealById()
  }, [])

  useEffect(() => {
    mealsService.findMealByTitle(searchTitle)
     .then(results => setResults(results))
     // .then(results => console.log(results.meals))
  }, [searchTitle])

  const findMealById = () => {
    mealsService.findMealById(idMeal)
    .then((meal) => setMeal(meal.meals[0]))
  }

  return (
    <>
      <Header/>
      <div className="container mt-5">
        <button className="btn btn-primary" onClick={()=>{history.goBack()}}>Back</button>
        <h1>{meal.strMeal}</h1>
        <i class="bi bi-star"></i>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
        </svg>
        <img className="mealThumb" src={meal.strMealThumb} width={500}/>

        {showBriefInfo(meal)}

        <h2>Ingredients</h2>
        {listAllIngredients(meal)}

        <h2>Instructions</h2>
        {showInstructions(meal)}

        <h2>Reviews</h2>
        {reviews(meal)}

        <h2>Similar Dishes</h2>
        {displaySimilarDishes(similarDishesCount, results, setSimilarDishesCount, searchTitle, meal)}

        <br/>
        {/*{JSON.stringify(results)}*/}
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

      </div>
    </>
  )
}

export default MealDetails