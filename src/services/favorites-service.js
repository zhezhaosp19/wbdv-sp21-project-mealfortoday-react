const FAVORITE_URL = "http://localhost:4000/api/favorites"
const USERS_URL = "http://localhost:4000/api/users"

const addFavoriteToMeal = (username, mealId) =>
    fetch(`${FAVORITE_URL}/users/favorites/${mealId}`, {
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

const findFavoritesForUser = (username) => {
    fetch(`${FAVORITE_URL}/user/${username}`)
        .then(response => response.json())
}

const findUsersForFavorite = (mealId) => {
    fetch(`${USERS_URL}/favorites/${mealId}`)
        .then(response => response.json())
}


export default {
    addFavoriteToMeal,
    addFavoriteToUser,
    findFavoritesForUser,
    findUsersForFavorite
}