import React, { Component } from "react";
import "./user-register-details.scss";

import ImageEditor from "../../../components/image-editor";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import UserBio from "../../../components/user-bio";
import InterestedCategories from "../../../components/user-interested-categories";

export default class UserRegisterDetails extends Component {
  render() {
    return (
      <div
        className="user-register-detail-background"
        style={{ minHeight: window.innerHeight }}
      >
        <div className="container-fluid">
          <h2 className="complete-header  mb-50">Complete Your Profile!</h2>
          <div className="user-register-detail">
            <Router>
              <Switch>
                <Route
                  path="/complete-register"
                  component={ImageEditor}
                  exact
                />
                <Route
                  path="/complete-register/user-details"
                  component={UserBio}
                />
                <Route
                  path="/complete-register/interested-categories"
                  component={InterestedCategories}
                />
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}
