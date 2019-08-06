import React, { Component } from "react";

//Components
import Banner from "../../components/banner";
import TextEditor from "../../components/create-post/text-editor";

export default class CreatePostContainer extends Component {
  render() {
    return (
      <div>
        <Banner />
        <h1>Create Post</h1>
        <TextEditor />
      </div>
    );
  }
}
