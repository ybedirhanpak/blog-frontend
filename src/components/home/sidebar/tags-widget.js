import React, { Component } from "react";

export default class TagsWidget extends Component {
  generateTags = tagList => {
    return tagList.map((tag, index) => (
      <li key={index}>
        <a href={tag.link}>{tag.name}</a>
      </li>
    ));
  };

  render() {
    return (
      <div className="single-widget tags-widget">
        <h4 className="title">Post Tags</h4>
        <ul>{this.generateTags(this.props.tags)}</ul>
      </div>
    );
  }
}
