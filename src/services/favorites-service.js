const FAVORITE_URL = "http://localhost:4000/api/favorites"

const addFavoriteToMeal = (username, mealId) => 
    fetch(`${FAVORITE_URL}/${mealId}`, {
        method: 'POST',
        body: JSON.stringify(username),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

const addFavoriteToUser = (username, mealId) => 
    fetch(`${FAVORITE_URL}/${username}`, {
        method: 'POST',
        body: JSON.stringify(mealId),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())



export default {
    addFavoriteToMeal,
    addFavoriteToUser
}