import React, { Component } from "react";

//Route
import { Link } from "react-router-dom";

export default class SingleTopPost extends Component {
  render() {
    console.log("single top post", this.props);
    return (
      <div className="owl-item">
        <div
          className="single-stories-carousel d-flex align-items-center"
          style={{ height: "100%" }}
        >
          <div className="stories-thumb">
            <img
              className="img-fluid"
              src={this.props.post.thumbImage}
              alt="Post"
            />
          </div>
          <div className="stories-details">
            <h6 className="block-with-text">
              <Link to="/home">{this.props.post.title}</Link>
            </h6>
            <p>{this.props.post.publishDate}</p>
          </div>
        </div>
      </div>
    );
  }
}
