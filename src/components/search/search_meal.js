import React, {useState, useEffect} from 'react'
import mealsService from '../../services/meals-service'
import {Link, useParams, useHistory} from "react-router-dom";
import Header from "../partials/navbar";
import SearchCard from "./search_card";

const SearchMeals = () => {
  const {title} = useParams()
  const [searchTitle, setSearchTitle] = useState("")
  const [results, setResults] = useState({meals:[]})
  const history = useHistory()
  useEffect(() => {
    setSearchTitle(title)
    if(title) {
      mealsService.findMealByTitle(title)
       .then(results => setResults(results))
       // .then(results => console.log(results.meals))
    }
  }, [title])
  return(
      <>
        <Header/>
          <div className="container-fluid">
            <h1>Search Meals</h1>
            <input
                onChange={(event) => {
                  setSearchTitle(event.target.value)
                }}
                className="form-control"
                value={searchTitle}/>
            <button
                onClick={() => {history.push(`/search/${searchTitle}`)}}
                className="btn btn-primary btn-block">
              Search
            </button>
            <ul className="row">
              {
                // results && results.meals && results.meals.map(meal =>
                //     <li className="list-group-item" key={meal.idMeal}>
                //       <Link to={`/details/${meal.idMeal}`}>
                //         {meal.strMeal}
                //       </Link>
                //     </li>
                // )
                results && results.meals && results.meals.map(meal =>
                  <SearchCard meal={meal}/>
                )
              }
            </ul>
          </div>
        </>
  )
}

export default SearchMeals