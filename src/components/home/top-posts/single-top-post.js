import React, { Component } from "react";

export default class SingleTopPost extends Component {
  render() {
    return (
      <div className="single-stories-carousel d-flex align-items-center">
        <div className="stories-thumb">
          <img className="img-fluid" src={this.props.post.thumbImage} alt="" />
        </div>
        <div className="stories-details">
          <h6>
            <a href="">{this.props.post.title}</a>
          </h6>
          <p>{this.props.post.publishDate}</p>
        </div>
      </div>
    );
  }
}
