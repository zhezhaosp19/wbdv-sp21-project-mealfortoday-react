export const findMealByTitle = (title) =>
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`)
    .then(response => response.json())

export const findMealById = (idMeal) =>
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    .then(response => response.json())

export const findMealByCategory = (category) =>
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then(response => response.json())

export default {
  findMealByTitle,
  findMealById,
  findMealByCategory
}