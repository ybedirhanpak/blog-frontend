import React, { Component } from "react";

export default class NavigationBar extends Component {
  render() {
    return (
      <div className="container box_1170 main-menu">
        <div className="row align-items-center justify-content-center d-flex">
          <nav id="nav-menu-container">
            <ul className="nav-menu">
              <li className="menu-active">
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="category.html">Category</a>
              </li>
              <li>
                <a href="archive.html">Archive</a>
              </li>
              <li className="menu-has-children">
                <a href="">Pages</a>
                <ul>
                  <li>
                    <a href="elements.html">Elements</a>
                  </li>
                </ul>
              </li>
              <li className="menu-has-children">
                <a href="">Blog</a>
                <ul>
                  <li>
                    <a href="blog-details.html">Blog Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
