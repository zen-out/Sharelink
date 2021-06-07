const UserService = require("../services/UserService");
const knexConfig = require("../knexfile").testing;
const knex = require("knex")(knexConfig);

let testUserService = new UserService(knex);

beforeAll(() => {
  testUserService.initialize();
});
afterAll(() => {
  testUserService.cleanup();
});
describe("testing user service", () => {
  test("able to delete user", () => {
    return testUserService
      .deleteByUsername("lezzles111")
      .then((user) => {
        expect(user).toBe("deleted");
      })
      .catch((error) => {
        console.log("error", error);
      });
  });
  test("sign up new user", () => {
    return testUserService
      .signup("lezzles111", "orange")
      .then((user) => {
        expect(user.message).toBe("signedup");
      })
      .catch((error) => {
        console.log("error", error);
      });
  });
  test("checks if user already signed up", () => {
    return testUserService
      .signup("lezzles111", "orange")
      .then((user) => {
        expect(user).toBe("User already exists");
      })
      .catch((error) => {
        console.log("error", error);
      });
  });
  test("able to login", () => {
    return testUserService
      .login("lezzles11", "orange")
      .then((message) => {
        // console.log(message);
        expect(message.message).toBe("loggedin");
      });
  });
  test("able to get all users", () => {
    return testUserService.getAllUsers().then((users) => {
      expect(users.length).toBe(3);
    });
  });
  test("able to get one user", () => {
    return testUserService
      .getByUsername("lezzles")
      .then((user) => {
        expect(user.length).toBe(1);
      });
  });
  //   it("able to edit user", () => {});
});
