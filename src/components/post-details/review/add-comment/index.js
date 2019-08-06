import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <div class="comment-form">
        <h4>Leave a Reply</h4>
        <form>
          <div class="form-group form-inline">
            <div class="form-group col-lg-6 col-md-6 name">
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Enter Name"
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Enter Name'"
              />
            </div>
            <div class="form-group col-lg-6 col-md-6 email">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter email address"
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Enter email address'"
              />
            </div>
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="subject"
              placeholder="Subject"
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'Subject'"
            />
          </div>
          <div class="form-group">
            <textarea
              class="form-control mb-10"
              rows="5"
              name="message"
              placeholder="Messege"
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'Messege'"
              required=""
            />
          </div>
          <a href="#" class="primary-btn submit_btn text-uppercase">
            Send Message
          </a>
        </form>
      </div>
    );
  }
}
