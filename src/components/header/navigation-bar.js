import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import TopHeader from "./top-header";

export default class NavigationBar extends Component {
  render() {
    return (
      <div className="container box_1170 main-menu">
        <div className="row align-items-center justify-content-center d-flex">
            
          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li className="app-logo col-xs-6 col-sm-6">
                <Link to="/home" className="logo">
                  <img className="app-logo" src={logo} alt="Logo" />
                </Link>
              </li>
              <li className="mobile-login-register">
                <Link to="/login">Sign In!</Link>
              </li>
              <li className="mobile-login-register">
                <Link to="/register">Sign Up!</Link>
              </li>
              <li className="menu-active">
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/create-post">Create Post</Link>
              </li>
              <li className="menu-has-children">
                <Link to="/post-details">Blog</Link>
                <ul>
                  <li>
                    <Link to="/post-details">Post Details</Link>
                  </li>
                </ul>
              </li>
              <li>
                <TopHeader />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}