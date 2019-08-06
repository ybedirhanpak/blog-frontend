import React, { Component } from "react";
import logo from "../../logo.svg";
import "./header-style.css";

//Route
import { Link } from "react-router-dom";

export default class TopHeader extends Component {
  render() {
    return (
      <section className="header-top">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-xs-6 col-sm-6 ">
              <Link to="/home" className="logo">
                <img className="app-logo" src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="col-xs-6 col-sm-6 search-trigger">
              <a href="#" className="search search-icon">
                <i className="lnr lnr-magnifier" id="search" />
              </a>
              <Link
                to="/login"
                className="genric-btn primary-border circle ml-10 "
              >
                Sign In!
              </Link>
              <Link
                to="/register"
                className="genric-btn primary circle hide-mobile ml-10"
              >
                Join Us!
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
