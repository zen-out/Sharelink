exports.up = function (knex) {
  return knex.schema
    .createTable("users", (table) => {
      // table.increments("id") - should I leave it blank or not?
      table.increments();
      table.string("name");
      table.string("username");
      table.string("password");
      table.timestamps(false, true);
    })
    .then(() => {
      return knex.schema.createTable(
        "users_bugs",
        (table) => {
          table.increments();
          table.integer("bug_id").unsigned();
          table.foreign("bug_id").references("bugs.id");
          table.integer("user_id").unsigned();
          table.foreign("user_id").references("users.id");
          table.timestamps(false, true);
        }
      );
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users_bugs").then(() => {
    return knex.schema.dropTable("users");
  });
};
