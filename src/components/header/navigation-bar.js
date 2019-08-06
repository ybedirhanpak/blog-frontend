import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class NavigationBar extends Component {
  render() {
    return (
      <div className="container box_1170 main-menu">
        <div className="row align-items-center justify-content-center d-flex">
          <nav id="nav-menu-container">
            <ul className="nav-menu">
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
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
