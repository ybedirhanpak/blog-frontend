import React, { Component } from "react";

export default class Newsletter extends Component {
  render() {
    return (
      <div className="single-footer-widget">
        <h6 className="footer_title">Newsletter</h6>
        <p>Stay updated with our latest trends</p>
        <div id="mc_embed_signup">
          <form
            target="_blank"
            action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
            method="get"
            className="subscribe_form relative"
          >
            <div className="input-group d-flex flex-row">
              <input
                name="EMAIL"
                placeholder="Email Address"
                required=""
                type="email"
              />
              <button className="btn sub-btn">
                <span className="lnr lnr-arrow-right" />
              </button>
            </div>
            <div className="mt-10 info" />
          </form>
        </div>
      </div>
    );
  }
}
