import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SignupThunk } from "../redux/actions/User";
export default function SignupForm(props) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const userStore = useSelector((state) => state.userStore);
  let authenticated = userStore.isAuthenticated;
  const dispatch = useDispatch();
  console.log(authenticated);

  function nameOnChange(event) {
    setName(event.target.value);
  }
  function usernameOnChange(event) {
    setUsername(event.target.value);
  }
  function passwordOnChange(event) {
    setPassword(event.target.value);
  }
  function formOnSubmit(event) {
    event.preventDefault();
    dispatch(SignupThunk(name, username, password));
    setUsername("");
    setPassword("");
    setName("");
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
            <p className="h4 mb-4">Signup</p>
            <input
              type="text"
              value={name}
              name="name"
              onChange={nameOnChange}
              className="form-control mb-4"
              placeholder="Name"
            />
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
              Signup
            </button>

            <small class="form-text text-muted mb-4">
              <ol>
                <li>
                  Passes through SignupThunk(name, username,
                  password)
                </li>
                <li>Dispatches Signup</li>
              </ol>
            </small>
          </form>
        </div>
      </section>
    </div>
  );
}
