const PROFILE_URL = "localhost:8080/api/profile"

export const createCourse = (user) =>
    fetch(PROFILE_URL, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())