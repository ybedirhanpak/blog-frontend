import React, { Component } from "react";
import AboutUs from "./about-us";
import Newsletter from "./newsletter";
import InstaFeed from "./insta-feed";
import FollowUs from "./follow-us";
import Colorlib from "./colorlib";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-area section-gap">
        <div className="container box_1170">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <AboutUs />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <Newsletter />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <InstaFeed />
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <FollowUs />
            </div>
          </div>
          <Colorlib />
        </div>
      </footer>
    );
  }
}
