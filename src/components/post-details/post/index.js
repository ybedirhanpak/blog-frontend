import React, { Component } from "react";

export default class index extends Component {
  render() {
    console.log("state", this.state, "props", this.props);
    return (
      <div>
        <div class="main_blog_details">
          <img class="img-fluid" src="img/blog/news-blog.jpg" alt="" />
          <h4>{this.state.postDetails.title}</h4>
          <div class="user_details">
            <div class="float-left">
              {this.state.postDetails.tagList.map(element => (
                <a>{element}</a>
              ))}
            </div>
            <div class="float-right">
              <div class="media">
                <div class="media-body">
                  <h5>{this.state.postDetails.userName}</h5>
                  <p>{this.state.postDetails.postDetails}</p>
                </div>
                <div class="d-flex">
                  <img src="img/blog/user-img.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          {this.state.postDetails.postContent.split("\n").map((item, key) => {
            return (
              <p key={key}>
                {item}
                <br />
              </p>
            );
          })}
          <blockquote class="blockquote">
            <p class="mb-0">{this.state.postDetails.codeContent}</p>
          </blockquote>

          <div class="news_d_footer">
            <a>
              <i class="lnr lnr lnr-heart" />
              Lily and 4 people like this
            </a>
            <a class="justify-content-center ml-auto">
              <i class="lnr lnr lnr-bubble" />
              06 Comments
            </a>
            <div class="news_socail ml-auto">
              <a>
                <i class="fa fa-facebook" />
              </a>
              <a>
                <i class="fa fa-twitter" />
              </a>
              <a>
                <i class="fa fa-pinterest" />
              </a>
              <a>
                <i class="fa fa-rss" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  constructor() {
    super();
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
