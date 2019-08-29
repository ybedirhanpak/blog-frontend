import React, { Component } from "react";
import "./user-interested-categories.scss";
import { Link } from "react-router-dom";

export default class InterestedCategories extends Component {
  render() {
    return (
      <div className="interested-categories">
        <h4 className="mb-10">Choose your interested categories!</h4>
        <div className="category-image-list">
          <div className="mt-10 ">
            <img src="../img/200x200.png" alt="dummy" />
          </div>
          <div className="mt-10">
            <img src="../img/200x200.png" alt="dummy" />
          </div>
          <div className="mt-10">
            <img src="../img/200x200.png" alt="dummy" />
          </div>
          <div className="mt-10 ">
            <img src="../img/200x200.png" alt="dummy" />
          </div>
          <div className="mt-10">
            <img src="../img/200x200.png" alt="dummy" />
          </div>
          <div className="mt-10">
            <img src="../img/200x200.png" alt="dummy" />
          </div>
          <div className="mt-10 ">
            <img src="../img/200x200.png" alt="dummy" />
          </div>
          <div className="mt-10">
            <img src="../img/200x200.png" alt="dummy" />
          </div>
          <div className="mt-10">
            <img src="../img/200x200.png" alt="dummy" />
          </div>
          <div className="mt-10 ">
            <img src="../img/200x200.png" alt="dummy" />
          </div>
          <div className="mt-10">
            <img src="../img/200x200.png" alt="dummy" />
          </div>
          <div className="mt-10">
            <img src="../img/200x200.png" alt="dummy" />
          </div>
        </div>
        <div className="category-button-wrapper">
          <Link to="/complete-register/user-details">
            <button href="" className="genric-btn primary-border circle arrow ">
              <span className="lnr lnr-arrow-left" /> Previous
            </button>
          </Link>
          <button href="" className="genric-btn primary-border circle arrow ">
            Submit!
            <span className="lnr lnr-arrow-right" />
          </button>
        </div>
      </div>
    );
  }
}
