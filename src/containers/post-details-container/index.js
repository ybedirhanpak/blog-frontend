import React, { Component } from "react";
import Post from "../../components/post-details/post";
import Review from "../../components/post-details/review";
import SideBar from "../../components/sidebar";
import PostNavigation from "../../components/post-details/post-navigation";

export default class PostDetailsContainer extends Component {
  render() {
    console.log("container props:", this.props);
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
