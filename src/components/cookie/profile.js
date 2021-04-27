import React, {useEffect, useState} from 'react'
import Header from "../partials/header";
import {Link, useParams} from "react-router-dom";
import userService from "../../services/users-service";
import CurrUserContent from "./publicContent"
import PrivateContent from './privateContent';

const Profile = () => {
    const {username} = useParams()
    // console.log(username)
    const [currentUser, setCurrentUser] = useState([])
    const [otherUser, setOtherUser] = useState([])
    const [portrait, setPortrait] = useState("https://www.cyphercoders.com/sites/default/files/default_images/default-user-icon-4.jpg")
    useEffect(() => {
        userService.profile()
            .then(currUser => {
                console.log(currUser)
                setCurrentUser(currUser)
                setPortrait(currUser.portrait)
            })
    },[])
    useEffect(() => {
        // if(username !== currentUser.username) {
        userService.findUserByName(username)
            .then(otherUser => {
                console.log(otherUser[0])
                setOtherUser(otherUser[0])
            })
        // }
    },[])
    return (
        <>
            <Header/>
            <div className="container profile">
                {
                    currentUser.username === username &&
                    <CurrUserContent currentUser = {currentUser} portrait = {portrait}/>

                }
                {
                    currentUser.username !== username &&
                    // <PrivateContent otherUser = {otherUser[0]}/>
                    <div style={{display: 'flex', justifyContent: "space-around", margin: '18px 0px'}}>
                        <div>
                            <img className="image"
                                src={otherUser.portrait}/>
                        </div>
                        <div>
                            <div style={{display: 'flex', justifyContent: "space-between", width: "150%"}}>
                                <h2>{otherUser.username}</h2>

                            </div>
                            <div>
                                <p style={{fontSize: 20, marginTop: 10}}>{otherUser.bio}</p>
                            </div>
                        </div>
                    </div>
       
                }

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
                                        <Link to={`/favorites/user/${currentUser.username}`}>
                                            Your Favorites
                                        </Link>
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