import React, { Component } from "react";

export default class PopularPostsWidget extends Component {
  generatePopularPosts = postList => {
    return postList.map((post, index) => (
      <div className="single-popular-post d-flex flex-row" key={index}>
        <div className="popular-thumb">
          <img className="img-fluid" src={post.thumbImage} alt="" />
        </div>
        <div className="popular-details">
          <h6>
            <a href="">{post.title}</a>
          </h6>
          <p>{post.publishDate}</p>
        </div>
      </div>
    ));
  };

  render() {
    return (
      <div className="single-widget popular-posts-widget">
        <div className="jq-tab-wrapper" id="horizontalTab">
          <div className="jq-tab-menu">
            <div className="jq-tab-title active" data-tab="1">
              Popular
            </div>
            <div className="jq-tab-title" data-tab="2">
              Latest
            </div>
          </div>
          <div className="jq-tab-content-wrapper">
            <div className="jq-tab-content active" data-tab="1">
              {this.generatePopularPosts(this.props.popularPosts)}
            </div>

            <div className="jq-tab-content active" data-tab="2">
              {this.generatePopularPosts(this.props.latestPosts)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
