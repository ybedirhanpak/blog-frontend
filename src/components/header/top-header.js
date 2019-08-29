import React, { Component } from "react";

//Route
import { Link } from "react-router-dom";

export default class TopHeader extends Component {
  render() {
    return (
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-6 col-sm-6 search-trigger">
              <a href="#" className="search search-icon">
                <i className="lnr lnr-magnifier" id="search" />
              </a>
              <Link to="/login" className="primary-border circle ml-10">
                Sign In!
              </Link>
              <Link to="/register" className="primary circle hide-mobile ml-10">
                Join Us!
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
