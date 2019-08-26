import React, { Component } from "react";
import "./style.scss";

//Components
import Banner from "../../components/banner";
import TextEditor from "../../components/create-post/text-editor";

export default class CreatePostContainer extends Component {
  render() {
    return (
      <div className="create-post-container">
        <Banner />
        <h1>Create Post</h1>
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-8">
            <TextEditor />
          </div>
          <div className="col-md-2" />
        </div>
      </div>
    );
  }
}
