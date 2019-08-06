import React, { Component } from "react";

//Route
import { Link } from "react-router-dom";

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
            <Link to="/home">{this.props.post.title}</Link>
          </h2>
          <div className="post-content">
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
