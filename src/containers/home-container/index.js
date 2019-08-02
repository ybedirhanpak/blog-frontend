import React, { Component } from "react";

//Components
import PostSlider from "../../components/home/post-slider";
import MainBody from "../../components/home/main-body";
import TopPosts from "../../components/home/top-posts";

export default class HomeContainer extends Component {
  render() {
    return (
      <div>
        {/* Top Stories Area */}
        <TopPosts />
        {/* Post Silder Area */}
        <PostSlider />
        {/* Main body Area */}
        <MainBody />
      </div>
    );
  }
}
