import React, { Component } from "react";

export default class FollowUs extends Component {
  render() {
    return (
      <div className="single-footer-widget f_social_wd">
        <h6 className="footer_title">Follow Us</h6>
        <p>Let us be social</p>
        <div className="f_social">
          <a href="#">
            <i className="fa fa-facebook" />
          </a>
          <a href="#">
            <i className="fa fa-twitter" />
          </a>
          <a href="#">
            <i className="fa fa-dribbble" />
          </a>
          <a href="#">
            <i className="fa fa-behance" />
          </a>
        </div>
      </div>
    );
  }
}
