import React, { Component } from "react";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";

import "./preview.scss";

export default class Post extends Component {
  render() {
    console.log("post props:", this.props, this.state);
    return (
      <div>
        <div className="main_blog_details">
          <img className="img-fluid" src="img/blog/news-blog.jpg" alt="" />
          <h4>{ReactHtmlParser(this.props.title)}</h4>
          <div className="user_details">
            <div className="float-left">
              {this.state.postDetails.tagList.map(element => (
                <a>{element}</a>
              ))}
            </div>
            <div className="float-right">
              <div className="media">
                <div className="media-body">
                  <h5>{this.state.postDetails.userName}</h5>
                  <p>{this.state.postDetails.postDetails}</p>
                </div>
                <div className="d-flex">
                  <img src="img/blog/user-img.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="post-content">
            {ReactHtmlParser(this.props.content)}
          </div>
          <div>
            <hr />
            <h4>END OF PAGE</h4>
          </div>
        </div>
      </div>
    );
  }
  constructor(props) {
    super(props);
    this.state = {
      postDetails: {
        title: "Cartridge Is Better Than Ever\n A Discount Toner",
        tagList: ["Lifestyle", "Gadget"],
        userName: "Mark wiens",
        postDate: "12 Dec, 2017 11:21 am",
        userImg: "img/blog/user-img.jpg",
        postContent:
          "MCSE boot camps have its supporters and its detractors. Some people " +
          "do not understand why you should have to spend money on boot camp " +
          "when you can get the MCSE study materials yourself at a fraction of " +
          "the camp price. However, who has the willpower\n\n" +
          "MCSE boot camps have its supporters and its detractors. Some people " +
          "do not understand why you should have to spend money on boot camp " +
          "when you can get the MCSE study materials yourself at a fraction of " +
          "the camp price. However, who has the willpower to actually sit " +
          "through a self-imposed MCSE training. who has the willpower to " +
          "actually sit through a self-imposed MCSE training.\n\n" +
          "MCSE boot camps have its supporters and its detractors. Some people " +
          "do not understand why you should have to spend money on boot camp " +
          "when you can get the MCSE study materials yourself at a fraction of " +
          "the camp price. However, who has the willpower to actually sit " +
          "through a self-imposed MCSE training. who has the willpower to " +
          "actually sit through a self-imposed MCSE training.\n\n" +
          "MCSE boot camps have its supporters and its detractors. Some people " +
          "do not understand why you should have to spend money on boot camp " +
          "when you can get the MCSE study materials yourself at a fraction of " +
          "the camp price. However, who has the willpower to actually sit " +
          "through a self-imposed MCSE training. who has the willpower to " +
          "actually sit through a self-imposed MCSE training.",
        codeContent:
          "MCSE boot camps have its supporters and its detractors. Some " +
          "people do not understand why you should have to spend money on " +
          "boot camp when you can get the MCSE study materials yourself at a " +
          "fraction of the camp price. However, who has the willpower to " +
          "actually sit through a self-imposed MCSE training."
      }
    };
  }
}
