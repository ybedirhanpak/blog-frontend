import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./user-bio.scss";

export default class UserBio extends Component {
  render() {
    return (
      <div className="user-bio">
        <div className="mt-10">
          <h4>Facebook Profile:</h4>
          <input
            type="text"
            name="facebook"
            placeholder="Facebook Profile"
            className="single-input-primary"
            onChange={this.handleChange}
          />
        </div>
        <div className="mt-10">
          <h4>Instagram Profile:</h4>
          <input
            type="text"
            name="instagram"
            placeholder="Instagram Profile"
            className="single-input-primary"
            onChange={this.handleChange}
          />
        </div>
        <div className="mt-10">
          <h4>Twitter Profile:</h4>
          <input
            type="text"
            name="Twitter"
            placeholder="Twitter Profile"
            className="single-input-primary"
            onChange={this.handleChange}
          />
        </div>
        <div className="mt-10">
          <h4>LinkedIn Profile:</h4>
          <input
            type="text"
            name="linkedin"
            placeholder="LinkedIn Profile"
            className="single-input-primary"
            onChange={this.handleChange}
          />
        </div>
        <div className="mt-10">
          <h4>Personal Website:</h4>
          <input
            type="text"
            name="personalWebsite"
            placeholder="Personal Website"
            className="single-input-primary"
            onChange={this.handleChange}
          />
        </div>
        <div className="mt-10">
          <h4>Personal Details:</h4>
          <textarea class="single-textarea" placeholder="Biografi" />
        </div>
        <div className="bio-buttons">
          <Link to="/complete-register">
            <button href="" className="genric-btn primary-border circle arrow">
              <span className="lnr lnr-arrow-left" />
              {""}Previous
            </button>
          </Link>
          <Link to="/complete-register/interested-categories">
            <button href="" className="genric-btn primary-border circle arrow">
              Next
              <span className="lnr lnr-arrow-right" />
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
