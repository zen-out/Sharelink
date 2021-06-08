export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

export function SignupThunk(name, username, password) {}

export function LoginThunk(username, password) {}

export function SignupRequest(name, username, password) {
  return {
    type: SIGNUP_REQUEST,
    payload: {
      name: name,
      username: username,
      password: password,
    },
  };
}
// do we need a token here?
export function SignupSuccess(token) {
  return {
    type: SIGNUP_SUCCESS,
    payload: {
      token: token,
    },
  };
}

export function SignupFailure(error) {
  return {
    type: SIGNUP_FAILURE,
    payload: {
      error: error,
    },
  };
}

export function LoginRequest(username, password) {
  return {
    type: LOGIN_REQUEST,
    payload: {
      username: username,
      password: password,
    },
  };
}

export function LoginSuccess(token) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      token: token,
    },
  };
}

export function LoginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    payload: {
      error: error,
    },
  };
}

export function Logout() {
  return {
    type: LOGOUT,
  };
}
