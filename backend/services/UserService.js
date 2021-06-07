require("dotenv").config();
const bcrypt = require("../utils/bcrypt");
const config = require("../utils/config");
const knexConfig = require("../knexfile").development;
const knex = require("knex")(knexConfig);
const jwt = require("jsonwebtoken");

class UserService {
  constructor(knex) {
    this.knex = knex;
  }
  signup(username, password) {
    console.log(
      "Hit user service signup. Should be able to sign up user."
    );
    knex("users")
      .select("*")
      .where({ username: username })
      .then((user) => {
        console.log("User", user);
        if (user.length > 0) {
          console.log("User already exists");
          return "User already exists";
          //   throw new Error("User already exists");
        } else {
          return bcrypt
            .hashPassword(password)
            .then((hashedPassword) => {
              this.knex
                .insert({
                  username: username,
                  password: hashedPassword,
                })
                .into("users")
                .returning("id")
                .then((id) => {
                  console.log(
                    "Able to post - here is the id:",
                    id
                  );
                  let payload = {
                    id: id[0],
                    username: username,
                  };
                  console.log("Payload", payload);
                  let token = jwt.sign(
                    payload,
                    config.JWT_SECRET
                  );
                  console.log("token", token);
                  return {
                    message: "signedup",
                    token: token,
                  };
                });
            });
        }
      });
  }
  login(username, password) {
    console.log(
      "Hit login service. Should be able to login."
    );
    if (!username || !password) {
      throw new Error("need username or password");
    }
    return this.knex("users")
      .select("*")
      .where({ username: username })
      .then((user) => {
        if (user.length > 0) {
          console.log("user", user[0]);
          let hashedPassword = user[0].password;
          return bcrypt
            .checkPassword(password, hashedPassword)
            .then((verify) => {
              console.log("Bcrypt is good: ", verify);
              if (verify !== true) {
                throw new Error("nah man wrong password");
              } else {
                let payload = { ...user[0] };
                console.log("User", payload);
                delete payload.password;
                console.log(
                  "Deleted password from payload",
                  payload
                );
                let token = jwt.sign(
                  payload,
                  config.JWT_SECRET
                );
                console.log("Token", token);
                return {
                  message: "loggedin",
                  token: token,
                };
              }
            });
        }
      });
  }
  getAllUsers() {
    console.log(
      "Hit getting all users service. Should be able to get all users."
    );
    return this.knex("users")
      .select("*")
      .then((users) => {
        console.log(users);
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
        console.log(user[0]);
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
      });
  }
}

let userService = new UserService(knex);
// userService.signup("lezzles5", "orange");
// userService.login("lezzles4", "orange");
// userService.getAllUsers();
// userService.getUser(1);

// userService.editUser(1, {
//   username: "ryan",
//   password: "robert",
// });

// userService.deleteUser(1);
