import React, { Component } from "react";

//Css file
import "./user-register.scss";

class UserRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      firstNameError: false,
      lastName: "",
      lastNameError: false,
      username: "",
      usernameError: false,
      email: "",
      emailError: false,
      password1: "",
      password1Error: false,
      password2: "",
      password2Error: false,
      passwordNotEqualError: false,
      bday: "",
      bdayError: false,
      gender: "",
      genderError: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      firstNameError: false,
      lastNameError: false,
      usernameError: false,
      emailError: false,
      password1Error: false,
      password2Error: false,
      passwordNotEqualError: false,
      bdayError: false,
      genderError: false
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      firstNameError: false,
      lastNameError: false,
      usernameError: false,
      emailError: false,
      password1Error: false,
      password2Error: false,
      passwordNotEqualError: false,
      bdayError: false,
      genderError: false
    });
  };

  submitRegister = event => {
    event.preventDefault();
    if (this.state.firstName === "") {
      this.setState({ firstNameError: true });
    } else if (this.state.lastName === "") {
      this.setState({ lastNameError: true });
    } else if (this.state.username === "") {
      this.setState({ usernameError: true });
    } else if (this.state.email === "") {
      this.setState({ emailError: true });
    } else if (this.state.password1 === "") {
      this.setState({ password1Error: true });
    } else if (this.state.password2 === "") {
      this.setState({ password2Error: true });
    } else if (this.state.bday === "") {
      this.setState({ bdayError: true });
    } else if (
      this.state.gender === "" ||
      this.state.gender === "genderSelect"
    ) {
      this.setState({ genderError: true });
    } else if (this.state.password1 !== this.state.password2) {
      this.setState({ passwordNotEqualError: true });
    }
  };

  render() {
    console.log("user register page", this.state);
    return (
      <div className="register-background">
        <div className="row register-row">
          <div className="col-sm-12 col-md-2 col-lg-3" />
          <div className="col-sm-12 col-md-8 col-lg-6">
            <div className="container-fluid register">
              <h2 class="mb-30">Registration</h2>
              <form action="#" autoComplete="off">
                <div class="mt-10">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    class="single-input-primary"
                    onChange={this.handleChange}
                  />
                  {this.state.firstNameError === true ? (
                    <div class="alert alert-danger" role="alert">
                      Please fill your Name!
                    </div>
                  ) : null}
                </div>
                <div class="mt-10">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    class="single-input-primary"
                    onChange={this.handleChange}
                  />
                  {this.state.lastNameError === true ? (
                    <div class="alert alert-danger" role="alert">
                      Please fill your Last Name!
                    </div>
                  ) : null}
                </div>
                <div class="mt-10">
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    class="single-input-primary"
                    onChange={this.handleChange}
                  />
                  {this.state.usernameError === true ? (
                    <div class="alert alert-danger" role="alert">
                      Please fill your Username!
                    </div>
                  ) : null}
                </div>
                <div class="mt-10">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    class="single-input-primary"
                    onChange={this.handleChange}
                  />
                  {this.state.emailError === true ? (
                    <div class="alert alert-danger" role="alert">
                      Please fill your e-mail!
                    </div>
                  ) : null}
                </div>
                <div class="mt-10">
                  <input
                    type="password"
                    name="password1"
                    placeholder="Password"
                    class="single-input-primary"
                    onChange={this.handleChange}
                  />
                  {this.state.password1Error === true ? (
                    <div class="alert alert-danger" role="alert">
                      Please fill your Password!
                    </div>
                  ) : null}
                </div>
                <div class="mt-10">
                  <input
                    type="password"
                    name="password2"
                    placeholder="Please type your password again"
                    class="single-input-primary"
                    onChange={this.handleChange}
                  />
                  {this.state.password2Error === true ? (
                    <div class="alert alert-danger" role="alert">
                      Please fill your password again!
                    </div>
                  ) : null}
                </div>
                <div className="mt-10 birthday-form">
                  <h3 className="birthday-header">Birthday</h3>
                  <input
                    type="date"
                    name="bday"
                    class="single-input-primary"
                    placeholder="Birthday"
                    onChange={this.handleChange}
                  />
                </div>
                {this.state.bdayError === true ? (
                  <div class="alert alert-danger" role="alert">
                    Please fill your bday!
                  </div>
                ) : null}

                <div className="mt-10 gender-form">
                  <h3 className="gender-header">Gender</h3>
                  <select
                    class="single-input-primary gender-dropdown"
                    name="gender"
                    onChange={this.handleChange}
                  >
                    <option value="genderSelect">Please Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                {this.state.genderError === true ? (
                  <div class="alert alert-danger" role="alert">
                    Please select your gender!
                  </div>
                ) : null}

                {this.state.passwordNotEqualError === true ? (
                  <div class="alert alert-danger" role="alert">
                    Your passwords are not equal!
                  </div>
                ) : null}

                <button
                  href="#"
                  class="genric-btn primary-border circle arrow"
                  onClick={this.submitRegister}
                >
                  Join Us!
                  <span class="lnr lnr-arrow-right" />
                </button>
              </form>
              <br /> <br />
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-3" />
      </div>
    );
  }
}

export default UserRegister;
