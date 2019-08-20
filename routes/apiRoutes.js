var db = require("../models");

var queryResults;

module.exports = function (app) {

  app.get("/api/jobs", function (req, res) {
    var jobList = [];
    db.Job.findAll({
      attributes: ["occ_title"],
      group: "occ_title"
    }).then(function (data) {
      for (var i = 0; i < data.length; i++) {
        jobList.push(data[i].occ_title);
      }
      console.log(jobList[0])
    })
  });

  app.post("/results", function (req, res) {
    if (req.body.query === "1") {
      // States where job is most common
      db.Job.findAll({
        where: {
          occ_code: req.body.code
        },
        order: [["loc_q", "DESC"]]
      }).then(function (data) {
        queryResults = data;
      })
    }

    if (req.body.query === "2") {
      // Most common job in state
      db.Job.findAll({
        where: {
          state_code: req.body.state
        },
        limit: 10,
        order: [["jobs_1000", "DESC"]]
      }).then(function (data) {
        res.json(data)
      })
    }

    if (req.body.query === "3") {
      // Highest paying job in state
      db.Job.findAll({
        where: {
          state_code: req.body.state,
        },
        limit: 10,
        order: [["a_mean", "DESC"]]
      }).then(function (data) {
        res.json(data)
      })
    };
    if (req.body.query === "4") {
      // AVG salary for this job
      db.Job.findAll({
        where: {
          occ_title: req.body.Job
        },
        limit: 10,
        order: [["a_pct50", "DESC"]]
      }).then(function (data) {
        res.json(data)
        db.Job.findAll({
          where: {
            occ_title: req.body.Job
          },
          limit: 10,
          order: [["h_pct50", "DESC"]]
        });
      });
    };
    if (req.body.query === "5") {
      // everything about a job
      db.Job.findAll({
        where: {
          occ_code: req.body.code
        },
        limit: 10,
        order: [["jobs_1000"], ["tot_emp"], ["h_mean"], ["a_mean"], ["h_pct10"], ["h_pct25"], ["h_pct50"], ["h_pct75"], ["h_pct90"], ["a_pct10"], ["a_pct25"], ["a_pct50"], ["a_pct75"], ["a_pct90"], ["annual"], ["hourly"]]
      }).then(function (data) {
        res.json(data)
      })
    }
    if (req.body.query === "6") {
      // everything about a state
      db.Job.findAll({
        where: {
          area: req.body.state
        },
        limit: 10,
        order: [["occ_title"], ["tot_emp"], ["h_mean"], ["a_mean"], ["h_pct10"], ["h_pct25"], ["h_pct50"], ["h_pct75"], ["h_pct90"], ["a_pct10"], ["a_pct25"], ["a_pct50"], ["a_pct75"], ["a_pct90"], ["annual"], ["hourly"]]
      }).then(function (data) {
        res.json(data)
      })
    }
  });
};

