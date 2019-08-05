import React, { Component } from "react";

export default class CategoryWidget extends Component {
  generateCategories = categoryList => {
    return categoryList.map((category, index) => (
      <li key={index}>
        <a
          href="#"
          className="justify-content-between align-items-center d-flex"
        >
          <p>
            <img src="img/bullet.png" alt="" />
            {`${category.name} (${category.quantity})`}
          </p>
        </a>
      </li>
    ));
  };

  render() {
    return (
      <div className="single-widget category-widget">
        <h4 className="title">Post Categories</h4>
        <ul>{this.generateCategories(this.props.postCategories)}</ul>
      </div>
    );
  }
}
