import React, { Component } from "react";
import PortfolioWidget from "./portfolio-widget";
import PopularPostsWidget from "./popular-posts-widget";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        {/* Porfolio Widget */}
        <PortfolioWidget />

        {/* Popular Posts Widget */}
        <PopularPostsWidget />

        {/* Category Widget */}
        <div className="single-widget category-widget">
          <h4 className="title">Post Categories</h4>
          <ul>
            <li>
              <a
                href="#"
                className="justify-content-between align-items-center d-flex"
              >
                <p>
                  <img src="img/bullet.png" alt="" />
                  International (56)
                </p>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="justify-content-between align-items-center d-flex"
              >
                <p>
                  <img src="img/bullet.png" alt="" />
                  Tours and Travels (45)
                </p>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="justify-content-between align-items-center d-flex"
              >
                <p>
                  <img src="img/bullet.png" alt="" />
                  Cooking Tips (23)
                </p>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="justify-content-between align-items-center d-flex"
              >
                <p>
                  <img src="img/bullet.png" alt="" />
                  Life Style and Fashion (72)
                </p>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="justify-content-between align-items-center d-flex"
              >
                <p>
                  <img src="img/bullet.png" alt="" />
                  Organic News (37)
                </p>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="justify-content-between align-items-center d-flex"
              >
                <p>
                  <img src="img/bullet.png" alt="" />
                  Games and Sports (19)
                </p>
              </a>
            </li>
          </ul>
        </div>

        {/* Tags Widget */}
        <div className="single-widget tags-widget">
          <h4 className="title">Post Tags</h4>
          <ul>
            <li>
              <a href="#">Lifestyle</a>
            </li>
            <li>
              <a href="#">Art</a>
            </li>
            <li>
              <a href="#">Adventure</a>
            </li>
            <li>
              <a href="#">Food</a>
            </li>
            <li>
              <a href="#">Techlology</a>
            </li>
            <li>
              <a href="#">Fashion</a>
            </li>
            <li>
              <a href="#">Architecture</a>
            </li>
            <li>
              <a href="#">Food</a>
            </li>
            <li>
              <a href="#">Technology</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
