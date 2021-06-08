require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const knexConfig = require("./knexfile").development;
const knex = require("knex")(knexConfig);
const PORT = process.env.PORT;

const app = express();

app.get("/", (request, response) => {
  response.send("hello");
});

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
