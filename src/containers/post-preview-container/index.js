import React, { Component } from "react";
import Preview from "../../components/preview/post";
import Review from "../../components/post-details/review";
import SideBar from "../../components/sidebar";
import PostNavigation from "../../components/post-details/post-navigation";

export default class PostPreviewContainer extends Component {
  render() {
    console.log("container props:", this.props);
    return (
      <section className="blog_area section-gap single-post-area">
        <div className="container box_1170">
          <div className="row">
            <div className="col-lg-8">
              <Preview
                title={this.props.location.state.title}
                content={this.props.location.state.content}
              />
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
