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
      <div className="user-register-detail-background">
        <div className="row user-register-detail-row">
          <div className="col-sm-12 col-md-2 col-lg-3" />
          <div className="col-sm-12 col-md-8 col-lg-6">
            <div className="container-fluid user-register-detail">
              <h2 className="mb-50">Complete Your Profile!</h2>
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
      </div>
    );
  }
}
