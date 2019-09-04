import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppLogo from "./app-logo";
import Account from "./account";

export default class NavigationBar extends Component {
  render() {
    return (
      <nav id="nav-menu-container">
        <ul className="nav-menu nav-flex">
          <div className="nav-logo">
            <li className="app-logo col-xs-6 col-sm-6">
              <Link to="/home" className="logo">
                <AppLogo />
              </Link>
            </li>
          </div>
          <div class="nav-categories nav-flex">
            <li className="menu-active">
              <div className="home">
                <Link to="/home">Home</Link>
              </div>
            </li>
            <li className="menu-has-children categories-mobile">
              <Link to="/categories">Main Category-1</Link>
              <ul>
                <li>
                  <Link to="/categories/category-1">Category 1</Link>
                </li>
              </ul>
            </li>
          </div>
          <div className="nav-right nav-flex">
            <div className="search-trigger">
              <a href="#" className="search search-icon">
                <i className="lnr lnr-magnifier" id="search" />
              </a>
            </div>
            <Account />
          </div>
        </ul>
      </nav>
    );
  }
}
