const db = require('../connection');

const getJobs = () => {
  return db.query("SELECT * FROM job_listings;");
};

module.exports = { getJobs };