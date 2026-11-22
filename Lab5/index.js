var PathParameters = require("./PathParameters");
var QueryParameters = require("./QueryParameters");
var WorkingWithRemoteObjects = require("./WorkingWithRemoteObjects");
var WorkingWithRemoteArrays = require("./WorkingWithRemoteArrays");

function Lab5(app) {
  app.get("/lab5/welcome", (req, res) => {
    res.send("Welcome to Lab 5");
  });

  PathParameters(app);
  QueryParameters(app);
  WorkingWithRemoteObjects(app);
  WorkingWithRemoteArrays(app);
}

module.exports = Lab5;