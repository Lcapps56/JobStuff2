var path = require("path");
var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Job.findAll({
      attributes: ["occ_code", "occ_title"],
      group: ["occ_code", "occ_title"]
    }).then(function (data) {
      res.render("index", { jobs: data });
    })
  });

  // Load results page with relevant data
  app.get("/results/:query/:state/:code", function (req, res) {
    if (req.params.query === "1") {
      db.Job.findAll({
        where: {
          occ_code: req.params.code
        },
        order: [["loc_q", "DESC"]]
      }).then(function (data) {
        res.render("results", { results: data });
      })
    }

    if (req.params.query === "2") {
      // Most common job in state
      db.Job.findAll({
        where: {
          state_code: req.params.state
        },
        limit: 10,
        order: [["jobs_1000", "DESC"]]
      }).then(function (data) {
        res.render("results", { results: data });
      })
    }

    if (req.params.query === "3") {
      // Highest paying job in state
      db.Job.findAll({
        where: {
          state_code: req.params.state,
        },
        limit: 10,
        order: [["a_mean", "DESC"]]
      }).then(function (data) {
        res.render("results", { results: data });
      })
    };

    if (req.params.query === "4") {
      // AVG salary for this job
      db.Job.findAll({
        where: {
          occ_title: req.params.Job
        },
        limit: 10,
        order: [["a_pct50", "DESC"]]
      }).then(function (data) {
        res.json(data)
        db.Job.findAll({
          where: {
            occ_title: req.params.Job
          },
          limit: 10,
          order: [["h_pct50", "DESC"]]
        });
      });
    };

    // if (req.params.query === "5") {
    //   // everything about a job
    //   db.Job.findAll({
    //     where: {
    //       occ_code: req.params.code
    //     },
    //     limit: 10,
    //     order: [["jobs_1000"], ["tot_emp"], ["h_mean"], ["a_mean"], ["h_pct10"], ["h_pct25"], ["h_pct50"], ["h_pct75"], ["h_pct90"], ["a_pct10"], ["a_pct25"], ["a_pct50"], ["a_pct75"], ["a_pct90"], ["annual"], ["hourly"]]
    //   }).then(function (data) {
    //     res.render("results", { results: data });
    //   })
    // }

    // if (req.params.query === "6") {
    //   // everything about a state
    //   db.Job.findAll({
    //     where: {
    //       area: req.params.state
    //     },
    //     limit: 10,
    //     order: [["occ_title"], ["tot_emp"], ["h_mean"], ["a_mean"], ["h_pct10"], ["h_pct25"], ["h_pct50"], ["h_pct75"], ["h_pct90"], ["a_pct10"], ["a_pct25"], ["a_pct50"], ["a_pct75"], ["a_pct90"], ["annual"], ["hourly"]]
    //   }).then(function (data) {
    //     res.render("results", { results: data });
    //   })
    // }
  });
};