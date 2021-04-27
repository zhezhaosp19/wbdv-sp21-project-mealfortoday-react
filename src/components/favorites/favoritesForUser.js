import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"

const FavoritesForUser = () => {
  const {username} = useParams()

  return (
    <>
      <h1>Favorites For {username}</h1>
    </>
  )
}

export default FavoritesForUser