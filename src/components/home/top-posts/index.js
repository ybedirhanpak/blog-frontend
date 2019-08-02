import React, { Component } from "react";
import SingleTopPost from "./single-top-post";

export default class TopPosts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postList: [
        {
          thumbImage: "img/posts/carousel/stories1.jpg",
          title: "2nd Gen Smoke Alarm get up from sleep",
          publishDate: "March 14, 2018"
        },
        {
          thumbImage: "img/posts/carousel/stories2.jpg",
          title: "2nd Gen Smoke Alarm get up from sleep",
          publishDate: "March 14, 2018"
        },
        {
          thumbImage: "img/posts/carousel/stories3.jpg",
          title: "2nd Gen Smoke Alarm get up from sleep",
          publishDate: "March 14, 2018"
        },
        {
          thumbImage: "img/posts/carousel/stories4.jpg",
          title: "2nd Gen Smoke Alarm get up from sleep",
          publishDate: "March 14, 2018"
        },
        {
          thumbImage: "img/posts/carousel/stories5.jpg",
          title: "2nd Gen Smoke Alarm get up from sleep",
          publishDate: "March 14, 2018"
        },
        {
          thumbImage: "img/posts/carousel/stories6.jpg",
          title: "2nd Gen Smoke Alarm get up from sleep",
          publishDate: "March 14, 2018"
        }
      ]
    };
  }

  generatePosts = postList => {
    return postList.map((post, index) => (
      <SingleTopPost post={post} key={index} />
    ));
  };

  render() {
    return (
      <section className="top-stories-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="owl-carousel active-stories-carousel">
                {this.generatePosts(this.state.postList)}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
