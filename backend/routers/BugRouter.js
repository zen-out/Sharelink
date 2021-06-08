const express = require("express");

class BugRouter {
  constructor(bugService) {
    this.bugService = bugService;
  }
  router() {
    let router = express.Router();
    router.get("/api/bugs", this.getAllBugs.bind(this));
    router.get(
      "/api/users/:id/bugs",
      this.getUserBugs.bind(this)
    );
    router.get(
      "/api/tags/:id/bugs",
      this.getTagBugs.bind(this)
    );
    router.get("/api/bugs/:id", this.getBug.bind(this));
    router.post("/api/bugs", this.postBug.bind(this));
    router.put("/api/bugs/:id", this.editBug.bind(this));
    router.delete(
      "/api/bugs/:id",
      this.deleteBug.bind(this)
    );
    return router;
  }
  getAllBugs(request, response) {
    console.log(
      "Getting all bugs route. Should hit service next."
    );

    // get all bugs
  }
  getUserBugs(request, response) {
    console.log(
      "Getting all user bugs route. Should hit service next."
    );
  }
  getTagBugs(request, response) {
    console.log(
      "Getting all tag bugs route. Should hit service next."
    );
  }

  postBug(request, response) {
    console.log(
      "Hitting post bug route. Should hit service next."
    );
    // post bug
  }
  getBug(request, response) {
    console.log(
      "Hitting get bug route. Should hit service next."
    );
    // get specific bug
  }
  editBug(request, response) {
    console.log(
      "Hitting edit bug route. Should hit service next."
    );
    // edit bug
  }
  deleteBug(request, response) {
    console.log(
      "Hitting delete bug route. Should hit service next."
    );
    // delete bug
  }
}
module.exports = BugRouter;
