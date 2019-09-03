import { API } from "../../helpers/api-config";
import { PostWithUrlBody } from "../../helpers/url-helper";

/* Constants */

export const statusTypes = {
  empty: "empty",
  positive: "positive",
  negative: "negative"
};

/* Action Types */

const RESET_REGISTER = "RESET_REGISTER";
const INITIALIZE_REGISTER = "INITIALIZE_REGISTER";
const COMPLETE_REGISTER = "COMPLETE_REGISTER";
const FAIL_REGISTER = "FAIL_REGISTER";
const RESET_LOGIN = "RESET_LOGIN";
const INITIALIZE_LOGIN = "INITIALIZE_LOGIN";
const COMPLETE_LOGIN = "COMPLETE_LOGIN";
const FAIL_LOGIN = "FAIL_LOGIN";
const LOGOUT = "LOGOUT";

export const actionTypes = {
  RESET_REGISTER,
  INITIALIZE_REGISTER,
  COMPLETE_REGISTER,
  FAIL_REGISTER,
  RESET_LOGIN,
  INITIALIZE_LOGIN,
  COMPLETE_LOGIN,
  FAIL_LOGIN,
  LOGOUT
};

export const actionCreators = {
  resetRegister,
  resetLogin,
  logout
};

function resetRegister() {
  return {
    type: RESET_REGISTER
  };
}

function initializeRegister() {
  return {
    type: INITIALIZE_REGISTER
  };
}

function completeRegister(message) {
  return {
    type: COMPLETE_REGISTER,
    payload: message
  };
}

function failRegister(message) {
  return {
    type: FAIL_REGISTER,
    payload: message
  };
}

function resetLogin() {
  return {
    type: RESET_LOGIN
  };
}

function initializeLogin() {
  return {
    type: INITIALIZE_LOGIN
  };
}

function completeLogin(userConfig) {
  return {
    type: COMPLETE_LOGIN,
    payload: userConfig
  };
}

function failLogin(message) {
  return {
    type: FAIL_LOGIN,
    payload: message
  };
}

function logout() {
  return {
    type: LOGOUT
  };
}

/* Api Call Functions */

/**
 * Sends register request to the server
 * @param {*} body includes the information about user being registered.
 * body : {
 *  email, **
 *  password, **
 *  userName, **
 *  birthDate, ?
 *  description, ?
 *  theme, ?
 *  facebookLink, ?
 *  twitterLink, ?
 *  linkedinLink, ?
 *
 *  ** must
 *  ? optional
 *
 * }
 */
export const postUserRegister = body => {
  return dispatch => {
    dispatch(initializeRegister());
    PostWithUrlBody(API + "/users/register", body)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          response.json().then(data => {
            console.log("Register successful ", data);
            dispatch(completeRegister(data));
          });
        } else {
          response.json().then(data => {
            console.log("Error when registering", data);
            dispatch(failRegister(data));
          });
        }
      })
      .catch(console.log("Error when registering"));
  };
};

/**
 * Sends login request to the server
 * @param {*} body includes the information about user being logged in
 * body: {
 *  email, ***
 *  username, ***
 *  password, **
 *
 *  *** body must include either email or username
 *  ** must
 * }
 * .
 */
export const postUserLogin = body => {
  return dispatch => {
    dispatch(initializeLogin());
    PostWithUrlBody(API + "/users/login", body)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          response.json().then(data => {
            console.log("Login successful ", data);
            dispatch(completeLogin(data));
          });
        } else {
          response.json().then(data => {
            console.log("Error when logging in", data);
            dispatch(failLogin(data));
          });
        }
      })
      .catch(console.log("Error when registering"));
  };
};
