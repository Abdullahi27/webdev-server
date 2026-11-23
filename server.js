require("dotenv").config();

var express = require("express");
var cors = require("cors");
var session = require("express-session");

var Lab5 = require("./Lab5");

var db =
  require("./Kambaz/Database");

var UserRoutes =
  require("./Kambaz/Users/routes");

var CourseRoutes =
  require("./Kambaz/Courses/routes");

var ModuleRoutes =
  require("./Kambaz/Modules/routes");

var AssignmentRoutes =
  require("./Kambaz/Assignments/routes");

var EnrollmentRoutes =
  require("./Kambaz/Enrollments/routes");

var app = express();

app.use(
  cors({
    credentials: true,
    origin:
      process.env.CLIENT_URL ||
      "http://localhost:3000",
  })
);

var sessionOptions = {
  secret:
    process.env.SESSION_SECRET ||
    "kambaz",

  resave: false,

  saveUninitialized: false,
};

if (
  process.env.SERVER_ENV !==
  "development"
) {
  sessionOptions.proxy = true;

  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}

app.use(
  session(sessionOptions)
);

app.use(express.json());

Lab5(app);

UserRoutes(
  app,
  db
);

CourseRoutes(
  app,
  db
);

ModuleRoutes(
  app,
  db
);

AssignmentRoutes(
  app,
  db
);

EnrollmentRoutes(
  app,
  db
);

app.get(
  "/hello",
  (req, res) => {
    res.send(
      "Hello World!"
    );
  }
);

app.listen(
  process.env.PORT ||
    4000
);