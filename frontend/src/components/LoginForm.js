import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const userStore = useSelector((state) => state.userStore);
  console.log("User store", userStore);
  const dispatch = useDispatch();

  function usernameOnChange(event) {
    setUsername(event.target.value);
  }
  function passwordOnChange(event) {
    setPassword(event.target.value);
  }
  function formOnSubmit(event) {
    event.preventDefault();
    let user = {
      username: username,
      password: password,
    };
    console.log("User", user);
  }

  return (
    <div className="container my-5 py-5 z-depth-1">
      <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
        <div className="row d-flex justify-content-center">
          <form
            className="text-center"
            onSubmit={formOnSubmit}
            method="post"
          >
            <p className="h4 mb-4">Login</p>
            <input
              type="text"
              value={username}
              name="username"
              onChange={usernameOnChange}
              className="form-control mb-4"
              placeholder="Username"
            />

            <input
              type="password"
              name="password"
              onChange={passwordOnChange}
              value={password}
              className="form-control"
              placeholder="Password"
            />

            <br />
            <button
              type="submit"
              className="btn btn-outline-dark waves-effect"
            >
              Login
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
