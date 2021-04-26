import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import favoritesService from "../../services/favorites-service"

const UsersForFavorites = () => {
  const {mealId} = useParams()
  const [users, setUsers] = useState([])

  useEffect(() => {
    favoritesService.findUsersForFavorite(mealId)
  }, [])

  return (
    <>
      <h1>Users For Favorite page</h1>
      {mealId}
    </>
  )
}

export default UsersForFavorites