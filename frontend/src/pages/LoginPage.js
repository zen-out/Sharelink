import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import { useSelector, useDispatch } from "react-redux";
import { LoginThunk } from "../redux/actions/User";

function LoginPage() {
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
    dispatch(LoginThunk(username, password));
    setUsername("");
    setPassword("");
  }
  return (
    <div>
      <LoginForm
        formOnSubmit={formOnSubmit}
        username={username}
        usernameOnChange={usernameOnChange}
        password={password}
        passwordOnChange={passwordOnChange}
      />
    </div>
  );
}

export default LoginPage;
