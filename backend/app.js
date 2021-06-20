require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const bugRoutesInfo =
  require("./utils/routeInfo").bugRoutesInfo;
const userRoutesInfo =
  require("./utils/routeInfo").userRoutesInfo;
const knexConfig = require("./knexfile").development;
const knex = require("knex")(knexConfig);
const PORT = process.env.PORT;

const UserService = require("./services/UserService");
const UserRouter = require("./routers/UserRouter");
const BugService = require("./services/BugService");
const BugRouter = require("./routers/BugRouter");

const userService = new UserService(knex);
const userRouter = new UserRouter(userService);
const bugService = new BugService(knex);
const bugRouter = new BugRouter(bugService);

const app = express();
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.use(cors());
app.use(bodyParser.json());
app.use("/", userRouter.router());
app.use("/", bugRouter.router());
app.post("/test", (request, response) => {
  console.log(request.body);
  response.send(request.body);
});
app.get("/", (request, response) => {
  response.render("intro", {
    bugRoutesInfo: bugRoutesInfo,
    userRoutesInfo: userRoutesInfo,
  });
});

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
