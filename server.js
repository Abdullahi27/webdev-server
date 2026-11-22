var express = require("express");
var cors = require("cors");
var Lab5 = require("./Lab5");

var app = express();

app.use(cors());
app.use(express.json());

Lab5(app);

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || 4000);