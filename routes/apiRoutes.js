var db = require("../models");
var jobs = []
module.exports = function (app) {

  app.get("/api/jobs", function (req, res) {
    db.Job.findAll({
      group: "occ_title"
    }).then(function (response) {
      console.log(response)
      for (var i = 0; i < response.length; i++) {
        jobs.push(response[i].occ_title);
      }
      return jobs
    })
  })

  app.post("/results", function (req, res) {
    if (req.body.query === 1) {
      // States where job is most common
      db.Job.findAll({
        where: {
          occ_code: req.body.code
        },
        order: [["loc_q", "DESC"]]
      }).then(function (data) {
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
      }).then(function (data) {
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
      }).then(function (data) {
        res.json(data)
      })
    };
  })
};

module