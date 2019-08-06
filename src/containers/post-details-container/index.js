import React, { Component } from "react";
import Post from "../../components/post-details/post";
import Review from "../../components/post-details/review";
import SideBar from "../../components/sidebar";
import PostNavigation from "../../components/post-details/post-navigation";

export default class PostDetailsContainer extends Component {
  render() {
    return (
      <section className="blog_area section-gap single-post-area">
        <div className="container box_1170">
          <div className="row">
            <div className="col-lg-8">
              <Post />
              <PostNavigation />
              <Review />
            </div>
            <div className="col-lg-4">
              <SideBar />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
