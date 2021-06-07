const BugService = require("../services/BugService");
const knexConfig = require("../knexfile").testing;
const knex = require("knex")(knexConfig);

let testBugService = new BugService(knex);

beforeAll(() => {
  testBugService.initialize();
});
afterAll(() => {
  testBugService.cleanup();
});

describe("testing bug service", () => {
  test("able to get users' bugs", () => {});
  test("able to post bug", () => {});
  test("able to get bug", () => {});
  test("able to get all bugs", () => {});
  test("able to edit bug", () => {});
  test("able to delete bug", () => {});
});
