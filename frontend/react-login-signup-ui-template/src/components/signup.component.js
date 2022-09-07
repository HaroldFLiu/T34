import React, {Component} from "react";
export default class SignUp extends Component{
    render(){
        return(
            <form>
                <label className="sign">
                    Sign Up
                </label>
                <label className="slogan">
                    Sign up and start scrolling through the marketplace!
                </label>
                <div className="mb-3">
                    <label> First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                    />
                </div>
                <div className="mb-3">
                    <label> Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                    />
                </div>
                <div className="mb-3">
                    <label> Email Address</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>
                <div className="mb-3">
                    <label> Password</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Password"
                    />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-success">
                        Sign Up
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Already Registered <a href="/sign-in"> sign in?</a>
                </p>
            </form>
        )
    }
}