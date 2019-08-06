import React, { Component } from "react";
import { MDBContainer, MDBAlert } from "mdbreact";

//Css file
import "./user-login.css";

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password1: "",
      fillAreasError: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitLogin = () => {
    if (this.state.username === "" || this.state.password1 === "") {
      this.setState({
        fillAreasError: true
      });
    }
  };

  render() {
    console.log("user register page", this.state);
    return (
      <div className="login-image">
        <div className="register">
          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-6">
              <h3 class="mb-30 login-h3">Login</h3>
              <form action="#" autoComplete="off">
                <div class="mt-10">
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    class="single-input-primary"
                    onChange={this.handleChange}
                  />
                </div>
                <div class="mt-10">
                  <input
                    type="password"
                    name="password1"
                    placeholder="Password"
                    class="single-input-primary"
                    onChange={this.handleChange}
                  />
                </div>
                <button
                  href="#"
                  class="genric-btn primary-border circle arrow login-button"
                  onClick={this.submitLogin}
                >
                  Login!
                  <span class="lnr lnr-arrow-right" />
                </button>
              </form>
              <br /> <br />
            </div>
          </div>
          {/* UI MESSAGES */}
          {this.state.fillAreasError === true ? (
            <MDBContainer>
              <MDBAlert color="danger">
                <h5 className="alert-heading"> Please fill all areas </h5>
              </MDBAlert>
            </MDBContainer>
          ) : null}
        </div>
      </div>
    );
  }
}

export default UserLogin;
