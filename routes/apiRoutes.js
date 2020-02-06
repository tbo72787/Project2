var db = require("../models");

module.exports = function(app) {
  // Get all users
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Get all answers
  app.get("/api/answers", function(req, res) {
    db.Survey.findAll({}).then(function(dbSurvey) {
      res.json(dbSurvey);
    });
  });

  // Create a new user
  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Create a new survey
  app.post("/api/surveys", function(req, res) {
    db.Survey.create(req.body).then(function(dbSurvey) {
      res.json(dbSurvey);
    });
  });

  // Get user by id
  app.get("/api/users/:id", function(req, res) {
    db.User.findAll({ where: { id: req.params.id } }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Get answers by id
  app.get("/api/answers/:id", function(req, res) {
    db.Survey.findAll({ where: { id: req.params.id } }).then(function(dbSurvey) {
      res.json(dbSurvey);
    });
  });

  // Get connections by id
  app.get("/api/connections/:id", function(req, res) {
    db.Survey.findAll({ where: { id: req.params.id } }).then(function(dbConnections) {
      res.json(dbConnections);
    });
  });
};
