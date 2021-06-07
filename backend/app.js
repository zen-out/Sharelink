const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const knexConfig = require("./knexfile").development;
const knex = require("knex")(knexConfig);

const app = express();


