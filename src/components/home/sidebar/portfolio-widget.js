import React, { Component } from "react";

export default class PortfolioWidget extends Component {
  render() {
    return (
      <div className="single-widget protfolio-widget">
        <img className="img-fluid" src={this.props.user.thumbImage} alt="" />
        <a href="#">
          <h4>{this.props.user.fullName}</h4>
        </a>
        <p className="p-text">{this.props.user.description}</p>
        <ul className="social-links">
          <li>
            <a href={this.props.user.facebookLink}>
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a href={this.props.user.twitterLink}>
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a href={this.props.user.dribbbleLink}>
              <i className="fa fa-dribbble" />
            </a>
          </li>
          <li>
            <a href={this.props.user.behanceLink}>
              <i className="fa fa-behance" />
            </a>
          </li>
        </ul>
        <img src={this.props.user.signImage} alt="Sign" />
      </div>
    );
  }
}
