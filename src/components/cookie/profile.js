import React, {useEffect, useState} from 'react'
import Header from "../partials/header";
import {Link, useParams} from "react-router-dom";
import userService from "../../services/users-service";

const Profile = () => {
    const {username} = useParams()
    // console.log(username)
    const [currentUser, setCurrentUser] = useState([])
    useEffect(() => {
            userService.profile()
                .then(currUser => {
                    setCurrentUser(currUser)
                })
    },[])
    return (
        <>
            <Header/>
            <div className="container profile">

                <div style={{display: 'flex', justifyContent: "space-around", margin: '18px 0px'}}>
                    <div>
                        <img className="image"
                             src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"/>
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

                            {currentUser.username === username &&
                                <div className="float-right">
                                    <Link to={`/update-profile/${currentUser.username}`} className="btn edit-profile-button">Edit Profile</Link>
                                </div>
                            }
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