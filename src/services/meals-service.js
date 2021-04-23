export const findMealByTitle = (title) =>
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`)
    .then(response => response.json())

const findMealById = (idMeal) =>
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    .then(response => response.json())

const findMealByCategory = (category) =>
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then(response => response.json())

const findAllCategories = () => {
  fetch(`https://https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
  .then(response => response.json())
}

const find10RandomRecipes = () => {
  return fetch(`https://www.themealdb.com/api/json/v2/9973533/randomselection.php/`)
    .then(response =>
      response.json()
    )
}

const findLastedRecipes = () => {
  return fetch(`https://www.themealdb.com/api/json/v2/9973533/latest.php/`)
  .then(response =>
    response.json()
  )
}


export default {
  findMealByTitle,
  findMealById,
  findMealByCategory,
  findAllCategories,
  find10RandomRecipes,
  findLastedRecipes
}