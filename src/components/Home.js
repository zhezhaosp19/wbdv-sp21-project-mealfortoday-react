import React from 'react'
import {Link} from "react-router-dom";
import Header from "./partials/header";

const Home = () => {
  return (
      <>
        <Header/>
        <div className="container-fluid mt-5">
          <h1>Home</h1>
          <Link to={"/search"}>
            Search
          </Link>
            <Link to={"/register"}>
                Register
            </Link>
        </div>
      </>
  )
}

export default Home