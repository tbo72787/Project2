var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile("index.html", { root: process.cwd() + "/views" });
  });

  // Load survey page
  app.get("/survey", function(req, res) {
    res.sendFile("quiz.html", { root: process.cwd() + "/views" });
  });

  // Load diagram page
  app.get("/diagram", function(req, res) {
    res.sendFile("diagram.html", { root: process.cwd() + "/views" });
  });

  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
