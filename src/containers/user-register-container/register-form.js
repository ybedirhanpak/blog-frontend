import React, { Component } from "react";

//Redux
import { connect } from "react-redux";
import {
  postUserRegister,
  statusTypes,
  actionCreators
} from "../../redux/actions/user";

//Components
import LoadingSpinner from "../../components/loading-spinner";

const EMPTY_STRING = "EMPTY_STRING";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: EMPTY_STRING,
      lastName: EMPTY_STRING,
      username: EMPTY_STRING,
      email: EMPTY_STRING,
      password1: EMPTY_STRING,
      password2: EMPTY_STRING,
      birthDay: EMPTY_STRING
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.resetRegister();
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitRegister = event => {
    event.preventDefault();
    const userRegisterBody = {
      userName: this.state.username,
      email: this.state.email,
      password: this.state.password1,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      birthDay: this.state.birthDay
    };
    this.props.postUserRegister(userRegisterBody);
  };

  render() {
    console.log("user register form state", this.state);

    const allInputsFilled =
      this.state.firstName &&
      this.state.firstName !== EMPTY_STRING &&
      this.state.lastName &&
      this.state.lastName !== EMPTY_STRING &&
      this.state.username &&
      this.state.username !== EMPTY_STRING &&
      this.state.email &&
      this.state.email !== EMPTY_STRING &&
      this.state.password1 &&
      this.state.password1 !== EMPTY_STRING &&
      this.state.password2 &&
      this.state.password2 !== EMPTY_STRING &&
      this.state.birthDay &&
      this.state.birthDay !== EMPTY_STRING;

    return (
      <div className="container-fluid register">
        <h2 className="mb-30">Registration</h2>
        <form action="#" autoComplete="off">
          <div className="mt-10">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="single-input-primary"
              onChange={this.handleChange}
            />
            {!this.state.firstName ? (
              <div className="alert alert-danger mt-1" role="alert">
                Please enter your name!
              </div>
            ) : null}
          </div>
          <div className="mt-10">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="single-input-primary"
              onChange={this.handleChange}
            />
            {!this.state.lastName ? (
              <div className="alert alert-danger mt-1" role="alert">
                Please enter your last name!
              </div>
            ) : null}
          </div>
          <div className="mt-10">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="single-input-primary"
              onChange={this.handleChange}
            />
            {!this.state.username ? (
              <div className="alert alert-danger mt-1" role="alert">
                Please enter your username!
              </div>
            ) : null}
          </div>
          <div className="mt-10">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="single-input-primary"
              onChange={this.handleChange}
            />
            {!this.state.email ? (
              <div className="alert alert-danger mt-1" role="alert">
                Please enter your e-mail!
              </div>
            ) : null}
          </div>
          <div className="mt-10">
            <input
              type="password"
              name="password1"
              placeholder="Password"
              className="single-input-primary"
              onChange={this.handleChange}
            />
            {!this.state.password1 ? (
              <div className="alert alert-danger mt-1" role="alert">
                Please enter your password!
              </div>
            ) : null}
          </div>
          <div className="mt-10">
            <input
              type="password"
              name="password2"
              placeholder="Please type your password again"
              className="single-input-primary"
              onChange={this.handleChange}
            />
            {!this.state.password2 ? (
              <div className="alert alert-danger mt-1" role="alert">
                Please enter your password again!
              </div>
            ) : null}
          </div>
          <div className="mt-10 birthday-form">
            <h3 className="birthday-header">Birthday</h3>
            <input
              type="date"
              name="birthDay"
              className="single-input-primary"
              placeholder="Birthday"
              onChange={this.handleChange}
            />
          </div>
          {!this.state.birthDay ? (
            <div className="alert alert-danger mt-1" role="alert">
              Please enter your birthday!
            </div>
          ) : null}

          {!allInputsFilled ? (
            <div className="alert alert-danger mt-1" role="alert">
              Please enter all areas!
            </div>
          ) : null}
          {this.state.password1 !== this.state.password2 ? (
            <div className="alert alert-danger mt-1" role="alert">
              Your passwords are not equal!
            </div>
          ) : null}
          <div className="register-button-wrapper">
            <button
              href=""
              className="genric-btn primary-border circle arrow "
              onClick={
                allInputsFilled
                  ? this.submitRegister
                  : event => {
                      event.preventDefault();
                    }
              }
              data-toggle="modal"
              data-target="#pleaseWaitModal"
            >
              Join Us!
              <span className="lnr lnr-arrow-right" />
            </button>
          </div>
        </form>
        <br /> <br />
        {allInputsFilled ? (
          <div
            id="pleaseWaitModal"
            className="modal fade please-wait-modal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="pleaseWaitModal"
            aria-hidden="true"
            data-backdrop="static"
            data-keyboard="false"
            style={{ display: "none" }}
          >
            <div className="modal-dialog please-wait-modal-dialog">
              <div className="modal-content">
                <div className="container">
                  {this.props.registerStatus.registerInProgress ===
                  statusTypes.positive ? (
                    <>
                      <h2 className="modal-header"> Please Wait...</h2>
                      <LoadingSpinner />
                    </>
                  ) : null}
                  {this.props.registerStatus.registerInProgress ===
                  statusTypes.negative ? (
                    <>
                      <h3 className="modal-header">
                        {this.props.registerStatus.registerResponse.context}
                      </h3>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-light"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    registerStatus: state.user.registerStatus
  };
};

const mapDispatchToProps = {
  postUserRegister,
  resetRegister: actionCreators.resetRegister
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm);
