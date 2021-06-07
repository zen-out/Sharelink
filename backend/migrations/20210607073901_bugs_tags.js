exports.up = function (knex) {
  return knex.schema.createTable("bugs_tags", (table) => {
    table.increments();
    table.integer("user_id").unsigned();
    table.foreign("user_id").references("users.id");
    table.integer("bug_id").unsigned();
    table.foreign("bug_id").references("bugs.id");
    table.integer("tag_id").unsigned();
    table.foreign("tag_id").references("tags.id");
    table.timestamps(false, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("bugs_tags");
};
