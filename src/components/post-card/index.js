import React, { Component } from "react";

export default class PostCard extends Component {
  render() {
    return (
      <div className="single-post-item">
        <div className="post-thumb">
          <img className="img-fluid" src={this.props.post.thumbImage} alt="" />
        </div>
        <div className="post-details">
          <h4>
            <a href="#">{this.props.post.title}</a>
          </h4>
          <p>{this.props.post.details}</p>
          <div className="blog-meta">
            <a href="#" className="m-gap">
              <span className="lnr lnr-calendar-full" />
              {this.props.post.publishDate}
            </a>
            <a href="#" className="m-gap">
              <span className="lnr lnr-bubble" />
              {this.props.post.commentCount}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
