import React, { Component } from "react";
import SingleTopPost from "./single-top-post";

export default class TopPosts extends Component {
  constructor(props) {
    super(props);
  }

  generatePosts = postList => {
    return postList.map((post, index) => (
      <div className="col-xs-12 col-sm-6 col-md-4" key={index}>
        <SingleTopPost post={post} />
      </div>
    ));
  };

  render() {
    return (
      <div className="top-stories-area">
        <div className="container-fluid" style={{ height: "100%" }}>
          <div className="owl-carousel active-stories-carousel ">
            <div className="owl-stage">
              <div className="row">
                {this.generatePosts(this.props.postList)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
