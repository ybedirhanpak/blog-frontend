import React, { Component } from "react";

export default class PostNavigation extends Component {
  render() {
    return (
      <div className="navigation-area">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
            <div className="thumb">
              <a href="#">
                <img className="img-fluid" src="img/blog/prev.jpg" alt="" />
              </a>
            </div>
            <div className="arrow">
              <a href="#">
                <span className="lnr text-white lnr-arrow-left" />
              </a>
            </div>
            <div className="detials">
              <p>Prev Post</p>
              <a href="#">
                <h4>A Discount Toner</h4>
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
            <div className="detials">
              <p>Next Post</p>
              <a href="#">
                <h4>Cartridge Is Better</h4>
              </a>
            </div>
            <div className="arrow">
              <a href="#">
                <span className="lnr text-white lnr-arrow-right" />
              </a>
            </div>
            <div className="thumb">
              <a href="#">
                <img className="img-fluid" src="img/blog/next.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
