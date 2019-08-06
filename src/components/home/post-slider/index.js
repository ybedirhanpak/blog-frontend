import React, { Component } from "react";
import SingleSlidePost from "./single-slide-post";

export default class PostSlider extends Component {
  generatePosts = postList => {
    return postList.map((post, index) => {
      if (index === postList.length - 1 && postList.length % 2 === 1) {
        return (
          <div
            className="col-xs-12 col-sm-12 col-md-12 col-lg-4"
            key={index}
            style={{ padding: 0 }}
          >
            <SingleSlidePost post={post} />
          </div>
        );
      } else {
        return (
          <div
            className="col-xs-12 col-sm-6 col-md-6 col-lg-4"
            key={index}
            style={{ padding: 0 }}
          >
            <SingleSlidePost post={post} />
          </div>
        );
      }
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">{this.generatePosts(this.props.postList)}</div>
      </div>
    );
  }
}
