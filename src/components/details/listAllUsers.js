import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import userService from "../../services/users-service"

const UsersList = () => {

  const [users, setUsers] = useState([])
  useEffect(() => {
    userService.findAllUsers()
    .then((users) => {
      setUsers(users)
    })
  }, [])

  return(
      <div >
        <div className="list-group">
          {
            users.map((user) => {
              return(
                  <>
                      <Link
                          to={`/profile/${user.username}`}
                          className="list-group-item">
                        {user.username}
                      </Link>
                  </>
              )
            })
          }
        </div>
      </div>
  )
}

export default UsersList;