import React, { Component } from "react";
//Css file
import "./user-login.scss";

//Components
import LoginForm from "./login-form";

export default class UserLoginContainer extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div
        className="login-background"
        style={{ minHeight: window.innerHeight }}
      >
        <div className="login">
          <div className="row login-row">
            <div className="col-sm-12 col-md-2 col-lg-3" />
            <div className="col-sm-12 col-md-8 col-lg-6">
              <LoginForm />
            </div>
            <div className="col-sm-12 col-md-2 col-lg-3" />
          </div>
        </div>
      </div>
    );
  }
}
