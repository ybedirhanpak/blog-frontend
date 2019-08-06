import React, { Component } from "react";

export default class index extends Component {
  state = {
    userImg: "img/block/c1.jpg",
    userName: "Emily Blunt",
    commentDate: "December 4, 2017 at 3:12 pm ",
    commentContent: "Never say goodbye till the end comes!"
  };
  render() {
    return (
      <div class="single-comment justify-content-between d-flex">
        <div class="user justify-content-between d-flex">
          <div class="thumb">
            <img src={this.state.userImg} alt="" />
          </div>
          <div class="desc">
            <h5>
              <a href="#">{this.state.userName}</a>
            </h5>
            <p class="date">{this.state.commentDate}</p>
            <p class="comment">{this.state.commentContent}</p>
          </div>
        </div>
        <div class="reply-btn">
          <a href="" class="btn-reply text-uppercase">
            reply
          </a>
        </div>
      </div>
    );
  }
}
