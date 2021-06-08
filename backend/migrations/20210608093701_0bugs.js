exports.up = function (knex) {
  return knex.schema.createTable("bugs", (table) => {
    table.increments();
    table.string("problem");
    table.string("whatactuallyis");
    table.string("whatshouldbe");
    table.string("hypothesis");
    table.string("plan");
    table.timestamps(false, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("bugs");
};
