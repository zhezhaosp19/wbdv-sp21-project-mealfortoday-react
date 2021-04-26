import React from 'react'
import {findAllRecipes} from "../../services/recipes-service";
import {Link} from "react-router-dom";

class RecipeTable extends React.Component {
    // constructor(props) {
    //     super(props)
    //     console.log(props)
    // }
    state = {
        recipes: [],
        recipeName: ""
    }
    componentDidMount = () =>
         findAllRecipes()
            .then(res => {
                this.setState({
                    recipes: res})
                console.log(JSON.stringify(this.state.recipes))

            })

    render() {
        return(
            <div className="container">
                <h2>All Recipes Table</h2>
                <table className="table table-striped">
                    <tbody>
                    <tr>
                        <th>Recipe Name</th>
                        <th className="d-none d-md-table-cell">Created by</th>
                        <th className="float-right">
                            <i className="btn fas fa-trash"/>
                        </th>
                    </tr>
                    {
                        this.state.recipes.map((recipe) => {
                                return recipe.strMeal
                            })
                    }
                    </tbody>
                </table>

            </div>
        )
    }
}
export default RecipeTable