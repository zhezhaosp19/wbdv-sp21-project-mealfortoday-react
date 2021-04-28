const FAVORITE_URL = "http://localhost:4000/api/favorites"
const USERS_URL = "http://localhost:4000/api/users"

// const FAVORITE_URL = "https://mealfortoday.herokuapp.com/api/favorites"
// const USERS_URL = "https://mealfortoday.herokuapp.com/api/users"

const addFavorite = (info) =>
    fetch(FAVORITE_URL, {
        method: 'POST',
        body: JSON.stringify(info),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

// const addFavoriteToUser = (username, mealId) =>
//     fetch(`${FAVORITE_URL}/${username}`, {
//         method: 'POST',
//         body: JSON.stringify(mealId),
//         headers: {
//             'content-type': 'application/json'
//         }
//     }).then(response => response.json())


const findAllUsersForAFavorite = (mealId) => {
    fetch(`${FAVORITE_URL}/${mealId}`)
        .then(response => response.json())
}

const findAllFavoritesForAUser = (username) => {
    fetch(`${FAVORITE_URL}/${username}`)
        .then(response => response.json())
}

const findAllFavorites = () => {
    fetch(FAVORITE_URL)
        .then(response => response.json())
}

const findFavoriteForUserAndMealID = (username, mealId) => {
    fetch(`${FAVORITE_URL}/${mealId}/${username}`)
        .then(response => response.json())
}

export default {
    addFavorite,
    // addFavoriteToUser,
    findAllUsersForAFavorite,
    findAllFavoritesForAUser,
    findAllFavorites,
    findFavoriteForUserAndMealID
}