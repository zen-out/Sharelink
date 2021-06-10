import React from "react";
export default function LoginForm(props) {
  return (
    <div className="container my-5 py-5 z-depth-1">
      <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
        <div className="row d-flex justify-content-center">
          <form
            className="text-center"
            onSubmit={props.formOnSubmit}
            method="post"
          >
            <p className="h4 mb-4">Login</p>
            <input
              type="text"
              value={props.username}
              name="username"
              onChange={props.usernameOnChange}
              className="form-control mb-4"
              placeholder="Username"
            />

            <input
              type="password"
              name="password"
              onChange={props.passwordOnChange}
              value={props.password}
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
