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
  test("able to post bug", () => {
    return testBugService.postBug({
      user_id: 11,
      problem: "life",
      whatactuallyis: "itshard",
      whatshouldbe: "hard",
      hypothesis: "expectations",
      plan: "lowerthem",
      tags: ["hello"],
    });
  });

  test("able to use search query", () => {
    // given search query and user id, should return all search queries that have that tag, problem, what actually is, what should be, hypothesis and plan
      
  });

  test("able to delete bug", () => {
    return testBugService.deleteBug(1).then((message) => {
      expect(message).toBe("deleted");
    });
  });

  test("able to get users' bugs", () => {
    return testBugService.getUserBugs(11).then((bugs) => {
      expect(bugs.length).toBeGreaterThan(1);
    });
  });

  test("able to get bug", () => {
    return testBugService.getBug(2).then((bug) => {
      expect(bug.length).toBe(1);
    });
  });
  test("able to get all bugs", () => {
    return testBugService.getAllBugs().then((bug) => {
      expect(bug.length).toBeGreaterThan(2);
    });
  });
  test("able to edit bug", () => {
    return testBugService
      .editBug(3, {
        user_id: 11,
        problem: "asdfasdf",
        whatactuallyis: "asdfasdf",
        whatshouldbe: "asdfasdf",
        hypothesis: "asdfasdf",
        plan: "asdfasdf",
      })
      .then((edited) => {
        expect(edited).toEqual("edited");
      });
  });
});
