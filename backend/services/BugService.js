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
      })
      .catch((error) => {
        throw new Error("error", error);
      });
  }
  getUserBugs(id) {
    console.log(
      "Hit getting all users' bugs service. Should get all users' bugs."
    );
    // join tables with users_bugs
    return this.knex("bugs")
      .select(
        "bugs.id",
        "bugs.problem",
        "bugs.whatshouldbe",
        "bugs.whatshouldbe",
        "bugs.whatactuallyis",
        "bugs.hypothesis",
        "bugs.plan"
      )
      .from("bugs")
      .join("users_bugs", "users_bugs.bug_id", "bugs.id")
      .join("users", "users.id", "users_bugs.user_id")
      .where({ user_id: id })
      .then((bug) => {
        return bug;
      })
      .catch((error) => {
        throw new Error("error", error);
      });
  }
  getTagBugs(id) {
    console.log(
      "Hit getting all tags' bugs service. Should get all bugs with this tag."
    );
  }
  getBug(id) {
    console.log("Hit getting bug service. Should get bug");
    return this.knex("bugs")
      .select("*")
      .where({ id: id })
      .catch((error) => {
        throw new Error("error", error);
      });
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
  async postBug(bug, userId) {
    console.log(
      "Hit post bug service. Should be able to post bug."
    );
    let USER_ID = parseInt(userId);
    console.log("Bug", bug.bug);
    console.log("userid", USER_ID);
    let realBug = bug.bug;
    console.log("Adding this bug into bugs table", realBug);
    let addToBugs = await this.postOneAddToBugs(realBug);
    console.log("Add to bugs", addToBugs[0]);
    let BUG_ID = addToBugs[0];
    let addToUsersBugs = await this.postTwoAddToUsersBugs(
      BUG_ID,
      USER_ID
    );
    console.log("Added to users bugs", addToUsersBugs[0]);
    console.log("Tags", realBug.tags);
    if (realBug.tags === []) {
      return "done";
    } else {
      for (let i = 0; i < realBug.tags.length; i++) {
        let addToTags = await this.postThreeAddToBugsTags(
          realBug.tags[i],
          BUG_ID
        );
        console.log(addToTags[0]);
      }
    }

    return "done";

    // return this.postOneAddToBugs(bug).then((bugId) => {
    //   BUG_ID = bugId[0];
    //   console.log(
    //     "first step done, posted to bugs table with bug id",
    //     BUG_ID,
    //     "userid",
    //     USER_ID
    //   );
    //   return this.postTwoAddToUsersBugs(BUG_ID, USER_ID)
    //     .then(() => {
    //       return bug.tags.map((tag) => {
    //         console.log("Mapping tag", tag);
    //         return this.postThreeAddToBugsTags(tag, BUG_ID);
    //       });
    //     })
    //     .then(() => {
    //       return "done";
    //     });
    // });
  }

  searchQuery(search, userId) {
    return (
      this.knex
        .select(
          "bugs.id",
          "bugs.problem",
          "bugs.whatshouldbe",
          "bugs.whatactuallyis",
          "bugs.hypothesis",
          "bugs.plan"
        )
        .from("bugs")
        //   .join("bugs_tags", "bugs.id", "bugs_tags.bug_id")
        //   .join("tags", "bugs_tags.tag_id", "tags.id")
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
            .orWhere("bugs.plan", "ilike", `%${search}%`);
          // .orWhere("tags.name", "ilike", `%${search}%`);
        })
        .catch((error) => {
          throw new Error("error", error);
        })
    );
  }
  getTags(bugId) {
    // if there is no parameter... then
    if (bugId) {
      return this.knex
        .select("tags.name")
        .from("tags")
        .join("bugs_tags", "bugs_tags.tag_id", "tags.id")
        .where("bugs_tags.bug_id", bugId)
        .catch((error) => {
          throw new Error("error", error);
        });
    } else {
      return {};
    }
  }
  doesItHaveATag(bugId) {
    return this.knex("bugs_tags")
      .select("*")
      .where({ bug_id: bugId })
      .catch((error) => {
        console.log("error", error);
      });
  }
  async getSearchedBugs(search, userId) {
    let searchedArray = [];
    let searchQuery = await this.searchQuery(
      search,
      userId
    );
    console.log("Getting serached bugs", searchQuery);

    for (let i = 0; i < searchQuery.length; i++) {
      // check if it exists in the bugs_tags
      let haveATag = await this.doesItHaveATag(
        searchQuery[i].id
      );
      if (haveATag.length > 0) {
        let tags = await this.getTags(searchQuery[i].id);
        searchedArray.push({
          ...searchQuery[i],
          tags: tags,
        });
      } else {
        searchedArray.push({ ...searchQuery[i] });
      }
    }
    // make sure each item in the array has a unique id
    const res = [
      ...searchedArray
        .reduce((a, c) => {
          a.set(c.id, c);
          return a;
        }, new Map())
        .values(),
    ];

    return res;
  }
  editBug(id, newBug) {
    let updatedBug = newBug.newBug;
    console.log(
      "Hit edit bug service. Should be able to edit bug. ID",
      id,
      "bug",
      updatedBug
    );
    return this.knex("bugs")
      .where({ id: id })
      .update(updatedBug)
      .then(() => {
        return "edited";
      })
      .catch((error) => {
        throw new Error("error", error);
      });
  }
  deleteBug(id) {
    console.log(
      "Hit delete bug service. Should be able to delete bug."
    );
    // delete from bugs_tags where bug_id = id
    // delete from users_bugs where bug_id = id
    // delete from bugs where id=id
    return this.knex("users_bugs")
      .where({ bug_id: id })
      .del()
      .then(() => {
        console.log("deleted bug from users_bugs");
        return this.knex("bugs_tags")
          .where({ bug_id: id })
          .del()
          .then(() => {
            console.log("deleted bug from bugs_tags");
            return this.knex("bugs")
              .where({ id: id })
              .del()
              .then(() => {
                console.log("deleted bug from bugs");
                return "deleted from three tables";
              });
          });
      })
      .catch((error) => {
        throw new Error("error", error);
      });
  }
}

// let bugService = new BugService(knex);
module.exports = BugService;
