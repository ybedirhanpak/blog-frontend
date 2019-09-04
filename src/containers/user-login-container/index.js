import React, { Component } from "react";
//Css file
import "./user-login.scss";

//Components
import LoginForm from "./login-form";

//Redux
import { connect } from "react-redux";

//Route
import { Redirect } from "react-router-dom";

class UserLoginContainer extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    if (this.props.user) {
      return <Redirect to="/user" />;
    }
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

const mapStateToProps = state => {
  return {
    user: state.user.current
  };
};

export default connect(mapStateToProps)(UserLoginContainer);
