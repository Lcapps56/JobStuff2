var db = require("../models");

module.exports = function (app) {
  app.post("/results", function (req, res) {
    if (req.body.query === 1) {
      // States where job is most common
      db.Job.findAll({
        where: {
          occ_code: req.body.code
        },
        order: [["loc_q", "DESC"]]
      }).then(function(data) {
        res.json(data)
      })
    }

    if (req.body.query === 2) {
      // Most common job in state
      db.Job.findAll({
        where: {
          area: req.body.state
        },
        limit: 10,
        order: [["jobs_1000", "DESC"]]
      }).then(function(data) {
        res.json(data)
      })
    }

    if (req.body.query === 3) {
      // Highest paying job in state
      db.Job.findAll({
        where: {
          area: req.body.state,
        },
        limit: 10,
        order: [["a_mean", "DESC"]]
      }).then(function(data) {
        res.json(data)
      })
    };
  })
  };