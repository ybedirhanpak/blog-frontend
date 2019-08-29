import { actionTypes, statusTypes } from "../actions/user";

const initialState = {
  current: null,
  registerStatus: {
    registerInProgress: statusTypes.empty,
    successfulRegister: statusTypes.empty,
    registerResponse: {}
  },
  loginStatus: {
    loginInProgress: statusTypes.empty,
    successfulLogin: statusTypes.empty,
    loginResponse: {}
  }
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.RESET_REGISTER:
      return {
        ...state,
        registerStatus: initialState.registerStatus
      };
    case actionTypes.INITIALIZE_REGISTER:
      return {
        ...state,
        registerStatus: {
          ...state.registerStatus,
          registerInProgress: statusTypes.positive
        }
      };
    case actionTypes.COMPLETE_REGISTER:
      return {
        ...state,
        registerStatus: {
          registerInProgress: statusTypes.negative,
          successfulRegister: statusTypes.positive,
          registerResponse: {
            context: "Your registration is successful"
          }
        }
      };
    case actionTypes.FAIL_REGISTER:
      return {
        ...state,
        registerStatus: {
          registerInProgress: statusTypes.negative,
          successfulRegister: statusTypes.negative,
          registerResponse: {
            context: action.payload.context
          }
        }
      };
    case actionTypes.RESET_LOGIN:
      return {
        ...state,
        loginStatus: initialState.loginStatus
      };
    case actionTypes.INITIALIZE_LOGIN:
      return {
        ...state,
        loginStatus: {
          ...state.loginStatus,
          loginInProgress: statusTypes.positive
        }
      };
    case actionTypes.COMPLETE_LOGIN:
      return {
        ...state,
        current: action.payload,
        loginStatus: {
          loginInProgress: statusTypes.negative,
          successfulLogin: statusTypes.positive,
          loginResponse: {
            context: "Login successful"
          }
        }
      };
    case actionTypes.FAIL_LOGIN:
      return {
        ...state,
        loginStatus: {
          loginInProgress: statusTypes.negative,
          successfulLogin: statusTypes.negative,
          loginResponse: {
            context: action.payload.context
          }
        }
      };
    default:
      return state;
  }
}
