const knexConfig = require("../knexfile").development;
const knex = require("knex")(knexConfig);

class BugService {
  constructor(knex) {
    this.knex = knex;
    // this.initialize();
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

  postOneAddToBugs(bug) {
    return this.knex
      .insert({
        problem: bug.problem,
        whatshouldbe: bug.whatshouldbe,
        whatactuallyis: bug.whatactuallyis,
        hypothesis: bug.hypothesis,
        plan: bug.plan,
      })
      .into("bugs")
      .returning("id")
      .catch((error) => {
        throw new Error(error);
      });
  }
  postTwoAddToUsersBugs(bugId, userId) {
    return this.knex
      .insert({
        bug_id: bugId,
        user_id: userId,
      })
      .into("users_bugs")
      .returning("id")
      .catch((error) => {
        throw new Error(error);
      });
  }

  postBugsTags(bugId, tagId) {
    return this.knex
      .insert({ bug_id: bugId, tag_id: tagId })
      .into("bugs_tags")
      .returning("id")
      .catch((error) => {
        throw new Error(error);
      });
  }
  postThreeAddToBugsTags(tag, bugId) {
    return this.knex
      .select("*")
      .from("tags")
      .where({ name: tag.name })
      .then((data) => {
        return data;
      })
      .then((doesTagNameExist) => {
        if (doesTagNameExist[0] === undefined) {
          console.log("tag doesn't exist yet");
          return this.knex
            .insert({ name: tag.name })
            .into("tags")
            .returning("id")
            .then((tagId) => {
              console.log("doesn't exist", tagId[0]);
              return this.postBugsTags(
                bugId,
                tagId[0]
              ).then((id) => {
                return id;
              });
            });
        } else {
          console.log("tag exists");
          return this.postBugsTags(
            bugId,
            doesTagNameExist[0].id
          );
        }
      });
  }
  postBug(bug, userId) {
    console.log(
      "Hit post bug service. Should be able to post bug."
    );
    let BUG_ID;
    let USER_ID = parseInt(userId);
    return this.postOneAddToBugs(bug).then((bugId) => {
      BUG_ID = bugId[0];
      console.log(
        "first step done, posted to bugs table with bug id",
        BUG_ID,
        "userid",
        USER_ID
      );
      return this.postTwoAddToUsersBugs(BUG_ID, USER_ID)
        .then(() => {
          return bug.tags.map((tag) => {
            console.log("Mapping tag", tag);
            return this.postThreeAddToBugsTags(tag, BUG_ID);
          });
        })
        .then(() => {
          return "done";
        });
    });
  }

  searchQuery(search, userId) {
    return this.knex
      .select(
        "bugs.id",
        "bugs.problem",
        "bugs.whatshouldbe",
        "bugs.whatactuallyis",
        "bugs.hypothesis",
        "bugs.plan"
        // "bugs_tags.id",
        // "tags.name"
      )
      .from("bugs")
      .join("bugs_tags", "bugs.id", "bugs_tags.bug_id")
      .join("tags", "bugs_tags.tag_id", "tags.id")
      .join("users_bugs", "users_bugs.bug_id", "bugs.id")
      .join("users", "users.id", "users_bugs.user_id")
      .where("users.id", userId)
      .andWhere((subcondition) => {
        subcondition
          .where("bugs.problem", "ilike", `%${search}%`)
          .orWhere(
            "bugs.whatshouldbe",
            "ilike",
            `%${search}%`
          )
          .orWhere(
            "bugs.whatactuallyis",
            "ilike",
            `%${search}%`
          )
          .orWhere(
            "bugs.hypothesis",
            "ilike",
            `%${search}%`
          )
          .orWhere("bugs.plan", "ilike", `%${search}%`)
          .orWhere("tags.name", "ilike", `%${search}%`);
      });
  }
  getTags(bugId) {
    return this.knex
      .select("tags.name")
      .from("tags")
      .join("bugs_tags", "bugs_tags.tag_id", "tags.id")
      .where("bugs_tags.bug_id", bugId);
  }
  async getSearchedBugs(search, userId) {
    let searchedArray = [];
    let searchQuery = await this.searchQuery(
      search,
      userId
    );
    console.log(searchQuery);
    for (let i = 0; i < searchQuery.length; i++) {
      let tags = await this.getTags(searchQuery[i].id);
      console.log(tags);
      searchedArray.push({ ...searchQuery[i], tags: tags });
    }
    return searchedArray;
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
