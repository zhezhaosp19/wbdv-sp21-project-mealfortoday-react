import React, {useState} from 'react'
import {Link} from "react-router-dom";

const SearchCard = ({meal}) => {

  return (
      <div className="col-3">
        <div className="card mt-5" key={meal.idMeal}>
          <img
              src={meal.strMealThumb}
              className="card-img-top" alt="..."/>
          <div className="card-body">
            {/*<h5 className="card-title">{meal.strMeal}</h5>*/}

            <img src={``}/>
            <Link to={`/details/${meal.idMeal}`}>
              <h5 className="card-title">{meal.strMeal}</h5>
            </Link>
          </div>
        </div>
      </div>
  )
}
export default SearchCard