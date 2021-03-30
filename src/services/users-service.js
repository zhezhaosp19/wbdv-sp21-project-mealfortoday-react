const PROFILE_URL = "http://localhost:8080/api/profile"
const REGISTER_URL = "http://localhost:8080/api/register"

export const createCourse = (user, username, password, email, role, birthday) =>
    fetch(`${REGISTER_URL}/${username}/${password}/${email}/${role}/${birthday}`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export default {
    createCourse
}