import React, {useEffect, useState} from 'react'
import Header from "../partials/header";
import {Link, useParams} from "react-router-dom";
import userService from "../../services/users-service";

const Profile = () => {
    const {username} = useParams()
    const [profile, setProfile] = useState([])
    const [currentUser, setCurrentUser] = useState('')
    useEffect(() => {
            userService.profile()
                .then(profile => {
                    setProfile(profile)
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
                            <h2>{profile.username}</h2>
                            <div className="float-right">
                                <Link to={`/update-profile/${profile.username}`} className="btn edit-profile-button">Edit Profile</Link>
                            </div>

                        </div>

                        <div style={{display: 'flex', marginTop: 20, justifyContent: "space-between", width: "150%"}}>
                            {profile.role === "Chef" &&
                                <>
                                    <h5>5 posts</h5>
                                </>
                            }
                            <h5>5 followers</h5>
                            <h5>5 followings</h5>
                        </div>
                        <div>
                            <p style={{fontSize: 20, marginTop: 10}}>Bio</p>
                            <a href="https://www.google.com">https://www.google.com</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="cell-box">
                        <div className="form-group row cell">
                            <div className="col-6 each-cell">
                                Your posts
                            </div>
                            <div className="col-6 each-cell">
                                Your Favorites
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Profile