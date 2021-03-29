import React from 'react'
import {Link} from "react-router-dom";

const Home = () => {
  return (
      <div className="container-fluid">
        <h1>Home</h1>
        <Link to={"/search"}>
          Search
        </Link>
      </div>
  )
}

export default Home