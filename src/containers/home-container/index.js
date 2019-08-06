import React, { Component } from "react";
import "./style.css";

//Components
import PostSlider from "../../components/home/post-slider";
import MainBody from "../../components/home/main-body";
import TopPosts from "../../components/home/top-posts";

export default class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topPostList: [
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
      ],
      slidePostList: [
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
            "your own viewing station." +
            "There is a moment in the life of any aspiring" +
            "astronomer that it is time to buy that first" +
            "telescope. It’s exciting to think about setting up" +
            "your own viewing station." +
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

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="home-container">
        <div className="row">
          <div className="col-sm-12">
            {/* Top Stories Area */}
            <TopPosts postList={this.state.topPostList} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            {/* Post Silder Area */}
            <PostSlider postList={this.state.slidePostList} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            {/* Main body Area */}
            <MainBody />
          </div>
        </div>
      </div>
    );
  }
}
