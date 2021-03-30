import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import SearchMeals from "./components/search/search_meal";
import MealDetails from "./components/meal_details";
import Login from "./components/cookie/login";
import ProfilePage from "./components/cookie/profile-page";

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
          <Route path="/details/:idMeal" exact={true}>
              <MealDetails/>
          </Route>
        <Route path="/login" exact={true}>
            <Login/>
        </Route>

        <Route path="/profile" exact={true}>
            <ProfilePage/>
        </Route>

        </BrowserRouter>
      </div>
  );
}

export default App;
