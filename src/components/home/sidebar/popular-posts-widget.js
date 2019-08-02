import React, { Component } from "react";

export default class PopularPostsWidget extends Component {
  render() {
    return (
      <div className="single-widget popular-posts-widget">
        <div className="jq-tab-wrapper" id="horizontalTab">
          <div className="jq-tab-menu">
            <div className="jq-tab-title active" data-tab="1">
              Popular
            </div>
            <div className="jq-tab-title" data-tab="2">
              Latest
            </div>
          </div>
          <div className="jq-tab-content-wrapper">
            <div className="jq-tab-content active" data-tab="1">
              <div className="single-popular-post d-flex flex-row">
                <div className="popular-thumb">
                  <img
                    className="img-fluid"
                    src="img/posts/carousel/stories1.jpg"
                    alt=""
                  />
                </div>
                <div className="popular-details">
                  <h6>
                    <a href="">2nd Gen Smoke Alarm get up from sleep</a>
                  </h6>
                  <p>September 14, 2018</p>
                </div>
              </div>
              <div className="single-popular-post d-flex flex-row">
                <div className="popular-thumb">
                  <img
                    className="img-fluid"
                    src="img/posts/carousel/stories2.jpg"
                    alt=""
                  />
                </div>
                <div className="popular-details">
                  <h6>
                    <a href="">2nd Gen Smoke Alarm get up from sleep</a>
                  </h6>
                  <p>September 14, 2018</p>
                </div>
              </div>
              <div className="single-popular-post d-flex flex-row">
                <div className="popular-thumb">
                  <img
                    className="img-fluid"
                    src="img/posts/carousel/stories3.jpg"
                    alt=""
                  />
                </div>
                <div className="popular-details">
                  <h6>
                    <a href="">2nd Gen Smoke Alarm get up from sleep</a>
                  </h6>
                  <p>September 14, 2018</p>
                </div>
              </div>
              <div className="single-popular-post d-flex flex-row">
                <div className="popular-thumb">
                  <img
                    className="img-fluid"
                    src="img/posts/carousel/stories4.jpg"
                    alt=""
                  />
                </div>
                <div className="popular-details">
                  <h6>
                    <a href="">2nd Gen Smoke Alarm get up from sleep</a>
                  </h6>
                  <p>September 14, 2018</p>
                </div>
              </div>
            </div>

            <div className="jq-tab-content active" data-tab="2">
              <div className="single-popular-post d-flex flex-row">
                <div className="popular-thumb">
                  <img
                    className="img-fluid"
                    src="img/posts/carousel/stories2.jpg"
                    alt=""
                  />
                </div>
                <div className="popular-details">
                  <h6>
                    <a href="">2nd Gen Smoke Alarm get up from sleep</a>
                  </h6>
                  <p>September 14, 2018</p>
                </div>
              </div>
              <div className="single-popular-post d-flex flex-row">
                <div className="popular-thumb">
                  <img
                    className="img-fluid"
                    src="img/posts/carousel/stories3.jpg"
                    alt=""
                  />
                </div>
                <div className="popular-details">
                  <h6>
                    <a href="">2nd Gen Smoke Alarm get up from sleep</a>
                  </h6>
                  <p>September 14, 2018</p>
                </div>
              </div>
              <div className="single-popular-post d-flex flex-row">
                <div className="popular-thumb">
                  <img
                    className="img-fluid"
                    src="img/posts/carousel/stories1.jpg"
                    alt=""
                  />
                </div>
                <div className="popular-details">
                  <h6>
                    <a href="">2nd Gen Smoke Alarm get up from sleep</a>
                  </h6>
                  <p>September 14, 2018</p>
                </div>
              </div>
              <div className="single-popular-post d-flex flex-row">
                <div className="popular-thumb">
                  <img
                    className="img-fluid"
                    src="img/posts/carousel/stories4.jpg"
                    alt=""
                  />
                </div>
                <div className="popular-details">
                  <h6>
                    <a href="">2nd Gen Smoke Alarm get up from sleep</a>
                  </h6>
                  <p>September 14, 2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
