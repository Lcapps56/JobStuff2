module.exports = function (sequelize, DataTypes) {
  var Job = sequelize.define("Job", {
    id: {
      type: DataTypes.MEDIUMINT,
      primaryKey: true,
      autoIncrement: true
    },
    state_code: DataTypes.STRING,
    occ_code: DataTypes.STRING,
    occ_title: DataTypes.STRING,
    tot_emp: DataTypes.STRING,
    jobs_1000: DataTypes.STRING,
    loc_q: DataTypes.STRING,
    h_mean: DataTypes.STRING,
    a_mean: DataTypes.STRING,
    h_pct10: DataTypes.STRING,
    h_pct25: DataTypes.STRING,
    h_pct50: DataTypes.STRING,
    h_pct75: DataTypes.STRING,
    h_pct90: DataTypes.STRING,
    a_pct10: DataTypes.STRING,
    a_pct25: DataTypes.STRING,
    a_pct50: DataTypes.STRING,
    a_pct75: DataTypes.STRING,
    a_pct90: DataTypes.STRING,
    annual: DataTypes.BOOLEAN,
    hourly: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  });
  return Job;
};
