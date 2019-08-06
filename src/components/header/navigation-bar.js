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
<<<<<<< HEAD
                <a href="/">Home</a>
              </li>
              <li>
                <a href="category.html">Category</a>
=======
                <Link to="/home">Home</Link>
>>>>>>> 5ea6cf0978579b43fbfa9a1135324d47ad7c3f6d
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
