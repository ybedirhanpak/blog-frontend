import React, { Component } from "react";

export default class AddComment extends Component {
  render() {
    return (
      <div className="comment-form">
        <h4>Leave a Reply</h4>
        <form>
          <div className="form-group form-inline">
            <div className="form-group col-lg-6 col-md-6 name">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Name"
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Enter Name'"
              />
            </div>
            <div className="form-group col-lg-6 col-md-6 email">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email address"
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Enter email address'"
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder="Subject"
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'Subject'"
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control mb-10"
              rows="5"
              name="message"
              placeholder="Messege"
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'Messege'"
              required=""
            />
          </div>
          <a href="#" className="primary-btn submit_btn text-uppercase">
            Send Message
          </a>
        </form>
      </div>
    );
  }
}
