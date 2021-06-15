const express = require("express");

class UserRouter {
  constructor(userService) {
    this.userService = userService;
  }
  router() {
    let router = express.Router();
    router.get("/api/users", this.getAllUsers.bind(this));
    router.post("/api/signup", this.signup.bind(this));
    router.post("/api/login", this.login.bind(this));
    router.get("/api/users/:id", this.getUser.bind(this));
    router.put("/api/users/:id", this.editUser.bind(this));
    router.delete(
      "/api/users/:id",
      this.deleteUser.bind(this)
    );
    return router;
  }
  getAllUsers(request, response) {
    console.log(
      "Hit getting all users route. Should hit service next."
    );
    return this.userService.getAllUsers().then((users) => {
      response.status(200).json(users);
    });
    // get all users
  }

  signup(request, response) {
    console.log(
      "Hit signup route. Should hit service next."
    );
    let name = request.body.name;
    let username = request.body.username;
    let password = request.body.password;
    return this.userService
      .signup(name, username, password)
      .then((token) => {
        console.log(token);
        response.json(token);
      })
      .catch((error) => {
        console.log("error", error);
      });
    // post user
  }
  login(request, response) {
    console.log("Hit login route. Should hit login next.");
    // post user
    let username = request.body.username;
    let password = request.body.password;
    return this.userService
      .login(username, password)
      .then((token) => {
        console.log("logged in - token", token);
        response.json(token);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
  getUser(request, response) {
    console.log(
      "Hit get user route. Should hit service next."
    );
    let user = request.params.id;
    return this.userService.getUser(user).then((user) => {
      response.json(user);
    });
    // get specific user
  }
  editUser(request, response) {
    console.log(
      "Hit edit user route. Should hit service next."
    );
    let id = request.params.id;
    let newUser = request.body;
    return this.userService
      .editUser(id, newUser)
      .then((edited) => {
        response.send(edited);
      });

    // edit user
  }
  deleteUser(request, response) {
    console.log(
      "Hit delete user route. Should hit service next."
    );
    let id = request.params.id;
    return this.userService
      .deleteUser(id)
      .then((deleted) => {
        response.send(deleted);
      });
    // delete user
  }
}

module.exports = UserRouter;
