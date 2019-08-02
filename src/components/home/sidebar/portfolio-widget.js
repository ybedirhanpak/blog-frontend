import React, { Component } from "react";

export default class PortfolioWidget extends Component {
  render() {
    return (
      <div className="single-widget protfolio-widget">
        <img className="img-fluid" src="img/blog/user2.png" alt="" />
        <a href="#">
          <h4>Peter Anderson</h4>
        </a>
        <p className="p-text">
          Boot camps have its supporters andit sdetractors. Some people do not
          understand why you should have to spend money on boot camp whenyou can
          get. Boot camps have itssuppor ters andits detractors.
        </p>
        <ul className="social-links">
          <li>
            <a href="#">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-dribbble" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-behance" />
            </a>
          </li>
        </ul>
        <img src="img/sign.png" alt="" />
      </div>
    );
  }
}
