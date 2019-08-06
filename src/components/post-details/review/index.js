import React, { Component } from "react";
import SingleComment from "./single-comment";
import AddComment from "./add-comment";

export default class index extends Component {
  render() {
    return (
      <div class="comments-area">
        <h4>05 Comments</h4>
        <div class="comment-list">
          <SingleComment />
          <AddComment />
        </div>
      </div>
    );
  }
}
