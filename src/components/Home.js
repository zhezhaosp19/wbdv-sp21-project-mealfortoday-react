import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import Header from "./partials/header";
// import meals from "./recipes";
import './home.css'
import mealsService from "../services/meals-service";
import Footer from "./partials/footer";

const Home = () => {
  const [recipes, setRecipes] = useState({meals:[]});
  const [index, setIndex] = useState(0);
  const [user, setUser] = useState("")

// check whether the user is logged in
  useEffect(() => {
    { user &&
      mealsService.findMealByCategory("Seafood")
      .then(recipes => setRecipes(recipes))
    }
    { !user &&
    mealsService.findMealByTitle("beef")
    .then(recipes => setRecipes(recipes))
    }

    const lastIndex = 9
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, recipes])

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000)
    return () => clearInterval(slider)
  }, [index])

  return (
      <>
        <Header/>
        <div className="container-fluid mt-5">
          {/*<h1>Home</h1>*/}
          {/*  <div>*/}
          {/*      <Link to={"/search"}>*/}
          {/*          Search*/}
          {/*      </Link>*/}
          {/*  </div>*/}
          {/*<div>*/}
          {/*    <Link to={"/register"}>*/}
          {/*        Register*/}
          {/*    </Link>*/}
          {/*</div>*/}

          <section className="section">
            <div className="title">
              <h2>
                <span>/</span> Welcome Holly!
              </h2>
            </div>
            <div className="section-center">
              {
                recipes.meals.slice(0, 10).map((meal, mealIndex) => {
                  const {strMeal, strMealThumb, strInstructions, strArea} = meal;
                  let position = 'nextSlide'
                  if (mealIndex === index) {
                    position = 'activeSlide'
                  }
                  if(mealIndex === index - 1 || (index === 0 &&
                  mealIndex === 10)) {
                    position = 'lastSlide'
                  }

                  return <article className={position}>
                    <Link to={`/${strMeal}/details/${meal.idMeal}`}>
                      <img src={strMealThumb} alt={strMeal} className='recipe-img'/>
                      <h4>{strMeal}</h4>
                    </Link>
                    <p className="title mt-3">{strArea}</p>
                    <p className="text">{strInstructions}</p>

                  </article>
                })
              }
              <button className="prev" onClick={() => setIndex(index - 1)}>
                <i className="fas fa-chevron-circle-left"></i>
              </button>
              <button className="next" onClick={() => setIndex(index + 1)}>
                <i className="fas fa-chevron-circle-right"></i>
              </button>
            </div>
          </section>

        </div>
        <Footer/>
      </>
  )
}

export default Home