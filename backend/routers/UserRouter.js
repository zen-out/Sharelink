const express = require("express");

class UserRouter {
  constructor(userService) {
    this.userService = userService;
  }
  router() {
    let router = express.Router();
    router.get("/", this.getAllUsers.bind(this));
    router.post("/", this.signup.bind(this));
    router.post("/", this.login.bind(this));
    router.get("/:id", this.getUser.bind(this));
    router.put("/:id", this.editUser.bind(this));
    router.delete("/:id", this.deleteUser.bind(this));
    return router;
  }
  getAllUsers(request, response) {
    console.log(
      "Hit getting all users route. Should hit service next."
    );
    // get all users
  }
  signup(request, response) {
    console.log(
      "Hit signup route. Should hit service next."
    );
    // post user
  }
  login(request, response) {
    console.log("Hit login route. Should hit login next.");
    // post user
  }
  getUser(request, response) {
    console.log(
      "Hit get user route. Should hit service next."
    );
    // get specific user
  }
  editUser(request, response) {
    console.log(
      "Hit edit user route. Should hit service next."
    );
    // edit user
  }
  deleteUser(request, response) {
    console.log(
      "Hit delete user route. Should hit service next."
    );
    // delete user
  }
}
