const PROFILE_URL = "http://localhost:8080/api/profile"
const REGISTER_URL = "http://localhost:8080/api/register"
const LOGOUT_URL = "http://localhost:8080/api/logout"

export const register = (user) =>
    fetch(REGISTER_URL, {
        method: 'POST',
        body: JSON.stringify(user),
        credentials: "include",
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const profile = () =>
    fetch(PROFILE_URL, {
        method: 'POST',
        credentials: "include"
    }).then(response => response.json())

export const logout = () =>
    fetch(LOGOUT_URL, {
        method: 'POST',
        credentials: "include"
    })

export default {
    register,
    profile,
    logout
}