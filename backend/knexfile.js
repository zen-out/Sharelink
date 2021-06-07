// Update with your config settings.
require("dotenv").config();
const config = require("./utils/config");

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "debug",
      user: "postgres",
      password: "postgres",
    },
    migrations: {
      directory: __dirname + "/migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: config.DB_NAME,
      user: config.DB_USERNAME,
      password: config.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
