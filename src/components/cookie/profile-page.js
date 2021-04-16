import React from 'react'
import Header from "../partials/header";
import {Link} from "react-router-dom";
import userService from '../../services/users-service';
import Footer from "../partials/footer";

class ProfilePage extends React.Component{
    state = {
        profile : {
            username: '',
            password: '',
            passwordConfirm: '',
            role: '',
            area: '',
            bio: ''
        }
    }

    componentDidMount() {
        userService.profile()
            .then((profile) => this.setState({
                profile: profile
            }))
    }

    onChangeHandler = (e) => {
        const value = e.target.value;
        this.setState({
            [e.target.name] : value,
        })
    }

    updateHandle = () => {
        if(this.state.password !== '' && this.state.password !== this.state.passwordConfirm) {
            alert('Passwords do not match!')
        }
    }

    logoutHandle = () => {
        userService.logout()
            .then(status => this.props.history.push('/'))
    }

    render() {
        return (
            <>
                <Header/>
                <div className="container">
                    <h1>Profile {this.state.profile.username} !</h1>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-3 col-form-label">Username</label>
                        <div className="col-sm-9">
                            <input value={this.state.profile.username}
                                type="text" name="username" id="username" className="form-control"
                                readOnly/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="gender" className="col-sm-3 col-form-label">Gender</label>
                        <div className="col-sm-9">
                            <select onChange={e => this.onChangeHandler(e)}
                                    value={this.state.role}
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
                        <label htmlFor="password" className="col-sm-3 col-form-label">Password</label>
                        <div className="col-sm-9">
                            <input onChange={e => this.onChangeHandler(e)}
                                   value={this.state.password}
                                   type="password" name="password" id="password" className="form-control"
                                   placeholder="password"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="passwordConfirm" className="col-sm-3 col-form-label">Confirm Password</label>
                        <div className="col-sm-9">
                            <input onChange={e => this.onChangeHandler(e)}
                                   value={this.state.passwordConfirm}
                                   type="password" name="passwordConfirm" id="passwordConfirm" className="form-control"
                                   placeholder="confirm your password"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="passwordConfirm" className="col-sm-3 col-form-label">Area</label>
                        <div className="col-sm-9">
                            <input onChange={e => this.onChangeHandler(e)}
                                   value={this.state.area}
                                   type="text" name="area" id="area" className="form-control"
                                   placeholder="area"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="passwordConfirm" className="col-sm-3 col-form-label">Bio</label>
                        <div className="col-sm-9">
                            <textarea onChange={e => this.onChangeHandler(e)}
                                      value={this.state.bio}
                                      rows={6}
                                      name="bio" id="area" className="form-control"
                                      placeholder="Enter your bio..."
                            />
                        </div>
                    </div>

                    {/*TODO: CREATE LINK*/}
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"/>
                        <div className="col-sm-12">
                            <button className="btn btn-primary form-control"
                                  onClick={this.updateHandle}>
                                Update
                            </button>
                            <br/>
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

export default ProfilePage