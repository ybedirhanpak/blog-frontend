import React, { Component } from "react";

export default class Colorlib extends Component {
  render() {
    return (
      <div className="row footer-bottom d-flex justify-content-between align-items-center">
        <p className="col-lg-12 footer-text text-center">
          {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
          Copyright &copy;
          <script>document.write(new Date().getFullYear());</script> All rights
          reserved | This template is made with{" "}
          <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
          <a href="https://colorlib.com" target="_blank">
            Colorlib
          </a>
          {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
        </p>
      </div>
    );
  }
}
