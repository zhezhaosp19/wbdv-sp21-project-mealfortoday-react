import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import Header from "./partials/header";

const CreateRecipe = () => {
    const [recipe, setRecipe] = useState({
        name: '',
        area:'',
        category:'',
        ingredients: [],
        instructions: []

    })
    return (
        <>
            <Header/>
            <div className="container">
                <h2>Create Recipe</h2>

            <br/>
            <div className="form-group row">
                <label htmlFor="name" className="col-sm-2 col-form-label">Recipe Name</label>
                <div className="col-sm-10">
                    <input
                           value={""}
                           type="text" name="username" id="username" className="form-control"
                           placeholder="recipe name"/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="area" className="col-sm-2 col-form-label">Area</label>
                <div className="col-sm-10">
                    <input
                           //value={""}
                           type="password" name="password" id="password" className="form-control"
                           placeholder="area"/>
                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label"/>
                <div className="col-sm-12">
                    <Link to="/create">
                        <button className="btn btn-success form-control"
                                >
                            Create
                        </button>
                    </Link>

                </div>
            </div>

            <div className="form-group row">
                <label className="col-sm-2 col-form-label"/>
                <div className="col-sm-12">
                    <Link to="/profile">
                        <button className="btn btn-danger form-control"
                        >
                            Cancel
                        </button>
                    </Link>

                </div>
            </div>

            </div>
        </>
    )
}

export default CreateRecipe