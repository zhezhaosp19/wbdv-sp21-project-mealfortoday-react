import React, {useState} from 'react';
import userService from '../../services/users-service';
import {Link} from "react-router-dom";
import Header from "../partials/header";

class Register extends React.Component {
    state = {
        username: '',
        password: '',
        email: '',
        role: 'client',
        birthday: '',
        // users: []
    }

    onChangeHandler = (e) => {
        const value = e.target.value;
        this.setState({
            [e.target.name] : value,
        })
    }

    onSubmit = (user) => {
        if(this.state.username === '') {
            alert('Please enter your username!')
            return;
        }
        if(this.state.password === '') {
            alert('Please enter your password!')
            return;
        }
        if(this.state.email === '') {
            alert('Please enter your email!')
            return;
        }
        if(this.state.birthday === '') {
            alert('Please enter your birthday!')
            return;
        }

        userService.register(user)
            .then((newUser) =>
                this.props.history.push('/profile')
            )
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
                        <label className="col-sm-2 col-form-label"/>
                        <div className="col-sm-12">
                            <button className="btn btn-primary form-control"
                                  onClick={() => this.onSubmit(this.state)}>
                                Register

                            </button>

                            <div>
                                 Already is a member?
                                 <Link to="/login">
                                     Sign in
                                 </Link>

                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}

export default Register;