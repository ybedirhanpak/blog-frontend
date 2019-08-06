import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <section class="banner-area relative">
        <div class="overlay overlay-bg" />
        <div class="container box_1170">
          <div class="row d-flex align-items-center justify-content-center">
            <div class="about-content col-lg-12">
              <h1 class="text-white">Blog Post Details</h1>
              <p class="text-white link-nav">
                <a href="index.html">Home </a>{" "}
                <span class="lnr lnr-arrow-right" />
                <a href="#"> Blog</a> <span class="lnr lnr-arrow-right" />
                <a href="blog-details.html"> Blog Details</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
