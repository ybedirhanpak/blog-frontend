import React, { Component } from "react";
import "./user-interested-categories.scss";

export default class InterestedCategories extends Component {
  render() {
    return (
      <div className="row category-image-list">
        <div className="mt-10 ">
          <img src="../img/200x200.png" alt="dummy" />
        </div>
        <div className="mt-10 category-image-list">
          <img src="../img/200x200.png" alt="dummy" />
        </div>
        <div className="mt-10 category-image-list">
          <img src="../img/200x200.png" alt="dummy" />
        </div>
      </div>
    );
  }
}
