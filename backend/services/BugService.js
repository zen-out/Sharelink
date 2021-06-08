const knexConfig = require("../knexfile").development;
const knex = require("knex")(knexConfig);

class BugService {
  constructor(knex) {
    this.knex = knex;
    this.initialize();
  }
  //   initialize() {
  //     return this.knex.migrate.latest();
  //   }
  cleanup() {
    return this.knex.destroy();
  }
  getAllBugs() {
    console.log(
      "Hit getting all bug service. Should list all bugs here."
    );
    return this.knex("bugs")
      .select("*")
      .then((bugs) => {
        return bugs;
      });
  }
  getUserBugs(id) {
    console.log(
      "Hit getting all users' bugs service. Should get all users' bugs."
    );
    return this.knex("bugs")
      .select("*")
      .where({ user_id: id })
      .then((bug) => {
        return bug;
      });
  }
  getTagBugs(id) {
    console.log(
      "Hit getting all tags' bugs service. Should get all bugs with this tag."
    );
  }
  getBug(id) {
    console.log("Hit getting bug service. Should get bug");
    return this.knex("bugs").select("*").where({ id: id });
  }
  postBug(bug) {
    console.log(
      "Hit post bug service. Should be able to post bug."
    );
    return this.knex("bugs")
      .insert(bug)
      .then(() => {
        return "posted";
      });
  }
  editBug(id, newBug) {
    console.log(
      "Hit edit bug service. Should be able to edit bug."
    );
    return this.knex("bugs")
      .where({ id: id })
      .update(newBug)
      .then(() => {
        return "edited";
      });
  }
  deleteBug(id) {
    console.log(
      "Hit delete bug service. Should be able to delete bug."
    );
    return this.knex("bugs")
      .where({ id: id })
      .del()
      .then(() => {
        return "deleted";
      });
  }
}

// let bugService = new BugService(knex);
module.exports = BugService;
