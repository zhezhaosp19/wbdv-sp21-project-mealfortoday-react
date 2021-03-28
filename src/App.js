import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import SearchMeals from "./components/search_meal";
import MealDetails from "./components/details_meal";
import Register from "./components/cookie/register";

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
        </BrowserRouter>
      </div>
  );
}

export default App;
