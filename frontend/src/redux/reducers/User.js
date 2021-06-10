import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../actions/User";

export const userInitialState = {
  isAuthenticated:
    false || localStorage.getItem("token") != null,
  isInvalid: false,
  isLoading: false,
};

export function userReducer(
  state = userInitialState,
  action
) {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
        name: action.payload.name,
        username: action.payload.username,
        password: action.payload.password,
      };

    case SIGNUP_SUCCESS:
      return {
        isAuthenticated: true,
        isInvalid: false,
        isLoading: false,
        token: action.payload.token,
      };
    case SIGNUP_FAILURE:
      return {
        isAuthenticated: false,
        isInvalid: true,
        isLoading: false,
        error: action.payload.error,
      };
    case LOGIN_REQUEST:
      return {
        isLoading: true,
        username: action.payload.username,
        password: action.payload.password,
      };
    case LOGIN_SUCCESS:
      return {
        isAuthenticated: true,
        isInvalid: false,
        isLoading: false,
        token: action.payload.token,
      };
    case LOGIN_FAILURE:
      return {
        isAuthenticated: false,
        isLoading: false,
        isInvalid: true,
        error: action.payload.error,
      };

    case LOGOUT:
      return {
        isAuthenticated: false,
        isLoading: false,
        isInvalid: false,
      };
    default:
      return state;
  }
}
