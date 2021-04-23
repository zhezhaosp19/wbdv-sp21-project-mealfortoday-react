import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/cookie/register";
import Login from "./components/cookie/login";
import SearchMeals from "./components/search/search_meal";
import MealDetails from "./components/details/meal_details";
import UpdateProfile from "./components/cookie/update-profile";
import Footer from "./components/partials/footer";
import CreateRecipe from "./components/create-recipe";
import Profile from "./components/cookie/profile";
import "./App.css"

function App() {
  return (
      <div className="page-container ">
          <div className="wrapper">
            <BrowserRouter>
              <div className="content">
                <Route
                    exact={true}
                    path={["/"]}
                    component={Home}>
                </Route>
                <Route
                    exact={true}
                    path={["/search", "/search/:title"]}>
                  <SearchMeals/>
                </Route>
                <Route
                    exact={true}
                    path="/register"
                    component={Register}>
                </Route>
                <Route
                    exact={true}
                    path="/login"
                    component={Login}>
                </Route>
                <Route
                    exact={true}
                    path="/update-profile"
                    component={UpdateProfile}>
                </Route>
                <Route path="/:searchTitle/details/:idMeal" exact={true}>
                  <MealDetails/>
                </Route>
                <Route path="/create" exact={true}>
                  <CreateRecipe/>
                </Route>
                <Route path="/profile"
                       exact={true}
                       component={Profile}>
                </Route>
              </div>

            </BrowserRouter>
            {/*<Footer/>*/}
          </div>

      </div>
  );
}

export default App;
