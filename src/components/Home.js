import React from 'react'
import {Link} from "react-router-dom";

const Home = () => {
  return (
      <div>
        <h1>Home</h1>
          <div>
              <Link to={"/search"}>
                  Search
              </Link>
          </div>
          <div>
              <Link to={"/register"}>
                  Register
              </Link>
          </div>
          <div>
              <Link to={"/login"}>
                  Log In
              </Link>
          </div>
      </div>
  )
}

export default Home