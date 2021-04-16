const USER_URL = "http://localhost:4000/api/users"

const register = (user) =>
    // console.log(user)
    fetch(`${USER_URL}/register`, {
        method: 'POST',
        body: JSON.stringify(user),
        credentials: "include",
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())


const profile = () =>
    fetch(`${USER_URL}/profile`, {
        method: 'POST',
        credentials: "include"
    }).then(response => response.json())

const logout = () =>
    fetch(`${USER_URL}/logout`, {
        method: 'POST',
        credentials: "include"
    })

export default {
    register,
    profile,
    logout
}