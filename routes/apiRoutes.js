var db = require("../models");

module.exports = function (app) {
  app.post("/results", function (req, res) {
    if (req.body.query === 1) {
      // States where job is most common
      db.Job.findAll({
        where: {
          occ_code: req.body.code,
          order: ["loc_q", "DESC"]
        }
      })
    }

    if (req.body.query === 2) {
      // Most common job in state
      db.Job.findAll({
        where: {
          area: req.body.state,
          order: ["jobs_1000", "DESC"],
          limit: 10
        }
      })
    }

    if (req.body.query === 3) {
      // Highest paying job in state
      db.Job.findAll({
        where: {
          area: req.body.state,
          order: ["a_mean", "DESC"],
          limit: 10
        }
      })
    };
  })
  };
