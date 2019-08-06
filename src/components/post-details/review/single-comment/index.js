import React, { Component } from "react";

export default class SingleComment extends Component {
  state = {
    userImg: "img/block/c1.jpg",
    userName: "Emily Blunt",
    commentDate: "December 4, 2017 at 3:12 pm ",
    commentContent: "Never say goodbye till the end comes!"
  };
  render() {
    return (
      <div className="single-comment justify-content-between d-flex">
        <div className="user justify-content-between d-flex">
          <div className="thumb">
            <img src={this.state.userImg} alt="" />
          </div>
          <div className="desc">
            <h5>
              <a href="#">{this.state.userName}</a>
            </h5>
            <p className="date">{this.state.commentDate}</p>
            <p className="comment">{this.state.commentContent}</p>
          </div>
        </div>
        <div className="reply-btn">
          <a href="" className="btn-reply text-uppercase">
            reply
          </a>
        </div>
      </div>
    );
  }
}
