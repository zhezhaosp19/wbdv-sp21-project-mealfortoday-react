import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import SearchMeals from "./components/search/search_meal";
import MealDetails from "./components/details_meal";

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
        </BrowserRouter>
      </div>
  );
}

export default App;
