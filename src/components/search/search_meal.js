import React, {useState, useEffect} from 'react'
import mealsService from '../../services/meals-service'
import {Link, useParams, useHistory} from "react-router-dom";
import Header from "../partials/header";
import SearchCard from "./search_card";
import FilterBar from "./filter/filterBar";
import Footer from "../partials/footer";
import "./search.css"

const SearchMeals = () => {
  const {title} = useParams()
  const [searchTitle, setSearchTitle] = useState("")
  const [results, setResults] = useState({meals: []})

  const history = useHistory()

  useEffect(() => {
    setSearchTitle(title)
    if (title) {
      mealsService.findMealByTitle(title)
      .then(results => setResults(results))
      // .then(results => console.log(results.meals))
    }

  }, [title])

  return (
      <>
        <Header/>
        <div>
          <div className="container-fluid mt-5">

            <h1>Search Meals</h1>

            <input
                onChange={(event) => {
                  setSearchTitle(event.target.value)
                }}
                className="form-control"
                value={searchTitle}/>
            <br/>
            <button
                onClick={() => {
                  history.push(`/search/${searchTitle}`)
                }}
                className="btn btn-primary btn-block">
              Search
            </button>
            <br/>

            <div className="row">

              {/*{*/}
              {/*  results && results.meals && results.meals.length !== 0 &&*/}
              {/*  <div className="col-2">*/}
              {/*    <br/>*/}
              {/*    <br/>*/}
              {/*    <FilterBar setCategory={setSearchCategory}/>*/}
              {/*    {updateResult}*/}
              {/*  </div>*/}
              {/*}*/}

              <div className="col-12">
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
                        <SearchCard meal={meal} searchTitle={searchTitle}/>
                    )
                  }
                  {
                    !results.meals &&
                    <h2>No recipe found...</h2>
                  }
                </ul>
              </div>
            </div>
          </div>

        </div>
        {/*<Footer/>*/}
      </>
  )
}

export default SearchMeals