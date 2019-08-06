import React, { Component } from "react";
import Post from "./post";
import Review from "./review";
import SideBar from "../home/sidebar";
import PostNavigation from "./post-navigation";

export default class index extends Component {
  render() {
    return (
      <section class="blog_area section-gap single-post-area">
        <div class="container box_1170">
          <div class="row">
            <div class="col-lg-8">
              <Post />
              <PostNavigation />
              <Review />
            </div>
            <div class="col-lg-4">
              <SideBar />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
