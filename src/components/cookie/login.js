import React from 'react'

const Login = () => {

    return (
        <div className="container">
            <h1>Log In</h1>
            <form>
                <div className="form-group row">
                    <label htmlFor="username"
                           className="col-sm-2 col-form-label">
                        Username
                    </label>
                    <div className="col-sm-10">
                        <input className="form-control wbdv-field wbdv-username"
                               id="username"
                               placeholder="Alice"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-sm-2 col-form-label">
                        Password </label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control wbdv-field wbdv-password"
                               id="password" placeholder="123qwe#$%"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"/>
                    <div className="col-sm-10">
                        {/*TODO: CREATE LINK*/}
                        <a className="btn btn-primary btn-block"
                           href="#">
                            Sign in
                        </a>
                        <div className="row">
                            <div className="col-6">
                                {/*TODO: CREATE LINK*/}
                                <a href="#">
                                    Forgot Password?
                                </a>
                            </div>
                            <div className="col-6">
                                {/*TODO: CREATE LINK*/}
                                <a href="#" className="float-right">
                                    Sign up
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    )

}

export default Login