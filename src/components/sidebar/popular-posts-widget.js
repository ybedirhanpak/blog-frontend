import React, { Component } from "react";

export default class PopularPostsWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: "0"
    };
  }

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
        <h4>Popular posts</h4>
        {this.generatePopularPosts(this.props.popularPosts)}
      </div>
    );
  }
}
