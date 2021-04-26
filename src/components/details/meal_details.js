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
import userService from "../../services/users-service"
import Profile from "../cookie/profile"
import mealService from "../../services/meals-service"
import favoritesService from "../../services/favorites-service"

const MealDetails = () => {
  const history = useHistory()
  const [meal, setMeal] = useState({})
  const {idMeal, searchTitle} = useParams();
  const [results, setResults] = useState({meals:[]})
  const [isFavorite, setIsFavorite] = useState(false)
  const [similarDishesCount, setSimilarDishesCount] = useState(0)
  const [currentUser, setCurrentUser] = useState([])
  const [postByUser, setPostByUser] = useState([])

//  useEffect(() => {
//    mealService.findCreatedUserForRecipe()
//      .then(user => {
//          setPostByUser(user)
//      })
//  },[])

  useEffect(() => {
    userService.profile()
      .then(currUser => {
        setCurrentUser(currUser)
      })
  },[])

  useEffect(() => {
     findMealById()
    findMealByIdFromLocal()
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

  const findMealByIdFromLocal = () => {
    mealsService.findMealByIdFromLocal(idMeal)
    .then((meal) => setMeal(meal[0]))
  }


  const setFavorite = (set) => {
    if (set) {
      setIsFavorite(true)
      favoritesService.addFavoriteToMeal(currentUser.username, idMeal)
      .then()
      favoritesService.addFavoriteToUser(currentUser.username, idMeal).then()
    } else {
      setIsFavorite(false)
    }
  }

  return (
    <>
      <Header/>
      <div className="container mt-5">
        <button className="btn btn-primary" onClick={()=>{history.goBack()}}>Back</button>
        <h1>{meal.strMeal}</h1>
        <div>
          Viewed by
          <Link to={`/profile/${currentUser.username}`}> {currentUser.username}</Link>
          <br/>
          Posted by
          <Link to={`/profile/${currentUser.username}`}> </Link>
        </div>
        {!isFavorite && <i onClick={() => setFavorite(true)} className="far fa-star"></i>}
        {isFavorite && <i onClick={() => setFavorite(false)} className="fas fa-star"></i>}

        <img className="mealThumb" src={meal.strMealThumb} width={500}/>

        {showBriefInfo(meal)}

        <h2>Ingredients</h2>
        {listAllIngredients(meal)}

        <h2>Instructions</h2>
        {showInstructions(meal)}

        {/*<h2>Reviews</h2>*/}
        {/*{reviews(meal)}*/}

        {/*<h2>Similar Dishes</h2>*/}
        {/*{displaySimilarDishes(similarDishesCount, results, setSimilarDishesCount, searchTitle, meal)}*/}

        <br/>
        {JSON.stringify(results)}
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