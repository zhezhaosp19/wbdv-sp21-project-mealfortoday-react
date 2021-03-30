import React from 'react'
import {Link} from "react-router-dom";
import Header from "./partials/header";

const Home = () => {
  return (
      <>
        <Header/>
        <div className="container-fluid mt-5">
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

        </div>
      </>
  )
}

export default Home