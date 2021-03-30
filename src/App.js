import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/cookie/register";
import Login from "./components/cookie/login";
import SearchMeals from "./components/search/search_meal";
import MealDetails from "./components/meal_details";

function App() {
  return (
      <div className="container-fluid">
        <BrowserRouter>
          <Route
              exact={true}
              path={["/"]}>
            <Home/>
          </Route>
          <Route
              exact={true}
              path={["/search", "/search/:title"]}>
            <SearchMeals/>
          </Route>
            <Route
                exact={true}
                path={["/register"]}>
                <Register/>
            </Route>
            <Route
                exact={true}
                path={["/login"]}>
                <Login/>
            </Route>
          <Route path="/details/:idMeal" exact={true}>
              <MealDetails/>
          </Route>
        </BrowserRouter>
      </div>
  );
}

export default App;
