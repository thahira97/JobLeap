// PG database client/connection setup
const { Pool } = require('pg');
require('dotenv').config();

const dbParams = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT
};


const db = new Pool(dbParams);

db.connect();

module.exports = db;
