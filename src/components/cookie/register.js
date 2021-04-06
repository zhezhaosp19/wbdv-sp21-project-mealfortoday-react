import React, {useState} from 'react';
import userService from '../../services/users-service';
import {Link} from "react-router-dom";
import Header from "../partials/header";

class Register extends React.Component {
    state = {
        // username: '',
        // password: '',
        // email: '',
        // role: '',
        // birthday: ''
        users: []
    }

    onChangeHandler = (e) => {
        const value = e.target.value;
        this.setState({
            [e.target.name] : value,
        })
    }

    onSubmit = () => {
        const user = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            role: 'client',
            birthday: this.state.birthday
        }
        userService.createUsers(user)
            .then(actualUser => {
                this.state.users.push(actualUser)
                this.setState(this.state)
        })
    }

    render() {
        return(
            <>
                <Header/>
                <div className="container">
                    <h1>Register</h1>

                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
                        <div className="col-sm-10">
                            <input onChange={e => this.onChangeHandler(e)}
                                   value={this.state.username}
                                   type="text" name="username" id="username" className="form-control"
                                   placeholder="username"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">password</label>
                        <div className="col-sm-10">
                            <input onChange={e => this.onChangeHandler(e)}
                                   value={this.state.password}
                                   type="password" name="password" id="password" className="form-control"
                                   placeholder="password"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email Address</label>
                        <div className="col-sm-10">
                            <input onChange={e => this.onChangeHandler(e)}
                                   value={this.state.email}
                                   type="email" name="email" id="email" className="form-control"
                                   placeholder="email@gmail.com"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="role" className="col-sm-2 col-form-label">Role</label>
                        <div className="col-sm-10">
                            <select onChange={e => this.onChangeHandler(e)}
                                    value={this.state.role}
                                    className="form-control"
                                    name="role" id="role">
                                <option value="Client" selected>Client</option>
                                <option value="Chef">Chef</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="birthday" className="col-sm-2 col-form-label">Date of Birth</label>
                        <div className="col-sm-10">
                            <input onChange={e => this.onChangeHandler(e)}
                                   value={this.state.birthday}
                                   className="form-control"
                                   type="date" id="birthday" name="birthday"/>
                        </div>
                    </div>


                    <div className="form-group row">
                        <Link to="#" className="form-control btn btn-primary"
                              onClick={this.onSubmit}>
                            Register
                        </Link>

                    </div>

                </div>
            </>
        )
    }
}

export default Register;