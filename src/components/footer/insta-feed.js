import React, { Component } from "react";

export default class InstaFeed extends Component {
  render() {
    return (
      <div className="single-footer-widget instafeed">
        <h6 className="footer_title">Instagram Feed</h6>
        <ul className="list instafeed d-flex flex-wrap">
          <li>
            <img src="../img/i1.jpg" alt="" />
          </li>
          <li>
            <img src="../img/i2.jpg" alt="" />
          </li>
          <li>
            <img src="../img/i3.jpg" alt="" />
          </li>
          <li>
            <img src="../img/i4.jpg" alt="" />
          </li>
          <li>
            <img src="../img/i5.jpg" alt="" />
          </li>
          <li>
            <img src="../img/i6.jpg" alt="" />
          </li>
          <li>
            <img src="../img/i7.jpg" alt="" />
          </li>
          <li>
            <img src="../img/i8.jpg" alt="" />
          </li>
        </ul>
      </div>
    );
  }
}
