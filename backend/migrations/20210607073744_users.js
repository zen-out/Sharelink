exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    // table.increments("id") - should I leave it blank or not?
    table.increments("id");
    table.string("username");
    table.string("password");
    table.timestamps(false, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
