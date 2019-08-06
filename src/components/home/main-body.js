import React, { Component } from "react";

import BodyPosts from "./body-posts";
import Sidebar from "../../components/sidebar";

export default class MainBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postList: [
        {
          thumbImage: "img/archive/c1.jpg",
          title: "An Stormy Evening",
          details:
            "There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station.",
          publishDate: "March 14, 2018",
          commentCount: "05"
        },
        {
          thumbImage: "img/archive/c2.jpg",
          title: "An Stormy Evening",
          details:
            "There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station.",
          publishDate: "March 14, 2018",
          commentCount: "05"
        },
        {
          thumbImage: "img/archive/c3.jpg",
          title: "An Stormy Evening",
          details:
            "There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station.",
          publishDate: "March 14, 2018",
          commentCount: "05"
        },
        {
          thumbImage: "img/archive/c4.jpg",
          title: "An Stormy Evening",
          details:
            "There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station.",
          publishDate: "March 14, 2018",
          commentCount: "05"
        },
        {
          thumbImage: "img/archive/c1.jpg",
          title: "An Stormy Evening",
          details:
            "There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station.",
          publishDate: "March 14, 2018",
          commentCount: "05"
        },
        {
          thumbImage: "img/archive/c2.jpg",
          title: "An Stormy Evening",
          details:
            "There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station.",
          publishDate: "March 14, 2018",
          commentCount: "05"
        },
        {
          thumbImage: "img/archive/c3.jpg",
          title: "An Stormy Evening",
          details:
            "There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station.",
          publishDate: "March 14, 2018",
          commentCount: "05"
        },
        {
          thumbImage: "img/archive/c4.jpg",
          title: "An Stormy Evening",
          details:
            "There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station.",
          publishDate: "March 14, 2018",
          commentCount: "05"
        }
      ]
    };
  }

  render() {
    return (
      <div className="main-body section-gap">
        <div className="container box_1170">
          <div className="row">
            {/* Post Area */}
            <div className="col-lg-8">
              <BodyPosts postList={this.state.postList} />
            </div>

            {/* Sidebar Area */}
            <div className="col-lg-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
