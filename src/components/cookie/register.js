import React, {useState} from 'react';

class Register extends React.Component {
    state = {
        username: '',
        password: '',
        email: '',
        role: '',
        birthday: ''
    }

    onChangeHandler = (e) => {
        const value = e.target.value;
        this.setState({
            [e.target.name] : value,
        })
    }

    onSubmit = () => {

    }

    render() {
        return(
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
                                className="form-control wbdv-field wbdv-role"
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
                               className="form-control wbdv-field wbdv-role"
                               type="date" id="birthday" name="birthday"/>
                    </div>
                </div>

                <div className="form-group row">
                    <button
                        onClick={() => this.onSubmit}
                        className="btn btn-primary btn-block">
                        Register
                    </button>

                </div>

            </div>
        )
    }
}

export default Register;