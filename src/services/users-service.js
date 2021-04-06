const PROFILE_URL = "http://localhost:8080/api/profile"
const REGISTER_URL = "http://localhost:8080/api/register"

export const createUsers = (user) =>
    fetch(REGISTER_URL, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export default {
    createUsers
}