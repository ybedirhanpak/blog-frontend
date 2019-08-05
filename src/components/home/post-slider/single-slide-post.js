import React, { Component } from "react";

export default class SingleSlidePost extends Component {
  render() {
    return (
      <div className="single-post-carousel">
        <div className="post-thumb">
          <img
            className="img-fluid"
            src={this.props.post.thumbImage}
            alt="Post"
          />
        </div>
        <div className="post-details">
          <h2>
            <a href="#">{this.props.post.title}</a>
          </h2>
          <div className="post-content d-flex justify-content-between">
            <div className="post-meta">
              <div className="thumb">
                <img src={this.props.post.authorImage} alt="Author" />
              </div>
              <div className="c-desc">
                <h6>{this.props.post.authorName}</h6>
                <p>
                  <span className="lnr lnr-calendar-full" />
                  {this.props.post.publishDate}
                </p>
              </div>
            </div>
            <div className="details">
              <p>{this.props.post.details}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
