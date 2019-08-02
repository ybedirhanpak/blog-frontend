import React, { Component } from "react";
import SingleSlidePost from "./single-slide-post";

export default class PostSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postList: [
        {
          thumbImage: "img/posts/carousel/post1.jpg",
          title: "2nd Gen Smoke Alarm get up from sleep Daily",
          authorImage: "img/author/a1.png",
          authorName: "Marvel Maison",
          publishDate: "13th Oct, 2018",
          details:
            "There is a moment in the life of any aspiring" +
            "astronomer that it is time to buy that first" +
            "telescope. It’s exciting to think about setting up" +
            "your own viewing station."
        },
        {
          thumbImage: "img/posts/carousel/post2.jpg",
          title: "2nd Gen Smoke Alarm get up from sleep Daily",
          authorImage: "img/author/a1.png",
          authorName: "Marvel Maison",
          publishDate: "13th Oct, 2018",
          details:
            "There is a moment in the life of any aspiring" +
            "astronomer that it is time to buy that first" +
            "telescope. It’s exciting to think about setting up" +
            "your own viewing station."
        },
        {
          thumbImage: "img/posts/carousel/post3.jpg",
          title: "2nd Gen Smoke Alarm get up from sleep Daily",
          authorImage: "img/author/a1.png",
          authorName: "Marvel Maison",
          publishDate: "13th Oct, 2018",
          details:
            "There is a moment in the life of any aspiring" +
            "astronomer that it is time to buy that first" +
            "telescope. It’s exciting to think about setting up" +
            "your own viewing station."
        }
      ]
    };
  }

  generatePosts = postList => {
    return postList.map((post, index) => (
      <SingleSlidePost post={post} key={index} />
    ));
  };

  render() {
    return (
      <section className="post-slider-area">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="owl-carousel active-post-carusel">
                {this.generatePosts(this.state.postList)}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
