import {
  userReducer,
  userInitialState,
} from "../redux/reducers/User";
import {
  SignupThunk,
  LoginThunk,
  SignupRequest,
  SignupSuccess,
  SignupFailure,
  LoginRequest,
  LoginSuccess,
  LoginFailure,
  Logout,
} from "../redux/actions/User";
describe("user reducer", () => {
  test("signup thunk dispatches if correct", () => {});
  test("signup thunk dispatches if incorrect", () => {});
  test("login thunk dispatches if correct", () => {});
  test("login thunk dispatches if incorrect", () => {});
  test("signup request action", () => {
    let signupRequestState = userReducer(
      userInitialState,
      SignupRequest("lesley", "lezzles", "orange")
    );
    expect(signupRequestState).toEqual({
      isAuthenticated: false,
      isInvalid: false,
      isLoading: true,
      name: "lesley",
      username: "lezzles",
      password: "orange",
    });
  });
  test("signup success action", () => {
    let signupSuccessState = userReducer(
      userInitialState,
      SignupSuccess("token")
    );
    // console.log(signupSuccessState);
    expect(signupSuccessState).toEqual({
      isAuthenticated: true,
      isInvalid: false,
      isLoading: false,
      token: "token",
    });
  });
  test("signup failure action", () => {
    let signupFailureState = userReducer(
      userInitialState,
      SignupFailure("no token")
    );
    // console.log(signupFailureState);
    expect(signupFailureState).toEqual({
      isAuthenticated: false,
      isInvalid: true,
      isLoading: false,
      error: "no token",
    });
  });
  test("login request action", () => {
    let loginRequestState = userReducer(
      userInitialState,
      LoginRequest("lezzles", "orange")
    );
    // console.log(loginRequestState);
    expect(loginRequestState).toEqual({
      isAuthenticated: false,
      isInvalid: false,
      isLoading: true,
      username: "lezzles",
      password: "orange",
    });
  });
  test("login success action", () => {
    let loginSuccessState = userReducer(
      userInitialState,
      LoginSuccess("token")
    );
    // console.log(loginSuccessState);
    expect(loginSuccessState).toEqual({
      isAuthenticated: true,
      isInvalid: false,
      isLoading: false,
      token: "token",
    });
  });
  test("login failure action", () => {
    let loginFailureState = userReducer(
      userInitialState,
      LoginFailure("invalid password")
    );
    // console.log(loginFailureState);
    expect(loginFailureState).toEqual({
      isAuthenticated: false,
      isLoading: false,
      isInvalid: true,
      error: "invalid password",
    });
  });
  test("logout action", () => {
    let logoutState = userReducer(
      userInitialState,
      Logout()
    );
    // console.log(logoutState);
    expect(logoutState).toEqual({
      isAuthenticated: false,
      isLoading: false,
      isInvalid: false,
    });
  });
});
