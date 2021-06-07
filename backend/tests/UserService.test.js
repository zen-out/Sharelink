const UserService = require("../services/UserService");
const knexConfig = require("../knexfile").test;
const knex = require("knex")(knexConfig);

let testUserService = new UserService(knex);

describe("testing user service", () => {
  beforeAll(() => {
    testUserService.initialize();
  });
  afterAll(() => {
    testUserService.cleanup();
  });
  it("able to sign up", () => {
    return testUserService.signup("lezzles", "orange");
  });
  it("able to login", () => {});
  it("able to get all users", () => {});
  it("able to get one user", () => {});
  it("able to edit user", () => {});
});
