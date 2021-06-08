const UserRouter = require("../routers/UserRouter");
const UserService = require("../services/UserService");
const supertest = require("supertest");
const knexConfig = require("../knexfile").testing;
const knex = require("knex");

let service = new UserService(knex);
let router = new UserRouter(service);
router.cleanup();

let newRouter = router.router();

describe("User Routes", () => {
  test("/api/users should get all users", (done) => {
    supertest(newRouter)
      .get("/api/users")
      .expect(200)
      .end((error, response) => {
        if (error) {
          throw error;
        }
        done();
      });
  });
  test("/api/signup should be able to signup", (done) => {});
  test("/api/login should be able to login", (done) => {});
  test("/api/users/:id should be able to return user", (done) => {});
  test("/api/users/:id should be able to edit user", (done) => {});
  test("/api/users/:id should be able to delete user", (done) => {});
});
