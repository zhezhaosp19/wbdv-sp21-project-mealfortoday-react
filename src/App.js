import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/cookie/register";
import Login from "./components/cookie/login";
import SearchMeals from "./components/search/search_meal";
import MealDetails from "./components/details/meal_details";
import ProfilePage from "./components/cookie/profile-page";
import Footer from "./components/partials/footer";

function App() {
  return (
      <div className="page-container">
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
                    path="/profile"
                    component={ProfilePage}>
                </Route>
                <Route path="/:searchTitle/details/:idMeal" exact={true}>
                  <MealDetails/>
                </Route>
              </div>

            </BrowserRouter>
          </div>
        {/*<Footer/>*/}
      </div>
  );
}

export default App;
