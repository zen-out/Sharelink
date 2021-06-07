require("dotenv").config();

let PORT = process.env.PORT;
let DB_NAME = process.env.DB_NAME;
let DB_USERNAME = process.env.DB_USERNAME;
let DB_PASSWORD = process.env.DB_PASSWORD;
let FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID;
let NODE_ENV = process.env.NODE_ENV;
let JWT_SECRET = "snake";
console.log("DB_PASSWORD", DB_PASSWORD);

module.exports = {
  PORT,
  DB_NAME,
  JWT_SECRET,
  DB_USERNAME,
  DB_PASSWORD,
  FACEBOOK_APP_ID,
  NODE_ENV,
};
