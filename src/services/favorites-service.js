// const FAVORITE_URL = "http://localhost:4000/api/favorites"
// const USERS_URL = "http://localhost:4000/api/users"
const FAVORITE_URL = "https://mealfortoday.herokuapp.com/api/favorites"
const USERS_URL = "https://mealfortoday.herokuapp.com/api/users"


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


const findUsersForFavorite = (mealId) => {
    fetch(`${USERS_URL}/favorites/${mealId}`)
        .then(response => response.json())
}


export default {
    addFavoriteToMeal,
    addFavoriteToUser,
    findUsersForFavorite
}