const API_URL = "localhost:8080/api"
const PROFILE_URL = "localhost:8080/api/profile"

export const createUser = (user) =>
    fetch(PROFILE_URL, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export default {
    createUser
}