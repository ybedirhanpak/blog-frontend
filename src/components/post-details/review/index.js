import React, { Component } from "react";
import SingleComment from "./single-comment";
import AddComment from "./add-comment";

export default class Review extends Component {
  render() {
    return (
      <div className="comments-area">
        <h4>05 Comments</h4>
        <div className="comment-list">
          <SingleComment />
          <AddComment />
        </div>
      </div>
    );
  }
}
