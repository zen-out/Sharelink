import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import ReflectionsPage from "../pages/ReflectionsPage";
import SharelinkPage from "../pages/SharelinkPage";
import SignupPage from "../pages/SignupPage";
import HomePage from "../pages/HomePage";
import NoMatchPage from "../pages/NoMatchPage";
import BugsPage from "../pages/BugsPage";

function Navbar() {
  return (
    <Router>
      <nav
        className="navbar navbar-light blue lighten-4"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">
              Signup
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>{" "}
          <li className="nav-item">
            <Link className="nav-link" to="/reflections">
              Reflections
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sharelink">
              Sharelink
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/bugs">
              Bugs
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route
          exact
          path="/signup"
          component={SignupPage}
        />
        <Route
          exact
          path="/reflections"
          component={ReflectionsPage}
        />
        <Route
          exact
          path="/sharelink"
          component={SharelinkPage}
        />
        <Route exact path="/bugs" component={BugsPage} />
        <Route component={NoMatchPage} />
      </Switch>
    </Router>
  );
}

export default Navbar;
