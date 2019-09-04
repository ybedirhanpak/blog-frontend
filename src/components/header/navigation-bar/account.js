import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Account extends Component {
  render() {
    console.log("account props", this.props);
    if (this.props.user) {
      return (
        <div className="account nav-flex">
          <li className="menu-has-children my-account">
            <Link to="/user">My Account</Link>
            <ul>
              <li>
                <Link to="/user/sublink">Sublink</Link>
              </li>
              <li>
                <Link to="/user/sublink">Sublink</Link>
              </li>
              <li>
                <Link to="/user/sublink">Sublink</Link>
              </li>
              <hr></hr>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          </li>
        </div>
      );
    }
    return (
      <div className="account nav-flex">
        <div className="sign-in">
          <Link to="/login">Sign In!</Link>
        </div>
        <div className="join-us">
          <Link to="/register">Join Us!</Link>
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

export default connect(mapStateToProps)(Account);
