require("dotenv").config();
const bcrypt = require("../utils/bcrypt");
const config = require("../utils/config");
const knexConfig = require("../knexfile").development;
const knex = require("knex")(knexConfig);
// const jwt = require("jsonwebtoken");
const jwt = require("jwt-simple");
class UserService {
  constructor(knex) {
    this.knex = knex;
    // this.initialize();
  }
  initialize() {
    this.knex.migrate.latest();
  }
  cleanup() {
    this.knex.destroy();
  }
  async signup(name, username, password) {
    console.log(
      "Hit user service signup. Should be able to sign up user."
    );
    let checkUser = await this.knex("users")
      .select("*")
      .where({ username: username });
    if (checkUser[0]) {
      throw new Error("User already exists");
    } else {
      let hashedPassword = await bcrypt.hashPassword(
        password
      );
      let insertUser = await this.knex
        .insert({
          name: name,
          username: username,
          password: hashedPassword,
        })
        .into("users")
        .returning("id")
        .catch((error) => {
          throw new Error("err", error);
        });

      let payload = {
        id: insertUser[0],
        name: name,
        username: username,
      };
      console.log("payload", payload);
      let newToken = jwt.encode(payload, config.JWT_SECRET);
      return {
        token: newToken,
      };
    }
  }

  async login(username, password) {
    console.log(
      "Hit login service. Should be able to login."
    );
    if (!username || !password) {
      throw new Error("need username or password");
    }
    let user = await this.knex("users")
      .select("*")
      .where({ username: username });

    if (!user[0]) {
      throw new Error("email not verified");
    } else {
      let isMatch = await bcrypt.checkPassword(
        password,
        user[0].password
      );
      if (!isMatch) {
        throw new Error("not verified");
      }
      let payload = { ...user[0] };
      console.log("payload", payload);
      delete payload.password;
      let newToken = jwt.encode(payload, config.JWT_SECRET);
      return {
        token: newToken,
      };
    }
  }
  getAllUsers() {
    console.log(
      "Hit getting all users service. Should be able to get all users."
    );
    return this.knex("users")
      .select("*")
      .then((users) => {
        // console.log(users);
        return users;
      });
  }
  getUser(id) {
    console.log(
      "Hit get user service. Should be able to get user."
    );
    return this.knex("users")
      .select("*")
      .where({ id: id })
      .then((user) => {
        // console.log(user[0]);
        return user[0];
      });
  }
  editUser(id, newUser) {
    console.log(
      "Hit edit user service. Should be able to edit user."
    );
    return this.knex("users")
      .update(newUser)
      .where({ id: id })
      .then(() => {
        console.log("edited user");
        return "edited";
      });
  }
  deleteUser(id) {
    console.log(
      "Hit delete user service. Should be able to delete user."
    );
    return this.knex("users")
      .where({ id: id })
      .del()
      .then(() => {
        console.log("successfully deleted");
        return "deleted";
      });
  }
  deleteByUsername(username) {
    console.log(
      "Hit delete user service. Should be able to delete user."
    );
    return this.knex("users")
      .where({ username: username })
      .del()
      .then(() => {
        console.log("successfully deleted");
        return "deleted";
      });
  }
  getByUsername(username) {
    return this.knex("users")
      .select("*")
      .where({ username: username });
  }
}

// let userService = new UserService(knex);
// userService
//   .signup("lezzl3es13330", "orange")
//   .then((message) => {
//     console.log(message);
//   });

// userService.getByUsername("lezzles1").then((user) => {
//   console.log(user);
// });
// userService.login("lezzles4", "orange");
// userService.getAllUsers();
// userService.getUser(1);

// userService.editUser(1, {
//   username: "ryan",
//   password: "robert",
// });

// userService.deleteUser(1);

module.exports = UserService;
