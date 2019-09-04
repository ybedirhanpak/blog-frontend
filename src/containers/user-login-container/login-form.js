import React, { Component } from "react";
//Redux
import { connect } from "react-redux";
import {
  postUserLogin,
  statusTypes,
  actionCreators
} from "../../redux/actions/user";
import LoadingSpinner from "../../components/loading-spinner";

const EMPTY_STRING = "EMPTY_STRING";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: EMPTY_STRING,
      password: EMPTY_STRING
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitLogin = event => {
    event.preventDefault();
    const userLogin = {
      userName: this.state.username,
      password: this.state.password
    };
    this.props.postUserLogin(userLogin);
  };

  giveAlert = event => {
    event.preventDefault();
    if (this.state.username === EMPTY_STRING) {
      this.setState({ username: "" });
    }

    if (this.state.password === EMPTY_STRING) {
      this.setState({ password: "" });
    }
  };

  render() {
    console.log("login form state", this.state);

    const allInputsFilled =
      this.state.username &&
      this.state.username !== EMPTY_STRING &&
      this.state.password &&
      this.state.password !== EMPTY_STRING;

    return (
      <div>
        <h2 className="mb-30">Login</h2>
        <form action="#" autoComplete="off">
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
              type="password"
              name="password"
              placeholder="Password"
              className="single-input-primary"
              onChange={this.handleChange}
            />
            {!this.state.password ? (
              <div className="alert alert-danger mt-1" role="alert">
                Please enter your password!
              </div>
            ) : null}
          </div>
          <button
            href="#"
            className="genric-btn primary-border circle arrow login-button"
            onClick={allInputsFilled ? this.submitLogin : this.giveAlert}
            data-toggle="modal"
            data-target="#pleaseWaitModal"
          >
            Login!
            <span className="lnr lnr-arrow-right" />
          </button>
        </form>
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
                  {this.props.loginStatus.loginInProgress ===
                  statusTypes.positive ? (
                    <>
                      <h2 className="modal-header"> Please Wait...</h2>
                      <LoadingSpinner />
                    </>
                  ) : null}
                  {this.props.loginStatus.loginInProgress ===
                  statusTypes.negative ? (
                    <>
                      <h3 className="modal-header">
                        {this.props.loginStatus.loginResponse.context}
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
        <br /> <br />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginStatus: state.user.loginStatus
  };
};

const mapDispatchToProps = {
  postUserLogin,
  resetLogin: actionCreators.resetLogin
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
