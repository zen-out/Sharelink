const express = require("express");

class BugRouter {
  constructor(bugService) {
    this.bugService = bugService;
  }
  router() {
    let router = express.Router();
    router.get("/api/bugs", this.getAllBugs.bind(this));
    router.get(
      "/api/users/:userId/bugs",
      this.getUserBugs.bind(this)
    );
    router.get("/api/bugs/:id", this.getBug.bind(this));

    router.post(
      "/api/bugs/:userId",
      this.postBug.bind(this)
    );
    router.get(
      "/api/search/:userId/:search",
      this.getSearchedBugs.bind(this)
    );
    router.put("/api/bugs/:id", this.editBug.bind(this));
    router.delete(
      "/api/bugs/:id",
      this.deleteBug.bind(this)
    );

    return router;
  }
  // api/search/:userId/:search
  getSearchedBugs(request, response) {
    let search = request.params.search;
    let userId = request.params.userId;

    console.log(
      "Hit search bug route",
      "search:",
      search,
      "userid",
      userId
    );
    console.log("Search:", search, " Userid", userId);
    return this.bugService
      .getSearchedBugs(search, userId)

      .then((bugs) => {
        response.send(bugs);
      });
  }
  // api/bugs
  getAllBugs(request, response) {
    console.log(
      "Getting all bugs route. Should hit service next."
    );
    return this.bugService.getAllBugs().then((bugs) => {
      response.json(bugs);
    });

    // get all bugs
  }
  getUserBugs(request, response) {
    console.log(
      "Getting all user bugs route. Should hit service next."
    );
    let userId = request.params.userId;
    return this.bugService
      .getUserBugs(userId)
      .then((bugs) => {
        response.json(bugs);
      });
  }
  postBug(request, response) {
    console.log(
      "Hitting post bug route. Should hit service next."
    );
    let bug = request.body.bug;
    let userId = request.params.userId;
    console.log(bug, userId);
    return this.bugService
      .postBug(bug, userId)
      .then((bugServiceResponse) => {
        response.send(bugServiceResponse);
      });
  }
  getBug(request, response) {
    console.log(
      "Hitting get bug route. Should hit service next."
    );
    let id = request.params.id;
    return this.bugService.getBug(id).then((bug) => {
      response.send(bug[0]);
    });
    // get specific bug
  }
  editBug(request, response) {
    console.log(
      "Hitting edit bug route. Should hit service next."
    );
    let id = request.params.id;
    let newBug = request.body;
    return this.bugService
      .editBug(id, newBug)
      .then((edited) => {
        response.send(edited);
      });

    // edit bug
  }
  deleteBug(request, response) {
    console.log(
      "Hitting delete bug route. Should hit service next."
    );
    let id = request.params.id;
    return this.bugService.deleteBug(id).then((deleted) => {
      response.send(deleted);
    });
    // delete bug
  }
}
module.exports = BugRouter;
