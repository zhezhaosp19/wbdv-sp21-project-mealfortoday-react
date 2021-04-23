import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import Header from "../partials/header";
import SearchCard from "../search/search_card"
import mealsService from '../../services/meals-service'
import ReviewCard from "./review-card"
import Footer from "../partials/footer";
import "./meal-details.css"

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
    // TODO: will improve later
      <ul className="ingredients">
        {meal.strIngredient1 !== null && meal.strIngredient1 !== "" && <li>{meal.strIngredient1}, {meal.strMeasure1}</li>}
        {meal.strIngredient2 !== null && meal.strIngredient2 !== "" && <li>{meal.strIngredient2}, {meal.strMeasure2}</li>}
        {meal.strIngredient3 !== null && meal.strIngredient3 !== "" && <li>{meal.strIngredient3}, {meal.strMeasure3}</li>}
        {meal.strIngredient4 !== null && meal.strIngredient4 !== "" && <li>{meal.strIngredient4}, {meal.strMeasure4}</li>}
        {meal.strIngredient5 !== null && meal.strIngredient5 !== "" && <li>{meal.strIngredient5}, {meal.strMeasure5}</li>}
        {meal.strIngredient6 !== null && meal.strIngredient6 !== "" && <li>{meal.strIngredient6}, {meal.strMeasure6}</li>}
        {meal.strIngredient7 !== null && meal.strIngredient7 !== "" && <li>{meal.strIngredient7}, {meal.strMeasure7}</li>}
        {meal.strIngredient8 !== null && meal.strIngredient8 !== "" && <li>{meal.strIngredient8}, {meal.strMeasure8}</li>}
        {meal.strIngredient9 !== null && meal.strIngredient9 !== "" && <li>{meal.strIngredient9}, {meal.strMeasure9}</li>}
        {meal.strIngredient10 !== null && meal.strIngredient10 !== "" && <li>{meal.strIngredient10}, {meal.strMeasure10}</li>}
        {meal.strIngredient11 !== null && meal.strIngredient11 !== "" && <li>{meal.strIngredient11}, {meal.strMeasure11}</li>}
        {meal.strIngredient12 !== null && meal.strIngredient12 !== "" && <li>{meal.strIngredient12}, {meal.strMeasure12}</li>}
        {meal.strIngredient13 !== null && meal.strIngredient13 !== "" && <li>{meal.strIngredient13}, {meal.strMeasure13}</li>}
        {meal.strIngredient14 !== null && meal.strIngredient14 !== "" && <li>{meal.strIngredient14}, {meal.strMeasure14}</li>}
        {meal.strIngredient15 !== null && meal.strIngredient15 !== "" && <li>{meal.strIngredient15}, {meal.strMeasure15}</li>}
        {meal.strIngredient16 !== null && meal.strIngredient16 !== "" && <li>{meal.strIngredient16}, {meal.strMeasure16}</li>}
        {meal.strIngredient17 !== null && meal.strIngredient17 !== "" && <li>{meal.strIngredient17}, {meal.strMeasure17}</li>}
        {meal.strIngredient18 !== null && meal.strIngredient18 !== "" && <li>{meal.strIngredient18}, {meal.strMeasure18}</li>}
        {meal.strIngredient19 !== null && meal.strIngredient19 !== "" && <li>{meal.strIngredient19}, {meal.strMeasure19}</li>}
        {meal.strIngredient20 !== null && meal.strIngredient20 !== "" && <li>{meal.strIngredient20}, {meal.strMeasure20}</li>}
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

  const displaySimilarDishes = (similarDishesCount, results, setSimilarDishesCount, searchTitle) => {
    return (
      <ul className="row">
        {
          similarDishesCount <= 4 && results && results.meals && results.meals.map(singleMeal =>
            {
              <SearchCard singleMeal={singleMeal} searchTitle={searchTitle}/>
              setSimilarDishesCount(similarDishesCount+1)
              console.log(similarDishesCount)
              console.log(searchTitle)
            }
          )
        }
        {/*{similarDishesCount}*/}
        <SearchCard meal={meal} searchTitle={searchTitle}/>
      </ul>
    )
  }

  const reviews = (meal) => {
    return (
      <ul className="list-group">
          <li className="list-group-item">
            <div>
              <div>
                {/*img src="http://www.pngall.com/?p=51505" width="10%"/*/}
                username1
              </div>
              <p>
                Review1: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
              </p>
              <p>
                <img src={meal.strMealThumb} width="10%"/>
              </p>
            </div>
            {/*<ReviewCard meal={meal}/>*/}
          </li>
          <li className="list-group-item">
            <div>
              <div>

                username2
              </div>
              <p>
                Review2: Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
            {/*<ReviewCard meal={meal}/>*/}
          </li>
          <li className="list-group-item">
              <div>
                <div>

                  username3
                </div>
                <p>
                  Review3: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </div>
            {/*<ReviewCard meal={meal}/>*/}
          </li>
      </ul>
    )
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

        <h2>Comments</h2>
        {reviews(meal)}

        <h2>Similar Dishes</h2>
        {displaySimilarDishes(similarDishesCount, results, setSimilarDishesCount, searchTitle)}

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