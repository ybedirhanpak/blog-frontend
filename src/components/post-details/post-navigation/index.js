import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <div class="navigation-area">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
            <div class="thumb">
              <a href="#">
                <img class="img-fluid" src="img/blog/prev.jpg" alt="" />
              </a>
            </div>
            <div class="arrow">
              <a href="#">
                <span class="lnr text-white lnr-arrow-left" />
              </a>
            </div>
            <div class="detials">
              <p>Prev Post</p>
              <a href="#">
                <h4>A Discount Toner</h4>
              </a>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
            <div class="detials">
              <p>Next Post</p>
              <a href="#">
                <h4>Cartridge Is Better</h4>
              </a>
            </div>
            <div class="arrow">
              <a href="#">
                <span class="lnr text-white lnr-arrow-right" />
              </a>
            </div>
            <div class="thumb">
              <a href="#">
                <img class="img-fluid" src="img/blog/next.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
