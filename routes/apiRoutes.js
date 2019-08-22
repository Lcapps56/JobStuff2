var db = require("../models");

module.exports = function (app) {
  app.post("/api/jobs", function (req, res) {
    db.Job.create({
      state_code: req.body.stateCode,
      occ_code: req.body.occCode,
      occ_title: req.body.occTitle,
      tot_emp: req.body.totalEmployed,
      jobs_1000: req.body.jobs1000,
      loc_q: req.body.locQ,
      h_mean: req.body.hMean,
      a_mean: req.body.aMean,
      h_pct10: "*",
      h_pct25: "*",
      h_pct50: req.body.hMedian,
      h_pct75: "*",
      h_pct90: "*",
      a_pct10: "*",
      a_pct25: "*",
      a_pct50: req.body.aMedian,
      a_pct75: "*",
      a_pct90: "*",
      annual: 0,
      hourly: 0
    }).then(function (result) {
      res.render("index")
    })
  });
}