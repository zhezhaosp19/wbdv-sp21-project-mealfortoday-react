import React, {useEffect, useState} from 'react'
import Header from "../partials/header";
import {Link, useParams} from "react-router-dom";
import userService from "../../services/users-service";

const Profile = () => {
    const {username} = useParams()
    // console.log(username)
    const [currentUser, setCurrentUser] = useState([])
    const [portrait, setPortrait] = useState("")
    useEffect(() => {
            userService.profile()
                .then(currUser => {
                    console.log(currUser)
                    setCurrentUser(currUser)
                    setPortrait(currUser.portrait)
                })
    },[])
    return (
        <>
            <Header/>
            <div className="container profile">

                <div style={{display: 'flex', justifyContent: "space-around", margin: '18px 0px'}}>
                    <div>
                        <img className="image"
                             src={portrait}/>
                    </div>
                    <div>
                        <div style={{display: 'flex', justifyContent: "space-between", width: "150%"}}>
                            {
                                currentUser.username === username &&
                                <h2>{currentUser.username}</h2>
                            }
                            {
                                currentUser.username !== username &&
                                <h2>{username}</h2>
                            }
                            <ul>

                                    {currentUser.username === username &&
                                    <li>
                                    <div className="float-right">

                                        <Link to={`/update-profile/${currentUser.username}`} className="btn edit-profile-button">Edit Profile</Link>

                                    </div>
                                    </li>
                                    }


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

                        {/*<div style={{display: 'flex', marginTop: 20, justifyContent: "space-between", width: "150%"}}>*/}
                        {/*    {currentUser.role === "Chef" &&*/}
                        {/*    <>*/}
                        {/*        <h5>5 posts</h5>*/}
                        {/*    </>*/}
                        {/*    }*/}
                        {/*    <h5>5 followers</h5>*/}
                        {/*    <h5>5 followings</h5>*/}
                        {/*</div>*/}
                        <div>
                            <p style={{fontSize: 20, marginTop: 10}}>{currentUser.bio}</p>
                            {/*<a href="https://www.google.com">https://www.google.com</a>*/}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="cell-box">
                        <div className="form-group row cell">
                            {
                                currentUser.role === "Chef" &&
                                <>


                                    <div className="col-6 each-cell">
                                        Your posts
                                    </div>
                                    <div className="col-6 each-cell">
                                        Your Favorites
                                    </div>
                                </>
                            }
                            {
                                currentUser.role !== "Chef" &&
                                <>
                                    <div className="col-12 each-cell">
                                        Your Favorites
                                    </div>
                                </>
                            }


                        </div>
                    </div>
                </div>


            </div>
        </>

    )
}

export default Profile