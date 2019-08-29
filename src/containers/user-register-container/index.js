import React, { Component } from "react";
import { Link } from "react-router-dom";

//Css file
import "./user-register.scss";

import RegisterForm from "./register-form";

export default class UserRegister extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="register-background">
        <div className="row register-row">
          <div className="col-sm-12 col-md-2 col-lg-3" />
          <div className="col-sm-12 col-md-8 col-lg-6">
            <RegisterForm />
          </div>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-3" />
      </div>
    );
  }
}
