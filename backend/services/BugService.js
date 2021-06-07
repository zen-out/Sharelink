const knexConfig = require("../knexfile").development;
const knex = require("knex")(knexConfig);

class BugService {
  constructor(knex) {
    this.knex = knex;
  }
  getAllBugs() {
    console.log(
      "Hit getting all bug service. Should list all bugs here."
    );
  }
  getUserBugs(id) {
    console.log(
      "Hit getting all users' bugs service. Should get all users' bugs."
    );
  }
  getTagBugs(id) {
    console.log(
      "Hit getting all tags' bugs service. Should get all bugs with this tag."
    );
  }
  getBug(id) {
    console.log("Hit getting bug service. Should get bug");
  }
  postBug(bug) {
    console.log(
      "Hit post bug service. Should be able to post bug."
    );
  }
  editBug(id, newBug) {
    console.log(
      "Hit edit bug service. Should be able to edit bug."
    );
  }
  deleteBug(id) {
    console.log(
      "Hit delete bug service. Should be able to delete bug."
    );
  }
}

let bugService = new BugService(knex);

