const RECIPES_URL = "http://localhost:4000/api/recipes"

export const createRecipe = (strMeal, recipe) => {
    console.log("service" + JSON.stringify(recipe))

    return fetch(`${RECIPES_URL}/${strMeal}`, {
        method: "POST",
        body: JSON.stringify(recipe),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

export const findAllRecipes = () =>
    fetch(RECIPES_URL)
        .then(response => response.json())

export default {
    createRecipe,
    findAllRecipes
}