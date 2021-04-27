import React, {useEffect, useState} from 'react'
import Header from "../partials/header";
import {Link, useParams} from "react-router-dom";
import userService from "../../services/users-service";

const PublicContent = ({currentUser, portrait}) => {
    return(
        // <div>
            <div style={{display: 'flex', justifyContent: "space-around", margin: '18px 0px'}}>
                    <div>
                            <img className="image"
                                src={portrait}/>            
                    </div>
                    <div>
                        <div style={{display: 'flex', justifyContent: "space-between", width: "150%"}}>

                            <h2>{currentUser.username}</h2>

                            <ul>

                                <li>
                                    <div className="float-right">

                                        <Link to={`/update-profile/${currentUser.username}`} className="btn edit-profile-button">Edit Profile</Link>

                                    </div>
                                </li>

                                {currentUser.role === "Chef" && 
                                <li>
                                    <div className="float-right">
                                        <br/>
                                        <Link to={"/create"} className="btn edit-profile-button">Create Recipe</Link>
                                    </div>
                                </li>
                                }

                                {
                                    currentUser.role === "Admin" && 
                                <li>
                                    <div className="float-right">
                                        <br/>
                                        <Link to={"/recipes"} className="btn edit-profile-button">Show All Recipes</Link>
                                    </div>
                                </li>

                                }
                            </ul>

                        </div>
                        <div>
                            <p style={{fontSize: 20, marginTop: 10}}>{currentUser.bio}</p>

                                {
                                    currentUser.gender === "Female" &&
                                    <i className="fas fa-venus fa-2x"/>
                                }
                                {
                                    currentUser.gender === "Male" &&
                                    <i className="fas fa-mars fa-2x"/>
                                }
                            
                        </div>
                    </div>
                </div>


        // </div>
    )


}

export default PublicContent