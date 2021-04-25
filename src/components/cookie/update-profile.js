import React, {useState} from 'react'
import Header from "../partials/header";
import {Link} from "react-router-dom";
import userService from '../../services/users-service';
import Footer from "../partials/footer";

class UpdateProfile extends React.Component{
    state = {
        username: '',
        role: '',
        email: '',
        gender: '',
        area: '',
        bio: '',
        flavor: ''
    }

    componentDidMount() {
        userService.profile()
            .then((profile) => {
                console.log(profile)
                this.setState({
                    username: profile.username,
                    role: profile.role,
                    email: profile.email,
                    gender: profile.gender,
                    area: profile.area,
                    bio: profile.bio,
                    flavor: profile.flavor
                })
            })
    }

    onChangeHandler = (e) => {
        const value = e.target.value;
        this.setState({
            [e.target.name] : value,
        })
    }

    updateHandle = (profile) => {
        userService.updateProfile(profile)
            .then(
                () => {
                this.props.history.push({
                    pathname: `/profile/${this.state.username}`,
                }
        )})
    }

    logoutHandle = () => {
        userService.logout()
            .then(() => this.props.history.push('/'))

    }

    render() {

        return (
            <>
                <Header/>
                <div className="container">
                    <h1>Profile</h1>
                    <br/>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-3 col-form-label">Username</label>
                        <div className="col-sm-9">
                            <input value={this.state.username}
                                type="text" name="username" id="username" className="form-control"
                                readOnly/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="role" className="col-sm-3 col-form-label">Role</label>
                        <div className="col-sm-9">
                            <input value={this.state.role}
                                   type="text" name="role" id="role" className="form-control"
                                   readOnly/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-3 col-form-label">Email</label>
                        <div className="col-sm-9">
                            <input value={this.state.email}
                                   onChange={e => this.onChangeHandler(e)}
                                   type="text" name="email" id="email" className="form-control"
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="gender" className="col-sm-3 col-form-label">Gender</label>
                        <div className="col-sm-9">
                            <select onChange={e => this.onChangeHandler(e)}
                                    value={this.state.gender}
                                    className="form-control"
                                    name="gender" id="gender">
                                <option value="Male" selected>Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Other</option>
                                <option value="Secret">Don't want answer</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="area" className="col-sm-3 col-form-label">Area</label>
                        <div className="col-sm-9">
                            <input onChange={e => this.onChangeHandler(e)}
                                   value={this.state.area}
                                   type="text" name="area" id="area" className="form-control"
                                   placeholder="area"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="area" className="col-sm-3 col-form-label">Bio</label>
                        <div className="col-sm-9">
                            <textarea onChange={e => this.onChangeHandler(e)}
                                      value={this.state.bio}
                                      rows={5}
                                      name="bio" id="area" className="form-control"
                                      placeholder="Enter your bio..."
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="flavor" className="col-sm-3 col-form-label">Flavor</label>
                        <div className="col-sm-9">
                            <textarea onChange={e => this.onChangeHandler(e)}
                                      value={this.state.flavor}
                                      rows={5}
                                      name="flavor" id="flavor" className="form-control"
                                      placeholder="Enter your flavors of food..."
                            />
                        </div>
                    </div>

                    {
                        this.state.role === "Chef" &&
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label"/>
                            <div className="col-sm-12">
                                <Link to="/create">
                                    <button className="btn btn-success form-control"
                                            onClick={this.updateHandle}>
                                        Create Recipe
                                    </button>
                                </Link>

                            </div>
                        </div>

                    }
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"/>
                        <div className="col-sm-12">
                            <button className="btn btn-primary form-control"
                                  onClick={() => {
                                      // const {gender, area, bio ,flavor, username} = this.state
                                      this.updateHandle(this.state)
                                  }}>
                                Update
                            </button>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"/>
                        <div className="col-sm-12">
                            <button className="btn btn-danger form-control"
                                    onClick={this.logoutHandle}>
                                Logout
                            </button>
                        </div>
                    </div>

                </div>

            </>
        )
    }

}

export default UpdateProfile